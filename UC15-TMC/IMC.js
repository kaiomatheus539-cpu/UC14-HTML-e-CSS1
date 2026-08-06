// o projeto calculadora de IMC


/* classificação 
abaixo de 18,5 - abaixo do peso
18,5 a 24,9 - peso normal
25 a 29,9 - sobrepeso
30 a 34,9 - obesidade grau 1
35 a 39,9 - obesidade grau 2
40 ou mais - obesidade grau 3 */

let nome   = prompt('qual é o seu nome?')
let pesoStr = prompt(`ola, ${nome}qual é o seu peso em kg?\n(use virgula ou ponto - ex:75,5 ou 75.5)`);
let altStr  = prompt ('qual é a sua altura em metros?\n(ex:1,75 ou 1.75)')

let peso = number (pesoStr.replace(',','.'));
let alt = number(altStr.replace(',','.'));


console.log('nome', nome);
console.log('peso', peso, typeof peso);
console.log('altura', alt, typeof alt);

let imc = peso / (alt * alt);
let imcformatado = imc.toFixed(1);

if(imc < 18,5){
    console.log = "abaixo do peso";
} else if(imc < 25){
    console.log = "peso normal";
} else if(imc < 30){
    console.log = "sobrepeso";
} else if(imc < 35){
    console.log = "obesidade grau 1";
} else if(imc < 40){
    console.log = "obesidade grau 2";
} if(imc > 40){
    console.log = "obesidade grau 3";
}




