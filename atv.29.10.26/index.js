
const formulario = document.getElementById("formNotas");
const nomeInput = document.getElementById("nome");
const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");
const resultado = document.getElementById("resultado");
const botaoLimpar = document.getElementById("limpar");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const notas = [
        nota1Input.value,
        nota2Input.value,
        nota3Input.value
    ];

    resultado.hidden = false;
    resultado.className = "resultado";

    if (nome === "") {
        mostrarErro("Digite o nome do estudante.");
        return;
    }

    for (let i = 0; i < notas.length; i++) {
        if (notas[i].trim() === "") {
            mostrarErro("Preencha todas as três notas.");
            return;
        }

        const nota = Number(notas[i]);

        if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
            mostrarErro("As notas devem estar entre 0 e 10.");
            return;
        }
    }

    const n1 = Number(notas[0]);
    const n2 = Number(notas[1]);
    const n3 = Number(notas[2]);

    const media = (n1 + n2 + n3) / 3;
    let situacao = "";
    let classe = "";

    if (media >= 7) {
        situacao = "Aprovado(a)";
        classe = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classe = "recuperacao";
    } else {
        situacao = "Reprovado(a)";
        classe = "reprovado";
    }

    resultado.innerHTML = `
        <h2>Resultado da consulta</h2>
        <p><strong>Estudante:</strong> ${escaparHTML(nome)}</p>
        <p><strong>Média:</strong> ${media.toFixed(2).replace(".", ",")}</p>
        <p><strong>Situação:</strong>
            <span class="${classe}">${situacao}</span>
        </p>
    `;
});

function mostrarErro(mensagem) {
    resultado.className = "resultado erro";
    resultado.textContent = mensagem;
}

function escaparHTML(texto) {
    return texto.replace(/[&<>"']/g, function(caractere) {
        const caracteres = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return caracteres[caractere];
    });
}

botaoLimpar.addEventListener("click", function() {
    formulario.reset();
    resultado.innerHTML = "";
    resultado.className = "resultado";
    resultado.hidden = true;
    nomeInput.focus();
});
