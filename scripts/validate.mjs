#!/usr/bin/env node
// scripts/validate.mjs
//
// Valida a estrutura das trilhas:
//  - todo roadmaps/<slug>/roadmap.json é JSON válido
//  - slugs únicos
//  - todo `id` em `nodes` é único dentro da trilha
//  - todo `id` em `children` existe em `nodes`
//  - todo nó tem um arquivo nodes/<id>.mdx correspondente
//  - todo nodes/<id>.mdx tem frontmatter com `id` igual ao filename
//
// Sem dependências externas. Roda com `node scripts/validate.mjs`.

import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./_frontmatter.mjs";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const ROADMAPS_DIR = join(ROOT, "roadmaps");

let errors = 0;
const warn = (msg) => console.warn(`⚠️  ${msg}`);
const err = (msg) => {
  errors++;
  console.error(`❌ ${msg}`);
};
const ok = (msg) => console.log(`✅ ${msg}`);

async function listRoadmaps() {
  let entries;
  try {
    entries = await readdir(ROADMAPS_DIR, { withFileTypes: true });
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function loadRoadmap(slug) {
  const jsonPath = join(ROADMAPS_DIR, slug, "roadmap.json");
  let content;
  try {
    content = await readFile(jsonPath, "utf8");
  } catch (e) {
    err(`roadmap.json não encontrado em roadmaps/${slug}/`);
    return null;
  }
  try {
    return JSON.parse(content);
  } catch (e) {
    err(`JSON inválido em ${relative(ROOT, jsonPath)}: ${e.message}`);
    return null;
  }
}

async function loadNodeFile(slug, id) {
  const path = join(ROADMAPS_DIR, slug, "nodes", `${id}.mdx`);
  try {
    const content = await readFile(path, "utf8");
    return { path, content };
  } catch {
    return { path, content: null };
  }
}

async function validateRoadmap(slug) {
  console.log(`\n📂 Trilha: ${slug}`);
  const roadmap = await loadRoadmap(slug);
  if (!roadmap) return;

  // Campos básicos
  if (!roadmap.slug) err(`  roadmap.json: campo "slug" ausente`);
  else if (roadmap.slug !== slug) err(`  roadmap.json: slug "${roadmap.slug}" não bate com a pasta "${slug}"`);

  if (!roadmap.title) err(`  roadmap.json: campo "title" ausente`);
  if (!roadmap.description) err(`  roadmap.json: campo "description" ausente`);
  if (!["iniciante", "intermediario", "avancado"].includes(roadmap.difficulty)) {
    err(`  roadmap.json: difficulty deve ser iniciante|intermediario|avancado (recebido: ${roadmap.difficulty})`);
  }
  if (!Array.isArray(roadmap.nodes) || roadmap.nodes.length === 0) {
    err(`  roadmap.json: "nodes" deve ser um array não-vazio`);
    return;
  }

  // IDs únicos + children existentes
  const ids = new Set();
  for (const node of roadmap.nodes) {
    if (!node.id) {
      err(`  nó sem id: ${JSON.stringify(node)}`);
      continue;
    }
    if (ids.has(node.id)) err(`  id duplicado: "${node.id}"`);
    ids.add(node.id);

    if (!["topic", "subtopic", "milestone"].includes(node.type)) {
      err(`  nó "${node.id}": type deve ser topic|subtopic|milestone (recebido: ${node.type})`);
    }
    if (typeof node.recommended !== "boolean") {
      err(`  nó "${node.id}": "recommended" deve ser boolean (recebido: ${typeof node.recommended})`);
    }
    if (!Array.isArray(node.children)) {
      err(`  nó "${node.id}": "children" deve ser array`);
    } else {
      for (const child of node.children) {
        if (!ids.has(child) && !roadmap.nodes.find((n) => n.id === child)) {
          err(`  nó "${node.id}" referencia child inexistente: "${child}"`);
        }
      }
    }
  }

  // Verifica arquivos .mdx
  for (const node of roadmap.nodes) {
    const { path, content } = await loadNodeFile(slug, node.id);
    if (content === null) {
      err(`  nó "${node.id}": arquivo ausente em ${relative(ROOT, path)}`);
      continue;
    }
    const fm = parseFrontmatter(content);
    if (!fm) {
      err(`  ${relative(ROOT, path)}: frontmatter inválido ou ausente`);
      continue;
    }
    if (fm.id !== node.id) {
      err(`  ${relative(ROOT, path)}: frontmatter id "${fm.id}" não bate com filename/roadmap "${node.id}"`);
    }
    if (!fm.title) {
      err(`  ${relative(ROOT, path)}: frontmatter "title" ausente`);
    }
    if (fm.resources !== undefined && !Array.isArray(fm.resources)) {
      err(`  ${relative(ROOT, path)}: frontmatter "resources" deve ser uma lista`);
    } else if (Array.isArray(fm.resources)) {
      if (fm.resources.length === 0) {
        warn(`  ${relative(ROOT, path)}: "resources" está vazio (mínimo 1)`);
      } else if (fm.resources.length > 3) {
        warn(`  ${relative(ROOT, path)}: "resources" tem ${fm.resources.length} itens (máx recomendado: 3)`);
      }
      for (const r of fm.resources) {
        if (!r.url) err(`  recurso em ${relative(ROOT, path)}: campo "url" ausente`);
        if (!r.title) err(`  recurso em ${relative(ROOT, path)}: campo "title" ausente`);
        if (r.lang && !["pt", "en"].includes(r.lang)) {
          err(`  recurso em ${relative(ROOT, path)}: lang deve ser "pt" ou "en" (recebido: ${r.lang})`);
        }
        if (r.free !== undefined && typeof r.free !== "boolean") {
          err(`  recurso em ${relative(ROOT, path)}: free deve ser boolean`);
        }
      }
    }
  }

  ok(`  Trilha "${roadmap.title || slug}" validou estrutura (${roadmap.nodes.length} nós).`);
}

const slugs = await listRoadmaps();
if (slugs.length === 0) {
  console.log("Nenhuma trilha encontrada em roadmaps/.");
} else {
  for (const slug of slugs) {
    await validateRoadmap(slug);
  }
}

console.log("");
if (errors > 0) {
  console.error(`💥 ${errors} erro(s) encontrado(s).`);
  process.exit(1);
} else {
  console.log("🎉 Tudo certo.");
  process.exit(0);
}
