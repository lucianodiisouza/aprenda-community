#!/usr/bin/env node
// scripts/lint.mjs
//
// Lint leve de .mdx:
//  - Cada arquivo tem frontmatter entre `---`
//  - Linhas não passam de 200 chars (sinal de copy-paste mal feito)
//  - Sem `?utm_` (tracking)
//  - Blocos de código têm linguagem declarada (```html em vez de só ```)
//
// Sem dependências externas.

import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const ROADMAPS_DIR = join(ROOT, "roadmaps");

let warnings = 0;
let errors = 0;
const warn = (msg) => {
  warnings++;
  console.warn(`⚠️  ${msg}`);
};
const err = (msg) => {
  errors++;
  console.error(`❌ ${msg}`);
};
const ok = (msg) => console.log(`✅ ${msg}`);

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

const files = [];
for await (const f of walkMdx(ROADMAPS_DIR)) files.push(f);

if (files.length === 0) {
  console.log("Nenhum .mdx encontrado em roadmaps/.");
} else {
  for (const path of files) {
    const rel = relative(ROOT, path);
    const content = await readFile(path, "utf8");
    const lines = content.split(/\r?\n/);

    if (!content.startsWith("---")) {
      err(`${rel}: não começa com frontmatter (---)`);
      continue;
    }
    const end = content.indexOf("\n---", 3);
    if (end === -1) {
      err(`${rel}: frontmatter não fechado (esperado "---" na linha seguinte)`);
      continue;
    }

    // Linhas muito longas
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length > 200) {
        warn(`${rel}:${i + 1}: linha com ${lines[i].length} chars (considere quebrar)`);
      }
    }

    // Tracking parameters
    if (/\?utm_/i.test(content)) {
      err(`${rel}: contém parâmetro ?utm_ (remova tracking)`);
    }

    // Blocos de código sem linguagem
    const fences = content.match(/^```(\S*)/gm) || [];
    for (const fence of fences) {
      if (fence.replace(/^```/, "") === "") {
        warn(`${rel}: bloco de código sem linguagem declarada (use \`\`\`html, \`\`\`bash, etc.)`);
      }
    }

    ok(`${rel}`);
  }
}

console.log("");
console.log(`Lint: ${errors} erro(s), ${warnings} aviso(s).`);
process.exit(errors > 0 ? 1 : 0);
