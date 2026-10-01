const inputFiltro = document.getElementById("filtro-nome");
const vitrine = document.getElementById("vitrine-produtos"); // ou "vitrine-produtos" conforme o HTML

let produtosGerais = []; // Variável global para armazenar os dados após o carregamento


fetch('produtos.json')
    .then(resposta =>{
        return resposta.json(); // O método .json() já executa o JSON.parse() internamente
    })
    .then(dados => {
        produtosGerais = dados;
        renderizarProdutos(produtosGerais);
    })
    .catch(erro => console.error("Erro ao carregar os dados:", erro));

    function renderizarProdutos(lista) {
        vitrine.innerHTML = ""; 
        lista.forEach(produto => {
            const card = document.createElement("article");
            card.innerHTML = `
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
                <button onclick='logarDados(${JSON.stringify(produto)})'>Logar Dados (Stringify)</button>
            `;
            vitrine.appendChild(card);
        });     
    }       

    inputFiltro.addEventListener("input", () => {
        const termoBusca = inputFiltro.value.toLowerCase();
        const produtosFiltrados = produtosGerais.filter(produto => 
            produto.nome.toLowerCase().includes(termoBusca)
        );
        renderizarProdutos(produtosFiltrados);
    });

    window.logarDados = function(objeto) {
        const jsonString = JSON.stringify(objeto);
        console.log("Objeto em formato JSON:", jsonString);
        
    };