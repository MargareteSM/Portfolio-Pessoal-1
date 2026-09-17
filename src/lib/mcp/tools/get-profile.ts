import { defineTool } from "@lovable.dev/mcp-js";
import { perfil } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Perfil",
  description:
    "Retorna o perfil público de Margarete Macedo: nome, título, resumo, objetivo, e-mail e redes sociais.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(perfil, null, 2) }],
    structuredContent: { perfil },
  }),
});
