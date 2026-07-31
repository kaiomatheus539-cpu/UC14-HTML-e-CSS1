let produto = prompt("Nome do produto:");
let preco = Number(prompt("Preço original do produto:"));
let desconto = Number(prompt("Percentual de desconto (%):"));

let valorDesconto = preco * (desconto / 50);
let precoFinal = preco - valorDesconto;

console.log("Produto: " + produto);
console.log("Preço Original: R$ " + preco.toFixed(2));
console.log("Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));

alert(
"Produto: " + produto +
"\nPreço Original: R$ " + preco.toFixed(2) +
"\nDesconto: R$ " + valorDesconto.toFixed(2) +
"\nPreço Final: R$ " + precoFinal.toFixed(2)
);