import type { ComponentType } from "react";

/* ==========================================================================
   Tipos - subconjunto do schema de @aprenda/content (o mesmo que o site usa).
   ========================================================================== */

export type NodeType = "topic" | "subtopic" | "milestone";
export type Difficulty = "iniciante" | "intermediario" | "avancado";
export type ResourceType = "artigo" | "video" | "curso" | "doc" | "exercicio";

export interface RoadmapNode {
  id: string;
  title: string;
  type: NodeType;
  recommended?: boolean;
  children: string[];
}

export interface Creator {
  name: string;
  github: string;
}

export interface Roadmap {
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  published?: string;
  skills: string[];
  creators: Creator[];
  nodes: RoadmapNode[];
}

export interface Resource {
  title: string;
  url: string;
  type: ResourceType;
  lang?: "pt" | "en";
  free?: boolean;
}

export interface NodeFrontmatter {
  id: string;
  title: string;
  resources: Resource[];
}

/* ==========================================================================
   Carregamento do conteúdo - lê `../roadmaps` direto (sem sync).
   - roadmap.json: eager, como objeto.
   - nodes/*.mdx (raw): eager, pra extrair o front-matter (title, resources).
   - nodes/*.mdx (compilado): lazy, o componente MDX renderizável.
   ========================================================================== */

/** Módulo compilado de um nó: componente MDX + front-matter reexposto. */
export interface NodeModule {
  default: ComponentType<Record<string, unknown>>;
  frontmatter?: { id?: string; title?: string; resources?: Resource[] };
}

const roadmapJsonModules = import.meta.glob<Roadmap>("../../../roadmaps/*/roadmap.json", {
  eager: true,
  import: "default",
});

const nodeComponentModules = import.meta.glob<NodeModule>("../../../roadmaps/*/nodes/*.mdx");

/** slug -> Roadmap */
const roadmaps = new Map<string, Roadmap>();
for (const [path, data] of Object.entries(roadmapJsonModules)) {
  const slug = path.match(/roadmaps\/([^/]+)\/roadmap\.json$/)?.[1];
  if (slug) roadmaps.set(slug, { ...data, slug });
}

/** `${slug}/${nodeId}` -> importer lazy do módulo MDX compilado */
const nodeComponent = new Map<string, () => Promise<NodeModule>>();
for (const [path, importer] of Object.entries(nodeComponentModules)) {
  const m = path.match(/roadmaps\/([^/]+)\/nodes\/([^/]+)\.mdx$/);
  if (m) nodeComponent.set(`${m[1]}/${m[2]}`, importer);
}

export function getRoadmapSlugs(): string[] {
  return [...roadmaps.keys()].sort();
}

export function getRoadmaps(): Roadmap[] {
  return getRoadmapSlugs().map((s) => roadmaps.get(s)!);
}

export function getRoadmap(slug: string): Roadmap | undefined {
  return roadmaps.get(slug);
}

export function getNodeComponent(slug: string, nodeId: string) {
  return nodeComponent.get(`${slug}/${nodeId}`);
}

export function hasNode(slug: string, nodeId: string): boolean {
  return nodeComponent.has(`${slug}/${nodeId}`);
}

/** Nós-raiz = os que não são `children` de ninguém. */
function getRootNodes(roadmap: Roadmap): RoadmapNode[] {
  const referenced = new Set(roadmap.nodes.flatMap((n) => n.children ?? []));
  return roadmap.nodes.filter((n) => !referenced.has(n.id));
}

export function getNodeById(roadmap: Roadmap, id: string): RoadmapNode | undefined {
  return roadmap.nodes.find((n) => n.id === id);
}

/**
 * Lineariza os nós seguindo `children` a partir das raízes (DFS na ordem
 * declarada). Mesma lógica de `linearizeNodes` do @aprenda/content.
 */
export function linearizeNodes(roadmap: Roadmap): RoadmapNode[] {
  const byId = new Map(roadmap.nodes.map((n) => [n.id, n]));
  const roots = getRootNodes(roadmap).map((n) => n.id);
  const order: RoadmapNode[] = [];
  const seen = new Set<string>();
  const walk = (id: string) => {
    if (seen.has(id)) return;
    const node = byId.get(id);
    if (!node) return;
    seen.add(id);
    order.push(node);
    for (const child of node.children ?? []) walk(child);
  };
  for (const r of roots) walk(r);
  for (const n of roadmap.nodes) {
    if (seen.has(n.id)) continue;
    seen.add(n.id);
    order.push(n);
  }
  return order;
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

export const RESOURCE_TYPE_LABEL: Record<ResourceType, string> = {
  artigo: "Artigo",
  video: "Vídeo",
  curso: "Curso",
  doc: "Doc",
  exercicio: "Exercício",
};
