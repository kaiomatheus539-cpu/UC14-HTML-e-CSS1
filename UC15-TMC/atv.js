
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parsefloat(prompt("digite sua segunda nota"))

let media = (nota1 + nota2) / 2;

if (media < 4) {
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: REPROVADO");
} else if (media >= 5 && media <= 6) {
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: RECUPERAÇÃO");
} else if (media > 7) {
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: APROVADO");
} else {
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: Sem classificação");
}