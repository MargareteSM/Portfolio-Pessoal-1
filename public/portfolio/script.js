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

// 3. FORMULÁRIO DEMONSTRATIVO
// Nesta V0.1, o formulário não envia dados. Mostramos apenas uma explicação.
const formulario = document.querySelector(".formulario");
const avisoFormulario = document.querySelector(".aviso-formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  avisoFormulario.textContent = "Formulário demonstrativo — o envio será adicionado em uma versão futura.";
});