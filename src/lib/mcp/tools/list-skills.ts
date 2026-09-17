import { defineTool } from "@lovable.dev/mcp-js";
import { skills } from "../data";

export default defineTool({
  name: "list_skills",
  title: "Competências",
  description:
    "Lista as competências públicas agrupadas por área (desenvolvimento, design, ferramentas e idiomas).",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
    structuredContent: { skills },
  }),
});
