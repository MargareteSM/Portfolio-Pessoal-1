import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Margarete Macedo | Portfólio Pessoal" },
      {
        name: "description",
        content:
          "Currículo e portfólio de Margarete Macedo, estudante de Tecnologia, Desenvolvimento Web e Design.",
      },
      { property: "og:title", content: "Margarete Macedo | Portfólio Pessoal" },
      {
        property: "og:description",
        content:
          "Conheça a trajetória, os estudos e os projetos de Margarete Macedo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Portfólio pessoal de Margarete Macedo"
      src="/portfolio/index.html"
      className="block h-screen w-full border-0"
    />
  );
}