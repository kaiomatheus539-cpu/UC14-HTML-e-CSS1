
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const temaToggle = document.querySelector("#tema-toggle");
const saudacao = document.querySelector("#saudacao");
const ano = document.querySelector("#ano");
const formulario = document.querySelector("#formulario");
const mensagemFormulario = document.querySelector("#mensagem-formulario");

// Abre e fecha o menu para celular
menuToggle.addEventListener("click", function () {
    const menuAberto = menu.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha o menu ao clicar em um link
const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

// Alterna entre tema escuro e claro
temaToggle.addEventListener("click", function () {
    const temaClaro = document.body.classList.toggle("tema-claro");

    temaToggle.textContent = temaClaro ? "☾" : "☀";

    temaToggle.setAttribute(
        "aria-label",
        temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
    );
});

// Mostra uma saudação de acordo com o horário
function atualizarSaudacao() {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        saudacao.textContent = "Bom dia! Seja bem-vindo ao meu portfólio.";
    } else if (hora >= 12 && hora < 18) {
        saudacao.textContent = "Boa tarde! Seja bem-vindo ao meu portfólio.";
    } else {
        saudacao.textContent = "Boa noite! Seja bem-vindo ao meu portfólio.";
    }
}

atualizarSaudacao();

// Atualiza automaticamente o ano do rodapé
ano.textContent = new Date().getFullYear();

// Valida o formulário de contato
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        mensagemFormulario.textContent =
            "Preencha todos os campos antes de continuar.";
        return;
    }

    mensagemFormulario.textContent =
        "Formulário validado! Para enviar a mensagem, ainda é necessário configurar um serviço de envio.";

    formulario.reset();
});
