#!/usr/bin/env node
// scripts/check-links.mjs
//
// HEAD em cada URL encontrada nos frontmatters `resources:`.
// Best-effort: timeout curto, aceita 2xx e 3xx; trata 405 (alguns servers
// não aceitam HEAD) seguindo com GET. Roda com concorrência limitada.
//
// Sem dependências externas.

import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./_frontmatter.mjs";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const ROADMAPS_DIR = join(ROOT, "roadmaps");
const TIMEOUT_MS = 8000;
const CONCURRENCY = 6;

async function* walkMdx(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walkMdx(full);
    else if (e.isFile() && e.name.endsWith(".mdx")) yield full;
  }
}

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, { method: "HEAD", signal: controller.signal, redirect: "follow" });
    // Alguns servidores não aceitam HEAD - tenta GET.
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, { method: "GET", signal: controller.signal, redirect: "follow" });
    }
    if (res.ok || (res.status >= 300 && res.status < 400)) {
      return { ok: true, status: res.status };
    }
    return { ok: false, status: res.status };
  } catch (e) {
    return { ok: false, error: e.name === "AbortError" ? "timeout" : e.message };
  } finally {
    clearTimeout(timer);
  }
}

const tasks = [];
for await (const path of walkMdx(ROADMAPS_DIR)) {
  const rel = relative(ROOT, path);
  const content = await readFile(path, "utf8");
  const fm = parseFrontmatter(content);
  const resources = (fm && Array.isArray(fm.resources)) ? fm.resources : [];
  for (const r of resources) {
    if (!r.url) continue;
    tasks.push({ file: rel, url: r.url, title: r.title });
  }
}

console.log(`Checando ${tasks.length} URL(s) com concorrência ${CONCURRENCY}...\n`);

let idx = 0;
let okCount = 0;
let failCount = 0;
const failures = [];

async function worker() {
  while (idx < tasks.length) {
    const i = idx++;
    const t = tasks[i];
    const result = await check(t.url);
    if (result.ok) {
      okCount++;
      console.log(`✅ [${result.status}] ${t.url}  (${t.file})`);
    } else {
      failCount++;
      failures.push({ ...t, ...result });
      console.log(`❌ [${result.status || result.error}] ${t.url}  (${t.file})`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.log(`\n📊 Resultado: ${okCount} ok, ${failCount} com problema.`);
if (failCount > 0) {
  console.log("\nLinks com problema (best-effort, vale checar manualmente):");
  for (const f of failures) {
    console.log(`  - ${f.url}  → ${f.status || f.error}  (em ${f.file})`);
  }
}
process.exit(0);
