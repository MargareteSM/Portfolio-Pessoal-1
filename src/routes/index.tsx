import { createFileRoute } from "@tanstack/react-router";

// O site é 100% estático: o conteúdo vem do arquivo public/index.html,
// que usa apenas HTML, CSS (style.css) e JavaScript puro (script.js).
import paginaHtml from "../../public/index.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(paginaHtml, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
