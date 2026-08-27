import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from "rehype-highlight";

// A raiz do repo (uma pasta acima de preview/), onde vivem `roadmaps/`,
// `projects/` etc. O preview lê esse conteúdo direto, sem sync nenhum.
const repoRoot = resolve(__dirname, "..");

export default defineConfig({
  plugins: [
    // O plugin de MDX precisa vir ANTES do de React (ele gera JSX que o
    // Babel do React depois transforma).
    {
      enforce: "pre",
      ...mdx({
        // remarkFrontmatter tira o bloco `---` do corpo; remarkMdxFrontmatter
        // reexpõe ele como `export const frontmatter` no módulo compilado -
        // é assim que o preview lê title/resources de cada nó.
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        rehypePlugins: [[rehypeHighlight, { detect: true, ignoreMissing: true }]],
        providerImportSource: "@mdx-js/react",
      }),
    },
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Os `.mdx` moram fora de `preview/` (em `../roadmaps`), então o bundler não
    // acha `@mdx-js/react`/`react` a partir de lá. Fixamos nos módulos daqui.
    dedupe: ["react", "react-dom", "@mdx-js/react"],
    alias: {
      "@mdx-js/react": resolve(__dirname, "node_modules/@mdx-js/react"),
      react: resolve(__dirname, "node_modules/react"),
      "react-dom": resolve(__dirname, "node_modules/react-dom"),
    },
  },
  server: {
    // Permite o Vite servir arquivos de fora de `preview/` (a pasta `roadmaps/`
    // fica na raiz do repo, um nível acima).
    fs: { allow: [repoRoot] },
  },
});
