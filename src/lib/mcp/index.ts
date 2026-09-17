import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getResume from "./tools/get-resume";
import listSkills from "./tools/list-skills";
import listProjects from "./tools/list-projects";

export default defineMcp({
  name: "margarete-s-digital-canvas",
  title: "Margarete's Digital Canvas",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas do currículo e portfólio de Margarete Macedo. Use `get_profile` para o perfil, `get_resume` para formação/experiência/cursos/certificados, `list_skills` para competências e `list_projects` para projetos.",
  tools: [getProfile, getResume, listSkills, listProjects],
});
