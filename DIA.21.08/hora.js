//1.PEGAR A HORA ATUAL
const agora = new Date();
const hora  = agora.getHours();
const minutos = agora.getMinutes();
const minutosformatados = String(minutos).padStart(2,'0');
const horatexto =  `${hora}: ${minutosformatados}`

//2.selecionar elementos do html
const pagina = document.getElementById('pagina');
const emojiEl = document.getElementById('emoji');
const saudacaEl = document.getElementById('saudaçao');
const horarioEl = document.getElementById('horario');

//3. variaveis que guardam o resultado 
let turno = '';
let emojiStr = '';
let msg = '';

//4.dicidir o turno com if/else
if(hora >=5 && hora <12){
    turno = 'manha'
    emojiStr = '';
    msg = 'bom dia!'

}else if(hora >=12 && hora <18){
    turno = 'tarde';
    emojiStr='';
    msg = 'boa madugada!'
}

//5.aplicar o tema na pagina
pagina.classList.add(turno)

//6. colocar o conteudo nos elementos
emojiEl.textcontent = emojiStr;
saudaçao.textcontent = msg;
horarioEl.textcontent = `sao ${horatexto}h`


//7.log para o desenvolverdor
console.log(`turno: ${turno} | hora: ${horatexto}`);



