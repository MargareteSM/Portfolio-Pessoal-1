<div align="center">

# Margarete's Portfólio

### Portfólio pessoal de Margarete Macedo

Uma landing page responsiva que reúne trajetória profissional, formação, estudos, competências e projetos em desenvolvimento.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-1.x-FF4154)](https://tanstack.com/start)

[Ver projeto publicado](https://margaretesm.lovable.app) · [GitHub](https://github.com/MargareteSM)

</div>

---

## Sobre o projeto

O **Margarete's Portfólio** é um portfólio pessoal criado para apresentar, em uma única página, a trajetória de Margarete Macedo, sua formação acadêmica, experiência profissional, cursos, competências e projetos em desenvolvimento.

O projeto faz parte do processo de aprendizado em desenvolvimento web e construção de portfólio. Ele foi iniciado no [Lovable](https://lovable.dev), com uma estrutura simples, organizada, didática e fácil de modificar enquanto aprendo.

A página é predominantemente estática e utiliza dados públicos do currículo para exibir:

- apresentação pessoal e objetivo profissional;
- formação acadêmica e experiência profissional;
- cursos, formação continuada e competências;
- projeto de portfólio e progresso dos estudos;
- links para redes profissionais e área de contato.

## Preview

A versão publicada está disponível em:

**[margaretesm.lovable.app](https://margaretesm.lovable.app)**

## Funcionalidades

- Navegação por âncoras entre as seções da landing page.
- Menu mobile com abertura, fechamento e atributos de acessibilidade atualizados.
- Layout responsivo para desktop, tablet e celular.
- Seções de apresentação, objetivo, formação, experiência, cursos e competências.
- Listagem de cursos de extensão e informações de formação continuada.
- Área de projetos com o próprio portfólio como projeto inicial.
- Representação visual do progresso de estudos, sem banco de dados.
- Formulário de contato com campos de nome, e-mail, assunto e mensagem.
- Validação nativa dos campos obrigatórios do formulário antes do envio.
- Montagem automática de uma mensagem com assunto e corpo formatados.
- Abertura do aplicativo de e-mail padrão por meio de um link `mailto:`.
- Mensagem de orientação caso nenhum aplicativo de e-mail seja aberto.
- Atualização automática do ano exibido no rodapé.
- Página de erro e rota de não encontrado configuradas no shell da aplicação.
- Ferramentas MCP públicas para consultar perfil, currículo, competências e projetos.

> **Observação sobre o formulário:** o envio não utiliza servidor, banco de dados ou serviço externo. Ao clicar em **Enviar mensagem**, o navegador abre o programa de e-mail padrão com a mensagem pronta. Se não houver cliente de e-mail configurado, o usuário pode copiar ou enviar manualmente a mensagem.

## Tecnologias utilizadas

- **TypeScript**, **React 19** e **React DOM**
- **TanStack Start**, **TanStack Router** e **TanStack React Query**
- **Vite 8**
- **Tailwind CSS 4** e **tw-animate-css**
- **Radix UI** e **Lucide React**
- **JavaScript**, HTML5 e CSS3 na landing page didática
- **MCP da Lovable** para disponibilizar dados públicos do portfólio
- **ESLint** e **Prettier**

A landing page exibida em `/` é carregada a partir de `public/index.html`, com `public/style.css` e `public/script.js` separados para manter o código didático e fácil de estudar. A lógica do aplicativo e roteamento ficam em `src/`.

## Estrutura principal

```text
├── public/
│   ├── index.html       # Conteúdo da landing page e campos do formulário
│   ├── style.css        # Estilos, layout e responsividade
│   └── script.js        # Menu, formulário mailto, ano e animações
├── src/
│   ├── components/ui/   # Componentes reutilizáveis de interface
│   ├── hooks/           # Hooks auxiliares, como detecção de mobile
│   ├── lib/mcp/         # Dados públicos e ferramentas MCP
│   ├── routes/          # Rotas do TanStack Start
│   ├── router.tsx       # Configuração do roteador
│   ├── start.ts         # Middleware e inicialização do servidor
│   └── styles.css       # Design system da aplicação
├── package.json         # Scripts e dependências
├── vite.config.ts       # Configuração do Vite/TanStack Start
└── tsconfig.json        # Configuração do TypeScript
```

## Como executar localmente

### Requisitos

- [Node.js](https://nodejs.org/) — versão compatível com as dependências do projeto.
- npm, instalado junto com o Node.js.

### Instalação

```bash
git clone https://github.com/MargareteSM/Portfolio-Pessoal-1.git
cd Portfolio-Pessoal-1
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

### Testando o formulário de e-mail

1. Abra a seção **Contato** no navegador.
2. Preencha nome, e-mail e mensagem; o assunto é opcional.
3. Clique em **Enviar mensagem**.
4. O navegador tentará abrir o cliente de e-mail padrão com a mensagem pronta.
5. Se nada for aberto, envie a mensagem manualmente para `meg@margarete.net.br`.

### Outros comandos disponíveis

```bash
npm run build       # Gera a versão de produção
npm run build:dev   # Gera o build usando o modo development
npm run preview     # Pré-visualiza o build de produção
npm run lint        # Executa o ESLint
npm run format      # Formata os arquivos com Prettier
```

## Roadmap

- [x] Substituir dados provisórios por dados reais.
- [x] Adicionar foto de perfil real.
- [x] Atualizar os textos de “Sobre mim” e “Objetivo”.
- [x] Aplicar redesign visual.
- [x] Implementar formulário de contato com abertura do cliente de e-mail via `mailto:`.
- [ ] Conectar o formulário a um serviço de envio ou backend para receber mensagens sem depender de um cliente de e-mail local.
- [ ] Adicionar capturas de tela reais na documentação.
- [ ] Adicionar novos projetos à seção de portfólio.
- [ ] Incluir links de credenciais quando estiverem disponíveis.
- [ ] Avaliar melhorias adicionais de acessibilidade e SEO.

## Autora

**Margarete Macedo**

- [GitHub](https://github.com/MargareteSM)
- [LinkedIn](https://www.linkedin.com/in/margaretesm)

---

<div align="center">

Projeto pessoal em constante evolução.

**Learning by building.**

</div>
