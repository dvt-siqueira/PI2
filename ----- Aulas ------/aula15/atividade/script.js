// 1. Seleção de Elementos (Aula 08) [1, 2]
const inputFiltro = document.getElementById("filtro-nome");
const vitrine = document.getElementById("vitrine-produtos"); // ou "vitrine-produtos" conforme o HTML
const listaUl = document.getElementById("lista-produtos");

// Variável global para armazenar os dados após o carregamento
let produtosGerais = [];

// 2. Função para renderizar os produtos na tela (Aula 08 e 09) [3, 4]
function renderizarProdutos(lista) {
    // Limpa a tela antes de renderizar para evitar duplicidade no filtro
    listaUl.innerHTML = "";
    
    lista.forEach(prod => {
        // Criando o card do produto (Aula 09) [4, 5]
        const card = document.createElement("li");
        
        // Lógica de Estilo "Premium" (Aula 09 e 12) [6, 7]
        if (prod.preco > 500) {
            card.classList.add("premium"); // Aplica borda diferenciada ou destaque
        }

        card.innerHTML = `
            <h2>${prod.nome}</h2>
            <p>Categoria: ${prod.categoria}</p>
            <p><strong>R$ ${prod.preco.toFixed(2)}</strong></p>
            <button onclick='logarDados(${JSON.stringify(prod)})'>Logar Dados (Stringify)</button>
        `;

        listaUl.appendChild(card);
    });
}

// 3. Consumindo o JSON via Live Server (Aula 12 e MDN) [8, 9]
fetch('produtos.json')
    .then(resposta => {
        // O método .json() já executa o JSON.parse() internamente [9, 10]
        return resposta.json();
    })
    .then(dados => {
        produtosGerais = dados; // Salva a lista original para usar no filtro
        renderizarProdutos(dados); // Mostra todos os produtos ao carregar
    })
    .catch(erro => console.error("Erro ao carregar os dados:", erro));

// 4. Lógica de Filtro em Tempo Real (Aula 12) [11]
inputFiltro.addEventListener("input", () => {
    const termoBusca = inputFiltro.value.toLowerCase();
    
    // Filtrando o array original
    const produtosFiltrados = produtosGerais.filter(prod => 
        prod.nome.toLowerCase().includes(termoBusca)
    );

    // Renderiza apenas os que combinam com a busca
    renderizarProdutos(produtosFiltrados);
});

// 5. Exemplo de JSON.stringify (Atividade de Consolidação) [12, 13]
window.logarDados = function(objeto) {
    // Transforma o objeto JavaScript de volta em uma string JSON
    const jsonString = JSON.stringify(objeto);
    console.log("Dados prontos para envio (String):", jsonString);
    alert("Dados convertidos com sucesso! Veja o console.");
};