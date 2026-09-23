/* ================================================================
   JavaScript simples do Portfólio V0.1
   Cada bloco abaixo controla uma pequena interação da página.
   ================================================================ */

// 1. MENU MOBILE
// Selecionamos o botão e a lista do menu usando suas classes.
const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");

// Esta função abre ou fecha o menu e atualiza os atributos de acessibilidade.
function alternarMenu() {
  const menuEstaAberto = menu.classList.toggle("ativo");

  botaoMenu.classList.toggle("ativo", menuEstaAberto);
  botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
  botaoMenu.setAttribute("aria-label", menuEstaAberto ? "Fechar menu" : "Abrir menu");
  document.body.classList.toggle("menu-aberto", menuEstaAberto);
}

botaoMenu.addEventListener("click", alternarMenu);

// Fecha o menu depois que a pessoa escolhe uma seção.
const linksDoMenu = document.querySelectorAll(".menu a");

linksDoMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("ativo")) {
      alternarMenu();
    }
  });
});

// 2. ANO AUTOMÁTICO DO RODAPÉ
// O objeto Date descobre o ano atual, evitando alteração manual todo ano.
const elementoAno = document.querySelector("#ano-atual");
elementoAno.textContent = new Date().getFullYear();

// 3. FORMULÁRIO DE CONTATO (abre o programa de e-mail do visitante)
// Ao clicar em "Enviar mensagem", montamos um link "mailto:" com os dados
// digitados e pedimos ao navegador para abri-lo. Assim o Outlook, Mail,
// Gmail (se estiver como padrão) etc. abre com tudo já preenchido.
const formulario = document.querySelector(".formulario");
const avisoFormulario = document.querySelector(".aviso-formulario");

// Troque aqui o endereço que vai receber as mensagens.
const emailDestino = "meg@margarete.net.br";

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita o envio padrão para um servidor

  // Lemos o que a pessoa escreveu em cada campo.
  const nome = formulario.querySelector("#nome").value.trim();
  const email = formulario.querySelector("#email").value.trim();
  const assunto = formulario.querySelector("#assunto").value.trim();
  const mensagem = formulario.querySelector("#mensagem").value.trim();

  // Assunto do e-mail (usa um texto padrão se a pessoa não escrever nada).
  const assuntoFinal = assunto || "Contato pelo site de Margarete Macedo";

  // Corpo do e-mail. O "\n" cria uma quebra de linha.
  const corpo =
    "Nome: " + nome + "\n" +
    "E-mail: " + email + "\n\n" +
    "Mensagem:\n" + mensagem;

  // encodeURIComponent deixa acentos e espaços seguros dentro do link.
  const link =
    "mailto:" + emailDestino +
    "?subject=" + encodeURIComponent(assuntoFinal) +
    "&body=" + encodeURIComponent(corpo);

  window.location.href = link; // abre o programa de e-mail

  avisoFormulario.textContent =
    "Abrindo seu programa de e-mail com a mensagem pronta. Se nada abrir, escreva para " + emailDestino + ".";
});

// 4. REVELAÇÃO SUAVE AO ROLAR
// A animação muda apenas opacidade e posição visual, sem alterar o layout.
const elementosParaRevelar = document.querySelectorAll(
  ".secao .container, .faixa-objetivo .container, .redes .container, .projeto-principal, .proximo-projeto"
);

if ("IntersectionObserver" in window) {
  elementosParaRevelar.forEach(function (elemento) {
    elemento.classList.add("revelar");
  });

  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.08 });

  elementosParaRevelar.forEach(function (elemento) {
    observador.observe(elemento);
  });
}