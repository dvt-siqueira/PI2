// -----------------------------------------------------------
// 1. SELEÇÃO DE ELEMENTOS (Revisão das aulas anteriores)
// -----------------------------------------------------------
const inputNome = document.getElementById("nome-produto");
const selectCat = document.getElementById("categoria-produto");
const previaNome = document.getElementById("previa-nome");
const previaCat = document.getElementById("previa-categoria");
const btnLimpar = document.getElementById("btn-limpar");
const cardPrevia = document.getElementById("card-previa");

// -----------------------------------------------------------
// 2. EVENTO INPUT (Interatividade em Tempo Real)
// Explique: O evento 'input' acontece a cada tecla digitada.
// -----------------------------------------------------------
inputNome.addEventListener("input", () => {
    // Atualiza o texto da prévia com o que está no input
    previaNome.textContent = inputNome.value;

    // LÓGICA DE ESTILO (Integração com Aula 09)
    // Se o nome for curto, fica azul. Se for longo, fica vermelho.
    if (inputNome.value.length > 15) {
        previaNome.style.color = "red";
    } else {
        previaNome.style.color = "#007bff";
    }
});

// -----------------------------------------------------------
// 3. EVENTO CHANGE (Seleção de Opções)
// Explique: O 'change' é acionado quando a seleção termina.
// -----------------------------------------------------------
selectCat.addEventListener("change", () => {
    previaCat.textContent = selectCat.value;

    // Aplicando uma classe CSS para destacar o card (Revisão Aula 09)
    if (selectCat.value !== "Sem Categoria") {
        cardPrevia.classList.add("destaque");
    } else {
        cardPrevia.classList.remove("destaque");
    }
});

// -----------------------------------------------------------
// 4. EVENTO CLICK (Ação de Finalização/Limpeza)
// -----------------------------------------------------------
btnLimpar.addEventListener("click", () => {
    // Limpando os valores dos inputs
    inputNome.value = "";
    selectCat.value = "Sem Categoria";

    // Resetando a prévia
    previaNome.textContent = "Nome do Produto";
    previaCat.textContent = "Nenhuma";
    cardPrevia.classList.remove("destaque");

    alert("O formulário foi limpo com sucesso!");
});


const input = document.getElementById("item-nome");
const btn = document.getElementById("btn-add");
const listaUl = document.getElementById("lista-visual");

// 1. Criando o Array de dados (Semana 16)
let minhaLista = [];

function atualizarInterface() {
    listaUl.innerHTML = ""; // Limpa a tela (Aula 08)

    // 2. Usando forEach para criar os elementos (Semana 16)
    minhaLista.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        // 3. Botão para remover (Aula 09 + Splice da Semana 16)
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "🗑";
        btnRemover.onclick = () => {
            minhaLista.splice(index, 1); // Remove do array
            atualizarInterface();        // Renderiza novamente
        };

        li.appendChild(btnRemover);
        listaUl.appendChild(li);
    });
}

btn.addEventListener("click", () => {
    if (input.value !== "") {
        minhaLista.push(input.value); // Adiciona ao array
        input.value = "";
        atualizarInterface();
    }
});