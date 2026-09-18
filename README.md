<div align="center">

# Margarete's Digital Canvas

### Portfólio pessoal de Margarete Macedo

Uma landing page responsiva que reúne trajetória profissional, formação, estudos, competências e projetos em desenvolvimento.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-1.x-FF4154)](https://tanstack.com/start)

[Ver projeto publicado](https://margarete-macedo-folio.lovable.app) · [GitHub](https://github.com/MargareteSM)

</div>

---

## Sobre o projeto

O **Margarete's Digital Canvas** é um portfólio pessoal criado para apresentar, em uma única página, a trajetória de Margarete Macedo, sua formação acadêmica, experiência profissional, cursos, competências e evolução nos estudos de tecnologia e Design.

O projeto faz parte do meu processo de aprendizado em desenvolvimento web e construção de portfólio. Ele foi iniciado no [Lovable](https://lovable.dev), com uma estrutura pensada para continuar sendo estudada, modificada e aprimorada ao longo do tempo.

A página é predominantemente estática e utiliza dados públicos do currículo para exibir:

- apresentação pessoal e objetivo profissional;
- formação acadêmica e experiência profissional;
- cursos, formação continuada e competências;
- projeto de portfólio e progresso dos estudos;
- links para redes profissionais e área de contato.

> **Observação:** o formulário de contato é demonstrativo nesta versão. Ele não envia dados para um servidor.

## Preview

A versão publicada está disponível em:

**[margarete-macedo-folio.lovable.app](https://margarete-macedo-folio.lovable.app)**

### Captura de tela

> Adicione uma captura de tela do projeto em `docs/screenshot.png` e atualize o caminho abaixo quando o arquivo estiver disponível.

<!-- Substitua o comentário pela imagem quando adicionar o arquivo:
![Preview do portfólio](docs/screenshot.png)
-->

## Funcionalidades

- Navegação por âncoras entre as seções da landing page.
- Menu mobile com abertura, fechamento e atributos de acessibilidade atualizados.
- Layout responsivo para desktop, tablet e celular.
- Seções de apresentação, objetivo, formação, experiência, cursos e competências.
- Listagem de cursos de extensão e informações de formação continuada.
- Área de projetos com o próprio portfólio como projeto inicial.
- Representação visual do progresso de estudos, sem banco de dados.
- Formulário de contato demonstrativo, com mensagem informativa após o envio.
- Atualização automática do ano exibido no rodapé.
- Página de erro e rota de não encontrado configuradas no shell da aplicação.
- Ferramentas MCP públicas para consultar perfil, currículo, competências e projetos.

## Tecnologias utilizadas

### Página e estilos

- **HTML5** — estrutura semântica da landing page.
- **CSS3** — layout, identidade visual, responsividade, animações discretas e suporte a preferência por redução de movimento.
- **JavaScript** — interações simples do menu mobile, formulário demonstrativo e ano automático do rodapé.

### Aplicação e desenvolvimento

- **TypeScript**
- **React 19** e **React DOM**
- **TanStack Start**, **TanStack Router** e **TanStack React Query**
- **Vite**
- **Tailwind CSS 4** e **tw-animate-css**
- **Radix UI** — componentes e primitives utilizados pela interface da aplicação.
- **Lucide React** — biblioteca de ícones disponível no projeto.
- **Zod** e **React Hook Form** — dependências utilizadas na base da aplicação.
- **MCP da Lovable** — rota e ferramentas para disponibilizar dados públicos do portfólio.
- **ESLint** e **Prettier** — linting e formatação do código.

> A landing page exibida em `/` é carregada a partir de `public/index.html`, com `public/style.css` e `public/script.js` separados para manter o código didático e fácil de estudar. A aplicação também possui a estrutura TypeScript, React e TanStack necessária para execução com Vite e TanStack Start.

## Estrutura principal

```text
├── public/
│   ├── index.html       # Conteúdo da landing page
│   ├── style.css        # Estilos, layout e responsividade
│   └── script.js        # Interações simples da página
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
git clone https://github.com/MargareteSMM/margaretesm-portfolio-lovable.git
cd margaretesm-portfolio-lovable
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

### Outros comandos disponíveis

```bash
npm run build       # Gera a versão de produção
npm run build:dev   # Gera o build usando o modo development
npm run preview     # Pré-visualiza o build de produção
npm run lint        # Executa o ESLint
npm run format      # Formata os arquivos com Prettier
```

## Aprendizados

Este projeto representa uma etapa prática da minha evolução como estudante. Durante sua construção, venho praticando:

- estruturação de páginas com HTML semântico;
- estilização, hierarquia visual e responsividade com CSS;
- interações educativas com JavaScript;
- organização de um projeto com TypeScript, React e TanStack Start;
- uso de ferramentas de IA para apoiar o desenvolvimento;
- versionamento e publicação com Git e GitHub;
- manutenção de dados de currículo e portfólio em uma estrutura organizada.

## Próximas melhorias

Estas são ideias para versões futuras — não representam funcionalidades já implementadas:

- [ ] Substituir o espaço reservado pela foto de perfil.
- [ ] Conectar o formulário de contato a um serviço de envio ou backend.
- [ ] Adicionar capturas de tela reais na documentação.
- [ ] Substituir os textos e dados provisórios por informações revisadas quando necessário.
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
