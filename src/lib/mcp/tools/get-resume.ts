import { defineTool } from "@lovable.dev/mcp-js";
import { cursosExtensao, cursos, experiencias, formacao } from "../data";

export default defineTool({
  name: "get_resume",
  title: "Currículo",
  description:
    "Retorna o currículo público: formação acadêmica, experiências profissionais, cursos e certificados.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const curriculo = { formacao, experiencias, cursos, cursosExtensao };
    return {
      content: [{ type: "text", text: JSON.stringify(curriculo, null, 2) }],
      structuredContent: curriculo,
    };
  },
});
