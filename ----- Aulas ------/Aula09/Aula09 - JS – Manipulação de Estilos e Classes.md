# 📘 Programação para Internet II
## 🗓️ Aula 09 — JavaScript: Manipulação de Estilos e Classes

---

# 🎯 Objetivo da Aula

- Aprender a alterar o visual de elementos HTML diretamente via JavaScript (`property.style`).
- Manipular classes CSS de forma dinâmica usando o objeto `classList` (`add`, `remove`, `toggle`).
- Entender a diferença entre estilos *inline* e classes CSS.
- **Evolução do Projeto:** Adicionar funcionalidades de concluir e excluir tarefas e um Modo Escuro.

---

# ✨ O que há de novo nesta versão? (Comparado à Aula 08)

Para facilitar o acompanhamento, veja as principais adições que faremos hoje:

1.  **Manipulação de Classes:** Uso do `classList` para ligar/desligar estilos (Modo Escuro e Tarefa Concluída).
2.  **Criação Complexa de Elementos:** Agora o `<li>` não terá apenas texto; ele conterá um `<span>` e dois `<button>`.
3.  **Remoção de Elementos:** Aprenderemos o método `element.remove()`.
4.  **Eventos em Elementos Dinâmicos:** Atribuiremos funções aos botões no momento em que eles são criados.

---

# 1️⃣ Manipulando Estilos Inline [NOVO]

Podemos acessar qualquer propriedade CSS através do objeto `.style`.
*Nota: Propriedades com hífen no CSS (ex: `background-color`) tornam-se camelCase no JS (`backgroundColor`).*

```javascript
const titulo = document.querySelector("h1");

// Mudando a cor diretamente via JS
titulo.style.color = "blue";
titulo.style.fontSize = "30px";
titulo.style.backgroundColor = "yellow";
```

---

# 2️⃣ Manipulando Classes com `classList` [NOVO]

Esta é a forma mais recomendada. Em vez de mudar cor por cor, mudamos a "roupa" (classe) do elemento.

- **`toggle("classe")`**: Adiciona se não existir, remove se já existir. Perfeito para botões de ligar/desligar.

```javascript
// Exemplo: Alternar o Modo Escuro no corpo da página
document.body.classList.toggle("dark-mode");
```

---

# 🚀 Projeto Prático: To-do List v2.0

### 1. HTML (`index.html`)
**Adição:** Botão para alternar o tema.

```html
<!-- [NOVO] Botão de tema acima do container -->
<button id="btn-tema">🌓 Alternar Tema</button>

<div class="container">
    <h1>🚀 Minha Lista de Tarefas</h1>
    
    <div class="input-group">
        <input type="text" id="nova-tarefa" placeholder="O que precisa fazer?">
        <button id="btn-adicionar">Adicionar</button>
    </div>

    <ul id="lista-tarefas">
        <!-- As tarefas aparecerão aqui -->
    </ul>
</div>
```

---

### 2. CSS (`style.css`)
**Adição:** Regras para o estado "concluída" e para o "modo escuro".

```css
/* [NOVO] Estilo para tarefa concluída (texto riscado) */
.concluida {
    text-decoration: line-through;
    color: #888;
    background-color: #e2e2e2 !important;
    border-left-color: #6c757d !important;
}

/* [NOVO] Regras para Modo Escuro */
body.dark-mode { background-color: #121212; }
body.dark-mode .container { background-color: #1e1e1e; color: white; }
body.dark-mode h1 { color: #fff; }

/* [NOVO] Estilização dos novos botões da lista */
.btn-check { background-color: #28a745; color: white; border: none; cursor: pointer; }
.btn-del { background-color: #dc3545; color: white; border: none; cursor: pointer; }
```

---

### 3. JavaScript (`script.js`)
**Adição:** Lógica de criação de múltiplos elementos e exclusão.

```javascript
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const btnTema = document.getElementById("btn-tema");

// [NOVO] Funcionalidade de Modo Escuro
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value;
    if (textoTarefa.trim() === "") return;

    // 1. Criar o <li>
    const novoItem = document.createElement("li");
    
    // 2. [NOVO] Criar Span para o texto (permite riscar apenas o texto)
    const spanTarefa = document.createElement("span");
    spanTarefa.textContent = textoTarefa;
    novoItem.appendChild(spanTarefa);

    // 3. [NOVO] Criar Botão Concluir
    const btnCheck = document.createElement("button");
    btnCheck.textContent = "✔";
    btnCheck.classList.add("btn-check");
    btnCheck.onclick = () => {
        novoItem.classList.toggle("concluida"); // Alterna a classe CSS
    };

    // 4. [NOVO] Criar Botão Remover
    const btnDel = document.createElement("button");
    btnDel.textContent = "🗑";
    btnDel.classList.add("btn-del");
    btnDel.onclick = () => {
        novoItem.remove(); // Remove o elemento da tela
    };

    // 5. Adicionar tudo ao novoItem e depois à lista
    novoItem.appendChild(btnCheck);
    novoItem.appendChild(btnDel);
    listaTarefas.appendChild(novoItem);

    inputTarefa.value = "";
    inputTarefa.focus();
}

botaoAdicionar.addEventListener("click", adicionarTarefa);
```

---

# 📌 Desafio da Aula

1. Adicione uma confirmação (`confirm`) no botão de remover.
2. Tente mudar a cor de fundo do `input` usando `element.style.backgroundColor` quando ele receber o foco (evento `focus`).

---

# ⏭️ Próxima Aula
> **Aula 10 - LocalStorage:** Como salvar essas tarefas para que elas não sumam ao dar F5 na página!
