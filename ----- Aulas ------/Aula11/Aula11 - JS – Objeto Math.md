# 📘 Programação para Internet II
## 🗓️ Aula 11 — JavaScript: O Objeto Math

---

# 🎯 Objetivo da Aula

- Compreender o que é o objeto `Math` e como ele funciona no JavaScript.
- Aprender a utilizar funções matemáticas integradas para cálculos comuns.
- Dominar métodos de arredondamento, potências, raízes e geração de números aleatórios.
- **Projeto Prático:** Criar uma calculadora científica básica para aplicar os conceitos.

---

# 1️⃣ O que é o Objeto `Math`?

Diferente de outros objetos (como `Date` ou `Array`), o `Math` não é um construtor. Você não cria uma "nova" instância dele (não usa `new Math()`). Ele é um objeto estático que contém propriedades e métodos para constantes e funções matemáticas.

---

# 2️⃣ Constantes Matemáticas

O `Math` nos fornece valores fixos importantes:

- **`Math.PI`**: Retorna o valor de PI (aprox. 3.14159...).
- **`Math.E`**: Retorna a base dos logaritmos naturais (aprox. 2.718...).

```javascript
console.log(Math.PI); // 3.141592653589793
```

---

# 3️⃣ Métodos de Arredondamento [MUITO ÚTIL]

Existem várias formas de arredondar um número decimal (float):

- **`Math.round(x)`**: Arredonda para o inteiro mais próximo (0.5 vai para cima).
- **`Math.ceil(x)`**: Arredonda para **cima** (teto), para o próximo inteiro.
- **`Math.floor(x)`**: Arredonda para **baixo** (chão), para o inteiro anterior.
- **`Math.trunc(x)`**: Remove a parte decimal, mantendo apenas o inteiro.

```javascript
Math.round(4.7); // 5
Math.round(4.4); // 4
Math.ceil(4.1);  // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
```

---

# 4️⃣ Potência e Raiz Quadrada

- **`Math.pow(base, expoente)`**: Retorna a base elevada ao expoente.
- **`Math.sqrt(x)`**: Retorna a raiz quadrada de x.

```javascript
Math.pow(2, 3);  // 8 (2 * 2 * 2)
Math.sqrt(25);   // 5
```

---

# 5️⃣ Mínimo, Máximo e Absoluto

- **`Math.min(a, b, c...)`**: Retorna o menor valor de uma lista.
- **`Math.max(a, b, c...)`**: Retorna o maior valor de uma lista.
- **`Math.abs(x)`**: Retorna o valor absoluto (sempre positivo).

```javascript
Math.min(10, 5, 20, 2); // 2
Math.max(10, 5, 20, 2); // 20
Math.abs(-5);           // 5
```

---

# 6️⃣ Números Aleatórios (`Math.random`)

O método `Math.random()` retorna um número entre **0 (inclusive)** e **1 (exclusive)**.

Para gerar um número inteiro entre um intervalo (ex: 1 a 10):
```javascript
// Fórmula: Math.floor(Math.random() * (max - min + 1)) + min;
let sorteio = Math.floor(Math.random() * 10) + 1;
console.log(sorteio);
```

---

# 🚀 Projeto Prático: Calculadora "Math Power"

Vamos criar uma ferramenta onde o usuário digita um número e pode aplicar diversas funções do objeto `Math` instantaneamente.

### 1. HTML (`index.html`)
O foco aqui é a estrutura de entrada e os botões de ação.

```html
<div class="container">
    <h1>🧮 Math Power Calc</h1>
    
    <div class="input-group">
        <label for="num">Digite um número:</label>
        <input type="number" id="num" step="any" placeholder="Ex: 4.7">
    </div>

    <div class="botoes-grid">
        <button onclick="calcular('round')">Round</button>
        <button onclick="calcular('ceil')">Ceil</button>
        <button onclick="calcular('floor')">Floor</button>
        <button onclick="calcular('sqrt')">√ Raiz</button>
        <button onclick="calcular('abs')">Absoluto</button>
        <button onclick="sortear()">🎲 Sortear 1-100</button>
    </div>

    <div id="resultado-box">
        <p>Resultado: <span id="resultado">-</span></p>
    </div>
</div>
```

---

### 2. JavaScript (`script.js`)
Lógica para capturar o valor e aplicar o método correspondente.

```javascript
const inputNum = document.getElementById("num");
const spanRes = document.getElementById("resultado");

function calcular(operacao) {
    let valor = parseFloat(inputNum.value);
    
    if (isNaN(valor)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    let res = 0;

    switch (operacao) {
        case 'round': res = Math.round(valor); break;
        case 'ceil':  res = Math.ceil(valor);  break;
        case 'floor': res = Math.floor(valor); break;
        case 'sqrt':  res = Math.sqrt(valor);  break;
        case 'abs':   res = Math.abs(valor);   break;
    }

    spanRes.textContent = res;
}

function sortear() {
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;
    inputNum.value = numeroSorteado;
    spanRes.textContent = "Sorteado!";
}
```

---

# 📌 Desafio da Aula

1. Adicione um botão para calcular o **Quadrado** de um número usando `Math.pow`.
2. Adicione um campo para "Número 2" e crie botões para encontrar o **Mínimo** e o **Máximo** entre os dois valores digitados.

---

# ⏭️ Próxima Aula
> **Aula 12 - Array Methods I:** Começaremos a manipular listas de dados de forma avançada (map, filter, reduce)!
