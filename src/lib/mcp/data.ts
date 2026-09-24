// =====================================================================
// DADOS PÚBLICOS DO CURRÍCULO USADOS PELAS INTEGRAÇÕES DE AGENTES (MCP)
// Edite aqui os mesmos textos que você atualizar em public/portfolio/index.html
// =====================================================================

export const perfil = {
  nome: "Margarete Macedo",
  apelido: "Meg Design",
  titulo: "Educadora e desenvolvedora web em transição para a tecnologia",
  resumo:
    "Graduada em Letras pela UCB e em transição para a tecnologia, cursando formação em UX/UI Design e Back-End pela Alura.",
  objetivo:
    "Unir educação, comunicação, criatividade, design e tecnologia, construindo uma nova etapa profissional e explorando as possibilidades que surgem na interseção entre pessoas e tecnologia.",
  email: "meg@margarete.net.br",
  redes: [
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/margaretesm" },
    { nome: "GitHub", url: "https://github.com/MargareteSM" },
  ],
};

export const formacao = [
  { nivel: "Ensino Médio", curso: "Magistério", instituicao: "ENC", periodo: "1989 — 1993", cargaHoraria: "5.088h", status: "Concluído" },
  { nivel: "Graduação", curso: "Letras — Português e Literaturas", instituicao: "UCB", periodo: "1995 — 1999", cargaHoraria: "2.550h", status: "Concluído" },
  { nivel: "Pós-graduação", curso: "Língua Portuguesa", instituicao: "UNIVERSO", periodo: "2002 — 2004", cargaHoraria: "740h", status: "Concluído" },
];

export const experiencias = [
  {
    empresa: "Secretaria de Estado de Educação do Distrito Federal (SEEDF)",
    cargo: "Professora de Português do Ensino Fundamental ao Médio",
    periodo: "mai 1994 — out 2024 (30 anos e 6 meses, tempo integral)",
    descricao: "Docência de Língua Portuguesa na rede pública do Distrito Federal, do Ensino Fundamental ao Médio.",
  },
  {
    empresa: "SEEDF",
    cargo: "Professora de Português do Ensino Médio",
    periodo: "1998 e 2000 (180h, estágio)",
    descricao: "Docência de Língua Portuguesa no Ensino Médio em regime de estágio.",
  },
  {
    empresa: "SEEDF",
    cargo: "Professora do Ensino Fundamental",
    periodo: "02/08/1993 — 21/08/1993 (contrato nº 906398-6)",
    descricao: "Contrato temporário para docência no Ensino Fundamental.",
  },
  {
    empresa: "Escola Comunitária de Datilografia",
    cargo: "Instrutora de Datilografia",
    periodo: "05/1993 — 07/1993",
    descricao: "Ensino de datilografia em escola comunitária.",
  },
  {
    empresa: "SEEDF",
    cargo: "Professora do Ensino Fundamental",
    periodo: "01/1990 — 03/1993 (364h, estágio)",
    descricao: "Estágio de 364 horas como professora do Ensino Fundamental.",
  },
];

export const cursos = [
  { plataforma: "Alura", descricao: "Formações em desenvolvimento web, lógica e Design.", status: "Em andamento" },
  { plataforma: "Curso em Vídeo", descricao: "Cursos introdutórios de HTML, CSS e JavaScript.", status: "Em andamento" },
  { plataforma: "Duolingo", descricao: "Prática contínua de idiomas.", status: "Prática diária" },
];

export const cursosExtensao = [
  { nome: "Git e GitHub: compartilhando e colaborando em projetos", instituicao: "Alura", cargaHoraria: "8h", concluidoEm: "2026-09", credencial: "https://cursos.alura.com.br/certificate/c1dc1ac1-6460-447d-aa99-13fe846bdeef" },
  { nome: "Começando em Programação: carreira e primeiros passos", instituicao: "Alura", cargaHoraria: "1h", concluidoEm: "2026-08", credencial: "https://cursos.alura.com.br/certificate/d09a89d1-e300-47e6-b07c-2c4c1d2c00ed" },
  { nome: "Carreira UI Design: Boas-vindas e primeiros passos", instituicao: "Alura", cargaHoraria: "2h", concluidoEm: "2026-08", credencial: "https://cursos.alura.com.br/certificate/8b95ab98-2e41-4e52-829d-ead6e0e5a9fc" },
  { nome: "Carreira UX Design: Boas-vindas e primeiros passos", instituicao: "Alura", cargaHoraria: "2h", concluidoEm: "2026-08", credencial: "https://cursos.alura.com.br/certificate/40bc06fa-50ed-48e2-b120-63fc711b16dd" },
  { nome: "Comunicação e expressão", instituicao: "FUBRAE/CEN", cargaHoraria: "1.050h" },
  { nome: "Habilitação para o exercício do Magistério", instituicao: "ENC", cargaHoraria: "5.088h" },
  { nome: "Português/Redação Oficial", instituicao: "SENAC/DF", cargaHoraria: "180h" },
  { nome: "Português/Práticas Linguísticas", instituicao: "SENAC/DF", cargaHoraria: "180h" },
  { nome: "Inglês", instituicao: "CILC/SEEDF", cargaHoraria: "Nível básico" },
  { nome: "Visão sistêmica", instituicao: "SEEDF/CRET", cargaHoraria: "80h" },
  { nome: "Psicologia para quem ensina", instituicao: "CETEB", cargaHoraria: "180h" },
  { nome: "Técnica de trabalho em pequenos grupos", instituicao: "CETEB", cargaHoraria: "125h" },
  { nome: "Alfabetização e Letramento", instituicao: "EAPE", cargaHoraria: "180h" },
  { nome: "Proinfo Integrado — Educando com tecnologias", instituicao: "EAPE", cargaHoraria: "180h" },
  { nome: "Uso de ferramentas digitais", instituicao: "GEAD · EAPE", cargaHoraria: "90h" },
  { nome: "Ciclos", instituicao: "GEMEB/SUBEB · EAPE", cargaHoraria: "180h" },
  { nome: "G Suite, material didático & Moodle on-line", instituicao: "EAPE", cargaHoraria: "90h" },
  { nome: "Projeto de Vida", instituicao: "EAPE", cargaHoraria: "180h" },
  { nome: "Office, Corel Draw & Photoshop", instituicao: "New Word Informática", cargaHoraria: "140h" },
  { nome: "Novo Ensino Médio", instituicao: "GETEB · EAPE", cargaHoraria: "90h" },
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
