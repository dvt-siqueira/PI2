let valorCompra = 120;
let temCupom = true;
let valorFinal;

if (valorCompra > 100 && temCupom) {
    valorFinal = valorCompra * 0.8; // 20% de desconto
} else if (valorCompra > 100) {
    valorFinal = valorCompra * 0.9; // 10% de desconto
} else {
    valorFinal = valorCompra;
}
console.log("Valor a pagar: R$ " + valorFinal);

let multiplicador = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);
}

let contador = 10;
while (contador >= 0) {
    console.log("Contagem regressiva: " + contador);
    contador -= 2;
}

const input = document.getElementById("input-titulo");
const botao = document.getElementById("btn-gerar");
const titulo = document.getElementById("titulo-principal");

botao.addEventListener("click", () => {
    titulo.textContent = input.value;
});


function adicionarItem(nomeProduto) {
    const lista = document.getElementById("lista-compras");
    const novoItem = document.createElement("li");
    novoItem.textContent = nomeProduto;
    lista.appendChild(novoItem);
}


const botaoToggle = document.getElementById("meu-botao");
const caixa = document.getElementById("caixa");

botaoToggle.addEventListener("click", () => {
    caixa.classList.toggle("ativo");
});


const desc = document.querySelector(".descricao");
desc.style.color = "red";
desc.style.fontSize = "18px";



caixa.addEventListener("keypress", () => {
    console.log("Usuário está digitando...");
});


    const quadrado = document.querySelector(".quadrado");

    quadrado.addEventListener("mouseover", () => {
        quadrado.style.backgroundColor = "orange";
    });

    quadrado.addEventListener("mouseout", () => {
        quadrado.style.backgroundColor = "gray";
    });

    quadrado.addEventListener("dblclick", () => {
        quadrado.remove();
    });
