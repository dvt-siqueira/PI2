const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa() {
    const textoTarefa= inputTarefa.value.trim();
    if(textoTarefa === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }
    const novoItem = document.createElement("li");
    novoItem.textContent = textoTarefa;
    listaTarefas.appendChild(novoItem);
    inputTarefa.value = "";
    inputTarefa.focus();
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }});