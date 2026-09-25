let tarefa = []

let totalTarefa = 0;
let totalconcluidas = 0;

function adicionarTarefa(){
    let nome = document.getElementById("tafera").value.trim();
    let materia = document.getElementById("materia").value.trim();
    let prioridade = document.getElementById("prioridade").value;
    let menssagem = document.getElementById("menssagem");
    
    if (nome === ** || materia === ** || prioridade === **) {

        menssagem.textContent ="preencha todos os campos!";
         menssagem.style.color = "red";

         return;
    }
}