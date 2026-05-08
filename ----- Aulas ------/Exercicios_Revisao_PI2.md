# Lista de Exercícios de Revisão — Programação para Internet II

Esta lista foi preparada para ajudar você a revisar os conceitos fundamentais vistos nas Aulas 07, 08 e 09, além de reforçar os temas abordados na prova mensal. Resolva os exercícios sem consultar o gabarito inicialmente para testar seus conhecimentos.

---

## Parte 1: Lógica, Operadores e Estruturas de Repetição

**Exercício 1: Verificador de Desconto**
Crie um código que receba o `valorCompra` e uma variável booleana `temCupom`.
- Se o valor da compra for maior que 100 **E** o aluno tiver cupom, aplique 20% de desconto.
- Se o valor for maior que 100 mas **NÃO** tiver cupom, aplique 10% de desconto.
- Caso contrário, não há desconto.
Exiba o valor final no console.

**Exercício 2: Tabuada Dinâmica**
Utilize um laço `for` para imprimir a tabuada de um número armazenado na variável `multiplicador` (ex: 7). O resultado deve aparecer no formato: "7 x 1 = 7".

**Exercício 3: O Mistério do While**
Crie um loop `while` que comece em 10 e diminua de 2 em 2 até chegar a 0. Para cada iteração, imprima: "Contagem regressiva: [valor]".

---

## Parte 2: Manipulação do DOM

**Exercício 4: Criador de Títulos**
Imagine que você tem um `input` com id `"input-titulo"` e um botão com id `"btn-gerar"`. Escreva o código JavaScript para que, ao clicar no botão, o texto digitado no input seja exibido dentro de uma tag `<h1>` que já existe na página com o id `"titulo-principal"`.

**Exercício 5: Lista de Compras Dinâmica**
Dado o HTML abaixo:
```html
<ul id="lista-compras"></ul>
```
Escreva uma função que receba uma string (ex: "Arroz") e:
1. Crie um novo elemento `<li>`.
2. Defina o texto desse elemento como o nome do produto.
3. Adicione esse `<li>` dentro da `<ul>` com id `"lista-compras"`.

---

## Parte 3: Estilos, Classes e Eventos

**Exercício 6: Botão Liga/Desliga (Toggle)**
Crie uma lógica para um botão que, ao ser clicado, alterna a classe `"ativo"` em uma `div` com id `"caixa"`. No CSS, a classe `.ativo` muda a cor de fundo para verde. No JS, use o método correto para alternar a classe sem precisar de um `if`.

**Exercício 7: Estilo Inline via JS**
Selecione um parágrafo com a classe `"descricao"` e, via JavaScript, altere sua cor para azul e o tamanho da fonte para "18px" diretamente usando o objeto `.style`.

**Exercício 8: Eventos de Teclado**
Configure um evento para um campo de `input` para que, toda vez que o usuário pressionar qualquer tecla, o console exiba: "Usuário está digitando...".

---

## Parte 4: Desafio Integrado

**Exercício 9: Mini Galeria de Cores**
Crie um pequeno script onde:
1. Ao passar o mouse (evento `mouseover`) sobre um quadrado (`div`), a cor de fundo dele mude para "orange".
2. Ao tirar o mouse (evento `mouseout`), a cor volte para "gray".
3. Ao clicar duas vezes (`dblclick`), o quadrado deve ser removido da tela.

---

# Gabarito e Explicações

### Exercício 1 (Lógica)
```javascript
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
```

### Exercício 2 (Tabuada)
```javascript
let multiplicador = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);
}
```

### Exercício 3 (While)
```javascript
let contador = 10;
while (contador >= 0) {
    console.log("Contagem regressiva: " + contador);
    contador -= 2;
}
```

### Exercício 4 (DOM Básico)
```javascript
const input = document.getElementById("input-titulo");
const botao = document.getElementById("btn-gerar");
const titulo = document.getElementById("titulo-principal");

botao.addEventListener("click", () => {
    titulo.textContent = input.value;
});
```

### Exercício 5 (Criação de Elementos)
```javascript
function adicionarItem(nomeProduto) {
    const lista = document.getElementById("lista-compras");
    const novoItem = document.createElement("li");
    novoItem.textContent = nomeProduto;
    lista.appendChild(novoItem);
}
```

### Exercício 6 (Toggle de Classes)
```javascript
const botao = document.getElementById("meu-botao");
const caixa = document.getElementById("caixa");

botao.addEventListener("click", () => {
    caixa.classList.toggle("ativo");
});
```

### Exercício 7 (Estilo Inline)
```javascript
const desc = document.querySelector(".descricao");
desc.style.color = "blue";
desc.style.fontSize = "18px";
```

### Exercício 8 (Eventos)
```javascript
const campo = document.querySelector("input");
campo.addEventListener("keypress", () => {
    console.log("Usuário está digitando...");
});
```

### Exercício 9 (Desafio Integrado)
```javascript
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
```
