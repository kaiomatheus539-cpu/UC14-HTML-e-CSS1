const temperatura = Number(prompt('Digite a temperatura:'));
const pagina = document.getElementById('pagina');
const temperaturaEl = document.getElementById('temperatura');
const mensagemEl = document.getElementById('mensagem');

let clima = '';

let msg = '';

if(temperatura < 15){

    clima = 'frio';
    msg = 'Está frio!';
}else if(temperatura >= 15 && temperatura <= 25){

    clima = 'agradavel'
    msg = 'O clima está agradável!';
}else if(temperatura > 25){

    clima = 'quente';
    msg = 'Está quente!';
}

pagina.classList.add(clima)
temperaturaEl.textContent = `${temperatura}°C`;
mensagemEl.textContent = msg;
console.log(`temperatura: ${temperatura}°C | clima: ${clima}`);