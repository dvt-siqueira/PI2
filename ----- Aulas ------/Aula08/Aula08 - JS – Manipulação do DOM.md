# 📘 Programação para Internet II
## 🗓️ Aula 08 — JavaScript: Manipulação do DOM (Seletores e Dinâmica)

---

# 🎯 Objetivo da Aula

- Compreender o que é o **DOM (Document Object Model)**.
- Aprender a selecionar elementos HTML usando JavaScript (`getElementById`, `querySelector`, etc.).
- Modificar o conteúdo e o estilo de elementos dinamicamente.
- Capturar eventos do usuário (como cliques em botões).
- Iniciar o desenvolvimento de um projeto prático: **To-do List (Lista de Tarefas)**.

---

# 🧠 O que é o DOM?

O **DOM (Document Object Model)** é uma interface que representa o documento HTML como uma "árvore" de objetos. Cada tag HTML (`<div>`, `<h1>`, `<p>`) torna-se um "nó" nessa árvore que o JavaScript pode acessar, alterar, remover ou criar.

Sem o DOM, o JavaScript seria apenas lógica pura (cálculos, variáveis). Com o DOM, ele ganha "braços" para mexer na interface do usuário.

---

# 1️⃣ Selecionando Elementos (Seletores)

Para mexer em um elemento, primeiro precisamos "pegá-lo". No nosso projeto, vamos selecionar o input, o botão e a lista:

```javascript
// Selecionando os elementos do nosso To-Do List
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
```

---

# 2️⃣ Alterando Conteúdo e Estilo

Depois de selecionar, podemos modificar suas propriedades. Veja como usamos isso na lógica de adicionar tarefas:

- **`elemento.value`**: Usamos para pegar o que o usuário digitou:
  ```javascript
  const textoTarefa = inputTarefa.value;
  ```
- **`elemento.textContent`**: Usamos para definir o texto do novo item da lista:
  ```javascript
  const novoItem = document.createElement("li");
  novoItem.textContent = textoTarefa;
  ```
- **`elemento.style`**: Podemos usar para mudar cores ou esconder elementos se necessário.

---

# 3️⃣ Escutando Eventos (`addEventListener`)

Para que o botão funcione, precisamos "escutar" o clique:

```javascript
botaoAdicionar.addEventListener("click", function() {
    // Aqui chamamos a função que adiciona a tarefa
    adicionarTarefa();
});
```

---

# 🚀 Projeto Prático: To-do List (Finalizado)

Aqui está a estrutura completa que desenvolvemos:

### 1. HTML (`index.html`)
```html
<div class="container">
    <h1>🚀 Minha Lista de Tarefas</h1>
    
    <div class="input-group">
        <input type="text" id="nova-tarefa" placeholder="Digite uma nova tarefa...">
        <button id="btn-adicionar">Adicionar</button>
    </div>

    <ul id="lista-tarefas">
        <!-- As tarefas aparecerão aqui dinamicamente -->
    </ul>
</div>
```

### 2. CSS (`style.css`)
```css
.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    width: 350px;
}

li {
    background: #f9f9f9;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 4px;
    border-left: 5px solid #28a745;
}
```

---

# 🧩 Código JavaScript Completo (`script.js`)

```javascript
// 1. Seleção de Elementos
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// 2. Função de Adicionar Tarefa
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value;

    if (textoTarefa.trim() === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.textContent = textoTarefa;

    listaTarefas.appendChild(novoItem);

    inputTarefa.value = "";
    inputTarefa.focus();
}

// 3. Eventos
botaoAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
```

---

# 📌 Próxima Aula

> Na próxima aula, vamos evoluir nossa **To-do List**! Aprenderemos a remover tarefas (botão de excluir), marcar tarefas como concluídas e salvar os dados no navegador para que não sumam ao atualizar a página.
