declare module "*.mdx" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType<{ components?: Record<string, unknown> }>;
  export default MDXComponent;
}
