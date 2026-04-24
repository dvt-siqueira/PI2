// 1. Selecionar os elementos que vamos usar
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// 2. Criar a função que adiciona a tarefa
function adicionarTarefa() {
  const textoTarefa = inputTarefa.value;

  // Se o input estiver vazio, avisamos o usuário
  if (textoTarefa.trim() === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  // Criar um novo elemento <li> (item da lista)
  const novoItem = document.createElement("li");
  const spanTarefa = document.createElement("span");
  spanTarefa.textContent = textoTarefa;
  novoItem.appendChild(spanTarefa);

  const divBotoes = document.createElement("div");

  const btnCheck = document.createElement("button");
  btnCheck.textContent = "✔";
  btnCheck.classList.add("btn-check");
  btnCheck.onclick = () => {
    novoItem.classList.toggle("concluido");
  };
  divBotoes.appendChild(btnCheck);
  novoItem.appendChild(divBotoes)
  listaTarefas.appendChild(novoItem);

  // Limpar o campo de texto e focar nele novamente
  inputTarefa.value = "";
  inputTarefa.focus();
}

// 3. Escutar o clique no botão
botaoAdicionar.addEventListener("click", adicionarTarefa);

// 4. (Opcional) Permitir apertar 'Enter' para adicionar
inputTarefa.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

const btnTema = document.getElementById("btn-tema");
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
