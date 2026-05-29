# 📘 Programação para Internet II
## 🗓️ Aula 12 — JavaScript: Eventos de Formulário (Click, Input, Change)

---

# 🎯 Objetivo da Aula

- Entender que eventos são "gatilhos" disparados pelo usuário.
- Diferenciar os eventos de digitação (`input`) e de seleção (`change`).
- **Evolução do Projeto:** Criar um **Simulador de Cadastro de Produto** que mostra uma prévia do card do produto em tempo real enquanto o usuário preenche o formulário.

---

# 💡 Conceito: O que são Eventos?

Nas aulas anteriores, usamos o `click`. Mas o navegador "ouve" muito mais coisas:
1. **`click`**: Quando o mouse pressiona e solta um elemento.
2. **`input`**: Dispara **a cada letra** digitada. Ótimo para validações e prévias.
3. **`change`**: Dispara quando o usuário **muda o valor** de um campo e "confirma" (muda o foco ou seleciona uma opção de lista).

---

# 🚀 Evoluindo a Lojavirtual (Passo a Passo)

Vamos construir uma tela onde o aluno preenche os dados de um produto e o "Card de Venda" se atualiza sozinho.

### 1️⃣ Parte 1: O HTML (O Esqueleto)
Vamos criar o formulário e um `div` que será a nossa prévia.

```html
<div class="container">
    <div class="form-cadastro">
        <h2>📦 Cadastro de Produto</h2>
        <input type="text" id="nome-produto" placeholder="Nome do Produto">
        
        <select id="categoria-produto">
            <option value="Sem Categoria">Selecione uma Categoria</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Vestuário">Vestuário</option>
            <option value="Alimentos">Alimentos</option>
        </select>

        <button id="btn-limpar">Limpar Formulário</button>
    </div>

    <!-- PAUSA 1: Explique que este DIV abaixo será controlado pelo JS -->
    <div class="card-previa" id="card-previa">
        <h3 id="previa-nome">Nome do Produto</h3>
        <p>Categoria: <span id="previa-categoria">Nenhuma</span></p>
        <div id="status-estoque">Aguardando preenchimento...</div>
    </div>
</div>
```

---

### 2️⃣ Parte 2: O JavaScript (A Mágica do Tempo Real)

Aqui vamos introduzir o `addEventListener` para os novos eventos.

```javascript
// Selecionando os elementos de entrada (Input)
const inputNome = document.getElementById("nome-produto");
const selectCat = document.getElementById("categoria-produto");

// Selecionando os elementos de saída (Onde vamos mostrar a resposta)
const previaNome = document.getElementById("previa-nome");
const previaCat = document.getElementById("previa-categoria");
const btnLimpar = document.getElementById("btn-limpar");

// --- EVENTO 1: INPUT (Digitando o nome) ---
inputNome.addEventListener("input", () => {
    // PAUSA 2: Explique que aqui o JS "lê" a cada tecla.
    previaNome.textContent = inputNome.value;
    
    // Pequena lógica de estilo aprendida na Aula 09:
    if(inputNome.value.length > 10) {
        previaNome.style.color = "red"; // Alerta de nome muito grande
    } else {
        previaNome.style.color = "black";
    }
});

// --- EVENTO 2: CHANGE (Escolhendo a categoria) ---
selectCat.addEventListener("change", () => {
    // PAUSA 3: Explique que o 'change' só roda quando a pessoa termina a escolha.
    previaCat.textContent = selectCat.value;
    
    // Mudando a classe CSS dinamicamente (Aula 09)
    document.getElementById("card-previa").classList.add("destaque");
});

// --- EVENTO 3: CLICK (Limpando tudo) ---
btnLimpar.addEventListener("click", () => {
    inputNome.value = "";
    selectCat.value = "Sem Categoria";
    previaNome.textContent = "Nome do Produto";
    previaCat.textContent = "Nenhuma";
    alert("Formulário Resetado!");
});
```

---

# 📌 Desafio (Tarefa de Casa)

Para aprimorar a nossa **Lojavirtual**, os alunos devem:

1. Adicionar um campo de `input type="number"` para o **Preço**.
2. Usar o evento `input` para mostrar o preço na prévia.
3. **Desafio Master:** Se o preço for maior que 100, mude a cor de fundo do `card-previa` para verde (indicando um produto premium).
4. Adicione um botão "Confirmar Cadastro" que, ao ser clicado, mostre um `alert` com a frase: "Produto [NOME] cadastrado com sucesso na categoria [CATEGORIA]!".

---

# ⏭️ Próxima Aula
> **Aula 13 -  Arrays (Métodos de Iteração) e Objetos (Estrutura JSON)

