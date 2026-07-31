
let senha = prompt("Digite uma senha:");

let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

console.log("Quantidade de caracteres: " + tamanho);
console.log("Possui letra maiúscula? " + temMaiuscula);
console.log("Possui letra minúscula? " + temMinuscula);
console.log("Classificação: " + classificacao);

alert(
"Tamanho da senha: " + tamanho +
"\nClassificação: " + classificacao
);