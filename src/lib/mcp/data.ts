// =====================================================================
// DADOS PÚBLICOS DO CURRÍCULO USADOS PELAS INTEGRAÇÕES DE AGENTES (MCP)
// Edite aqui os mesmos textos que você atualizar em public/portfolio/index.html
// =====================================================================

export const perfil = {
  nome: "Margarete Macedo",
  apelido: "Meg Design",
  titulo: "Estudante de Tecnologia, Desenvolvimento Web e Design",
  resumo:
    "Estudante iniciante em desenvolvimento web e Design, construindo um portfólio pessoal enquanto aprende HTML, CSS e JavaScript.",
  objetivo:
    "Aprender fazendo: evoluir na prática com projetos simples, bem organizados e fáceis de melhorar.",
  email: "meg@margarete.net.br",
  redes: [
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/margaretesm" },
    { nome: "GitHub", url: "https://github.com/MargareteSM" },
  ],
};

export const formacao = [
  { curso: "Nome do curso", instituicao: "Nome da instituição", periodo: "20XX — 20XX" },
  { curso: "Nome da formação", instituicao: "Nome da instituição", periodo: "20XX — 20XX" },
];

export const experiencias = [
  { empresa: "Nome da empresa", cargo: "Nome do cargo", descricao: "Principais atividades, aprendizados e resultados." },
  { empresa: "Nome da empresa", cargo: "Nome do cargo", descricao: "Segunda experiência profissional ou projeto relevante." },
];

export const cursos = [
  { plataforma: "Alura", descricao: "Formações em desenvolvimento web, lógica e Design.", status: "Em andamento" },
  { plataforma: "Curso em Vídeo", descricao: "Cursos introdutórios de HTML, CSS e JavaScript.", status: "Em andamento" },
  { plataforma: "Duolingo", descricao: "Prática contínua de idiomas.", status: "Prática diária" },
];

export const certificados = [
  { nome: "Nome do certificado", instituicao: "Nome da instituição", emitidoEm: "mês de 20XX", credencial: "#" },
  { nome: "Nome do certificado", instituicao: "Nome da instituição", emitidoEm: "mês de 20XX", credencial: "#" },
];

export const skills = [
  { grupo: "Desenvolvimento", itens: ["HTML5", "CSS3", "JavaScript", "Responsividade"] },
  { grupo: "Design", itens: ["Design visual", "Hierarquia", "Tipografia", "Prototipação"] },
  { grupo: "Ferramentas", itens: ["VS Code", "GitHub", "Figma", "Canva"] },
  { grupo: "Idiomas", itens: ["Português — nativo", "Inglês — em estudo"] },
];

export const projetos = [
  {
    nome: "Portfólio Pessoal — V0.1",
    descricao:
      "Landing page de currículo e portfólio feita com HTML5, CSS3 e JavaScript puro, em três arquivos separados.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
  },
];
