import { defineTool } from "@lovable.dev/mcp-js";
import { projetos } from "../data";

export default defineTool({
  name: "list_projects",
  title: "Projetos",
  description: "Lista os projetos públicos do portfólio, com descrição, tecnologias e link.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projetos, null, 2) }],
    structuredContent: { projetos },
  }),
});
