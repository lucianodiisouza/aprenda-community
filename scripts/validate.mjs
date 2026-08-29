#!/usr/bin/env node
// scripts/validate.mjs
//
// Valida a estrutura das trilhas e dos projetos:
//  - todo roadmaps/<slug>/roadmap.json é JSON válido
//  - slugs únicos
//  - todo `id` em `nodes` é único dentro da trilha
//  - todo `id` em `children` existe em `nodes`
//  - todo nó tem um arquivo nodes/<id>.mdx correspondente
//  - todo nodes/<id>.mdx tem frontmatter com `id` igual ao filename
//  - todo projects/<slug>.mdx tem frontmatter válido
//  - `slug` do frontmatter do projeto bate com o nome do arquivo
//  - `trilhas` referenciadas em projetos existem em roadmaps/
//
// Sem dependências externas. Roda com `node scripts/validate.mjs`.

import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./_frontmatter.mjs";

const ROOT = resolve(fileURLToPath(import.meta.url), "..", "..");
const ROADMAPS_DIR = join(ROOT, "roadmaps");
const PROJECTS_DIR = join(ROOT, "projects");
const BOOTCAMPS_DIR = join(ROOT, "bootcamps");

let errors = 0;
const warn = (msg) => console.warn(`⚠️  ${msg}`);
const err = (msg) => {
  errors++;
  console.error(`❌ ${msg}`);
};
const ok = (msg) => console.log(`✅ ${msg}`);

/**
 * Valida um array `creators`. O `github` é a chave que liga o criador ao índice
 * de contribuidores (contributors.json) e ao perfil público - sem ele, a pessoa
 * some da agregação. Por isso é obrigatório em cada entrada.
 */
function checkCreators(creators, where) {
  if (creators === undefined) return;
  if (!Array.isArray(creators)) {
    err(`  ${where}: "creators" deve ser uma lista`);
    return;
  }
  creators.forEach((c, i) => {
    if (typeof c !== "object" || c === null) {
      err(`  ${where}: creators[${i}] deve ser um objeto { name, github }`);
      return;
    }
    if (!c.github || typeof c.github !== "string") {
      err(`  ${where}: creators[${i}] sem "github" (obrigatório - é a chave do contribuidor)`);
    }
    if (!c.name || typeof c.name !== "string") {
      err(`  ${where}: creators[${i}] sem "name"`);
    }
  });
}

/**
 * Extrai o id do vídeo de uma URL do YouTube (watch, youtu.be, embed, shorts,
 * incluindo o domínio youtube-nocookie.com). Retorna null se não reconhecer.
 * Espelha `youTubeId` do schema do app (packages/content/src/schema.ts).
 */
function youTubeIdFromUrl(url) {
  let u;
  try {
    u = new URL(url);
  } catch {
    return null;
  }
  const host = u.hostname.replace(/^www\./, "").replace(/^m\./, "");
  if (host === "youtu.be") return u.pathname.slice(1) || null;
  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (u.pathname === "/watch") return u.searchParams.get("v") || null;
    const m = u.pathname.match(/^\/(?:embed|shorts)\/([^/?#]+)/);
    if (m) return m[1] ?? null;
  }
  return null;
}

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

  // intro_video (opcional): objeto { url, title? } com URL de YouTube válida.
  if (roadmap.intro_video !== undefined) {
    const iv = roadmap.intro_video;
    if (typeof iv !== "object" || iv === null || Array.isArray(iv)) {
      err(`  roadmap.json: "intro_video" deve ser um objeto { url, title? }`);
    } else {
      if (typeof iv.url !== "string" || !iv.url) {
        err(`  roadmap.json: "intro_video.url" ausente ou não é string`);
      } else if (youTubeIdFromUrl(iv.url) === null) {
        err(`  roadmap.json: "intro_video.url" deve ser um vídeo do YouTube válido (recebido: ${iv.url})`);
      }
      if (iv.title !== undefined && typeof iv.title !== "string") {
        err(`  roadmap.json: "intro_video.title" deve ser string`);
      }
    }
  }

  checkCreators(roadmap.creators, `roadmaps/${slug}/roadmap.json`);

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

async function listProjects() {
  try {
    const entries = await readdir(PROJECTS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
      .map((e) => e.name.replace(/\.mdx$/, ""));
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
}

async function loadProjectFile(slug) {
  const path = join(PROJECTS_DIR, `${slug}.mdx`);
  try {
    const content = await readFile(path, "utf8");
    return { path, content };
  } catch {
    return { path, content: null };
  }
}

async function validateProject(slug, knownRoadmapSlugs) {
  const { path, content } = await loadProjectFile(slug);
  if (content === null) {
    err(`  projeto "${slug}": arquivo ausente em ${relative(ROOT, path)}`);
    return;
  }
  const fm = parseFrontmatter(content);
  if (!fm) {
    err(`  ${relative(ROOT, path)}: frontmatter inválido ou ausente`);
    return;
  }
  if (fm.slug !== slug) {
    err(`  ${relative(ROOT, path)}: frontmatter slug "${fm.slug}" não bate com filename "${slug}"`);
  }
  if (!fm.title) {
    err(`  ${relative(ROOT, path)}: frontmatter "title" ausente`);
  }
  if (!fm.description) {
    err(`  ${relative(ROOT, path)}: frontmatter "description" ausente`);
  }
  if (!["iniciante", "intermediario", "avancado"].includes(fm.difficulty)) {
    err(`  ${relative(ROOT, path)}: difficulty deve ser iniciante|intermediario|avancado (recebido: ${fm.difficulty})`);
  }
  if (fm.skills !== undefined && !Array.isArray(fm.skills)) {
    err(`  ${relative(ROOT, path)}: frontmatter "skills" deve ser uma lista`);
  }
  if (fm.trilhas !== undefined) {
    if (!Array.isArray(fm.trilhas)) {
      err(`  ${relative(ROOT, path)}: frontmatter "trilhas" deve ser uma lista`);
    } else {
      for (const t of fm.trilhas) {
        if (!knownRoadmapSlugs.has(t)) {
          err(`  ${relative(ROOT, path)}: trilha referenciada inexistente: "${t}"`);
        }
      }
    }
  }
  checkCreators(fm.creators, relative(ROOT, path));
  ok(`  Projeto "${fm.title || slug}" validou estrutura.`);
}

async function listBootcamps() {
  let entries;
  try {
    entries = await readdir(BOOTCAMPS_DIR, { withFileTypes: true });
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function validateBootcamp(slug, knownRoadmapSlugs, knownProjectSlugs) {
  const jsonPath = join(BOOTCAMPS_DIR, slug, "bootcamp.json");
  let content;
  try {
    content = await readFile(jsonPath, "utf8");
  } catch {
    err(`  bootcamp.json não encontrado em bootcamps/${slug}/`);
    return;
  }
  let bc;
  try {
    bc = JSON.parse(content);
  } catch (e) {
    err(`  JSON inválido em ${relative(ROOT, jsonPath)}: ${e.message}`);
    return;
  }

  if (!bc.slug) err(`  bootcamp.json: campo "slug" ausente`);
  else if (bc.slug !== slug) err(`  bootcamp.json: slug "${bc.slug}" não bate com a pasta "${slug}"`);
  if (!bc.title) err(`  bootcamp.json: campo "title" ausente`);
  if (!bc.description) err(`  bootcamp.json: campo "description" ausente`);
  if (!bc.outcome) err(`  bootcamp.json: campo "outcome" ausente (o que a pessoa sabe fazer ao concluir)`);
  if (!["iniciante", "intermediario", "avancado"].includes(bc.difficulty)) {
    err(`  bootcamp.json: difficulty deve ser iniciante|intermediario|avancado (recebido: ${bc.difficulty})`);
  }
  checkCreators(bc.creators, `bootcamps/${slug}/bootcamp.json`);
  if (!Array.isArray(bc.modules) || bc.modules.length === 0) {
    err(`  bootcamp.json: "modules" deve ser um array não-vazio`);
    return;
  }

  bc.modules.forEach((mod, i) => {
    const temTrilha = typeof mod.trilha === "string";
    const temProjeto = typeof mod.projeto === "string";
    if (temTrilha === temProjeto) {
      err(`  módulo #${i + 1}: use exatamente UMA chave, "trilha" OU "projeto"`);
      return;
    }
    if (temTrilha && !knownRoadmapSlugs.has(mod.trilha)) {
      err(`  módulo #${i + 1} referencia trilha inexistente: "${mod.trilha}"`);
    }
    if (temProjeto && !knownProjectSlugs.has(mod.projeto)) {
      err(`  módulo #${i + 1} referencia projeto inexistente: "${mod.projeto}"`);
    }
  });

  ok(`  Bootcamp "${bc.title || slug}" validou estrutura (${bc.modules.length} módulos).`);
}

const slugs = await listRoadmaps();
if (slugs.length === 0) {
  console.log("Nenhuma trilha encontrada em roadmaps/.");
} else {
  for (const slug of slugs) {
    await validateRoadmap(slug);
  }
}

// Coleta os slugs de trilhas válidos (mesmo que a validação tenha falhado em
// outros pontos, o conjunto de slugs do `roadmap.json` é referência pra
// `trilhas:` dos projetos).
const knownRoadmapSlugs = new Set(slugs);

console.log("");
const projectSlugs = await listProjects();
if (projectSlugs.length === 0) {
  console.log("Nenhum projeto encontrado em projects/.");
} else {
  console.log(`📂 Projetos (${projectSlugs.length}):`);
  for (const slug of projectSlugs) {
    await validateProject(slug, knownRoadmapSlugs);
  }
}

// Bootcamps: curadoria de trilhas + projetos existentes (sem conteúdo próprio).
const knownProjectSlugs = new Set(projectSlugs);
const bootcampSlugs = await listBootcamps();
if (bootcampSlugs.length > 0) {
  console.log("");
  console.log(`📂 Bootcamps (${bootcampSlugs.length}):`);
  for (const slug of bootcampSlugs) {
    await validateBootcamp(slug, knownRoadmapSlugs, knownProjectSlugs);
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
