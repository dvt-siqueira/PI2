 16: JS – Arrays e Métodos de Iteração# 📘 Programação para Internet II — Aula 16
## 🗓 Tema: JavaScript — Arrays e Métodos de Iteração

---

### 🎯 Objetivos da Aula
*   Compreender o conceito de **Arrays** como objetos globais de alto nível.
*   Dominar métodos de **manipulação** (adição e remoção de elementos).
*   Aprender a **percorrer e filtrar** listas de dados dinamicamente.
*   Integrar coleções de dados com a manipulação do DOM aprendida nas **Aulas 08 e 12**.

---

### 1️⃣ O que é um Array?
Segundo a **MDN**, o objeto `Array` do JavaScript é usado para construir "objetos semelhantes a listas". Diferente de variáveis simples que guardam um único valor (Aula 03), o array permite armazenar múltiplos dados em uma única estrutura.

*   **Índices:** Começam sempre no **zero (0)**.
*   **Dinâmico:** O tamanho do array e os tipos de elementos não são fixos.
*   **Propriedade `length`:** Indica o número de elementos e está conectada aos índices numéricos.

```javascript
// Criando um array (Referência MDN)
let produtos = ["Monitor", "Teclado", "Mouse"]; 

console.log(produtos[0]);      // Saída: Monitor
console.log(produtos.length);   // Saída: 3
```

---

### 2️⃣ Métodos de Manipulação (Mutação)
Para gerenciar dados em sistemas reais, precisamos adicionar ou remover itens da lista.

#### 📥 Adicionando Itens
*   **`push()`**: Adiciona ao **final** do array.
*   **`unshift()`**: Adiciona ao **início** do array.

#### 🗑 Removendo Itens
*   **`pop()`**: Remove o **último** item.
*   **`shift()`**: Remove o **primeiro** item.
*   **`splice(pos, n)`**: Remove `n` itens a partir da posição `pos`. É o método mais versátil para exclusão por índice.

**Exemplo Prático (Teste no Console):**
```javascript
let lista = ["HTML", "CSS"];

lista.push("JS");        // ["HTML", "CSS", "JS"]
lista.unshift("Git");    // ["Git", "HTML", "CSS", "JS"]
lista.splice(1, 1);      // Remove "HTML" (índice 1) -> ["Git", "CSS", "JS"]
console.log(lista);
```

---

### 3️⃣ Localizando e Iterando Dados
Para processar os dados e exibi-los na tela (como na Lista de Tarefas da **Aula 08**), usamos métodos de busca e iteração.

*   **`indexOf(item)`**: Procura o índice de um item específico.
*   **`forEach()`**: Executa uma função para cada elemento do array.

```javascript
let frutas = ["Maçã", "Banana", "Manga"];

// Buscando a posição
let pos = frutas.indexOf("Banana"); // pos = 1
console.log(pos); // Saída: 1

// Percorrendo a lista (Iteração)
frutas.forEach(function(item, indice) {
    console.log(`${indice}: ${item}`);
});
```

---

### 🚀 Atividade Integrada: Gerenciador de Lista de Compras
*Com base no Simulador de Cadastro da Aula 12, vamos criar uma lista que armazena os produtos em memória antes de exibir no DOM.*

#### 🧱 Estrutura HTML (Revisão Aula 08/12)
```html
<input type="text" id="item-nome" placeholder="Nome do item">
<button id="btn-add">Adicionar à Lista</button>
<ul id="lista-visual"></ul>
```

#### ⚙ Lógica JavaScript (Semanas 12 + 16)
```javascript
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
```

---

### 📝 Lista de Exercícios – JavaScript Arrays

Esta lista de exercícios foi elaborada para consolidar os conhecimentos sobre **Arrays** (Vetores), abrangendo desde a criação e manipulação básica até métodos avançados de iteração e transformação, conforme documentado nas fontes da **MDN** e no material de aula.

---

#### 🧩 Parte 1 – Conceitos Básicos
Os arrays são objetos semelhantes a listas que armazenam dados em posições numeradas chamadas de índices, começando sempre do **zero (0)**.

**Exercício 1 – Criando Arrays**
Crie os seguintes arrays no seu script:
1.  Um array contendo os meses do ano (strings).
2.  Um array com cinco números inteiros.
3.  Um array contendo diferentes tipos de dados (uma string, um número, um booleano e um objeto).

**Exercício 2 – Acessando Elementos**
Considere o array: `const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];`
Faça o seguinte utilizando console.log:
*   **a)** Exiba a primeira fruta (índice 0).
*   **b)** Exiba a última fruta utilizando a propriedade `length - 1`.
*   **c)** Exiba a quantidade total de elementos do array usando a propriedade `length`.

**Exercício 3 – Alterando Valores**
Utilize o array: `const carros = ["Ford", "Fiat", "GM"];`
1.  Troque o valor "Fiat" por "Toyota" acessando o seu índice correspondente.
2.  Exiba o array final no console.

---

#### 📥 Parte 2 – Inserção e Remoção
Métodos de mutação permitem alterar o conteúdo do array adicionando ou removendo elementos.

**Exercício 4 – push() e pop()**
1.  Crie um array vazio chamado `compras`.
2.  Adicione cinco produtos de supermercado utilizando o método `push()` (adiciona ao final).
3.  Remova o último produto adicionado utilizando o método `pop()`.
4.  Mostre o array final no console.

**Exercício 5 – shift() e unshift()**
Utilize o array: `const fila = ["Carlos", "Ana", "Pedro"];`
1.  Remova o primeiro cliente da fila utilizando `shift()`.
2.  Adicione "Mariana" no início da fila utilizando `unshift()`.
3.  Exiba o estado atual da fila.

**Exercício 6 – splice()**
O método `splice()` é versátil e permite remover e adicionar itens em qualquer posição.
Considere: `const letras = ["A", "B", "C", "D", "E"];`
1.  Remova a letra "C".
2.  No lugar dela, insira as letras "X" e "Y".

---

#### 🔄 Parte 3 – Percorrendo Arrays
Iterar significa percorrer cada elemento da lista para realizar uma ação.

**Exercício 7 – Loop for**
Utilize um loop `for` tradicional para percorrer e exibir cada item do array:
`const numeros =;`.

**Exercício 8 – for...of**
Repita o exercício anterior, mas utilize a estrutura `for...of` para listar os números.

**Exercício 9 – forEach()**
O método `forEach()` executa uma função para cada elemento do array.
Percorra o array `const cidades = ["São Paulo", "Rio", "Curitiba", "Manaus"];` exibindo no console:
*   "Cidade 1: São Paulo"
*   "Cidade 2: Rio"... (Dica: use o parâmetro de índice do `forEach`).

---

#### 🔍 Parte 4 – Pesquisa
Métodos para localizar dados ou verificar a existência de itens.

**Exercício 10 – includes()**
Verifique se existe a fruta "Banana" no array do Exercício 2 usando `includes()`.
*   Se existir, exiba: "Fruta encontrada!".
*   Caso contrário: "Fruta não encontrada".

**Exercício 11 – indexOf()**
Encontre e exiba a posição (índice) da string "Laranja" no array de frutas.

**Exercício 12 – find()**
Utilize o método `find()` para encontrar o primeiro objeto que satisfaça a condição:
```javascript
const pessoas = [
    {nome: "Ana", idade: 18},
    {nome: "Carlos", idade: 25},
    {nome: "João", idade: 30}
];
```
Encontre a primeira pessoa com **idade maior que 20**.

---

#### ⚡ Parte 5 – Transformando Arrays
Métodos que criam novos arrays ou valores a partir de uma lista existente.

**Exercício 13 – map()**
Dado o array `const numeros =;`, use o `map()` para criar um novo array contendo o dobro de cada valor.
*   *Resultado esperado:*

**Exercício 14 – filter()**
A partir do array `const numeros =;`, utilize o `filter()` para gerar uma nova lista contendo apenas os **números pares**.

**Exercício 15 – reduce()**
Utilize o `reduce()` para somar todos os valores do array `const valores =;`.
*   *Resultado esperado: 100*

---

#### 📊 Parte 6 – Ordenação e Reversão
**Exercício 16 – sort()**
Ordene alfabeticamente o array: `const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];`.

**Exercício 17 – reverse()**
Utilize o método `reverse()` para inverter a ordem dos elementos do array de nomes anterior.

**Exercício 18 – sort() com números**
Ao ordenar números, o `sort()` pode tratá-los como strings (ex: 100 vem antes de 20).
Ordene corretamente o array `const numeros =;` utilizando uma **função de comparação**.

---

#### 🔗 Parte 7 – Strings e Arrays
**Exercício 19 – join()**
Transforme o array de cidades do Exercício 9 em uma única string, onde as cidades são separadas por um hífen (" - ").
Com base nos conceitos de **Arrays** apresentados nas fontes e na lista de exercícios proposta, aqui está o código JavaScript com as resoluções comentadas.

```javascript
// ==========================================
// PARTE 1 – CONCEITOS BÁSICOS
// ==========================================

// Exercício 1 – Criando Arrays
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
const numerosInteiros =;
const tiposDiversos = ["Texto", 100, true, { id: 1 }];

// Exercício 2 – Acessando Elementos
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
console.log("a) Primeira fruta:", frutas); // Maçã
console.log("b) Última fruta:", frutas[frutas.length - 1]); // Abacaxi
console.log("c) Quantidade:", frutas.length); // 5

// Exercício 3 – Alterando Valores
const carros = ["Ford", "Fiat", "GM"];
carros = "Toyota"; // Troca "Fiat" por "Toyota"
console.log("Carros atualizados:", carros);

// ==========================================
// PARTE 2 – INSERÇÃO E REMOÇÃO
// ==========================================

// Exercício 4 – push() e pop()
const compras = [];
compras.push("Arroz", "Feijão", "Macarrão", "Leite", "Café");
compras.pop(); // Remove "Café"
console.log("Lista de Compras:", compras);

// Exercício 5 – shift() e unshift()
const fila = ["Carlos", "Ana", "Pedro"];
fila.shift(); // Remove "Carlos"
fila.unshift("Mariana"); // Adiciona ao início
console.log("Fila atual:", fila);

// Exercício 6 – splice()
const letras = ["A", "B", "C", "D", "E"];
letras.splice(2, 1, "X", "Y"); // No índice 2, remove 1 item e adiciona X e Y
console.log("Letras após splice:", letras);

// ==========================================
// PARTE 3 – PERCORRENDO ARRAYS
// ==========================================

const numeros =;

// Exercício 7 – for tradicional
for (let i = 0; i < numeros.length; i++) {
    console.log("For:", numeros[i]);
}

// Exercício 8 – for...of
for (const num of numeros) {
    console.log("For...of:", num);
}

// Exercício 9 – forEach()
const cidades = ["São Paulo", "Rio", "Curitiba", "Manaus"];
cidades.forEach((cidade, index) => {
    console.log(`Cidade ${index + 1}: ${cidade}`);
});

// ==========================================
// PARTE 4 – PESQUISA
// ==========================================

// Exercício 10 – includes()
if (frutas.includes("Banana")) {
    console.log("Fruta encontrada!");
} else {
    console.log("Fruta não encontrada.");
}

// Exercício 11 – indexOf()
console.log("Posição da Laranja:", frutas.indexOf("Laranja"));

// Exercício 12 – find()
const pessoas = [
    { nome: "Ana", idade: 18 },
    { nome: "Carlos", idade: 25 },
    { nome: "João", idade: 30 }
];
const pessoaMaior20 = pessoas.find(p => p.idade > 20);
console.log("Primeira pessoa > 20 anos:", pessoaMaior20.nome);

// ==========================================
// PARTE 5 – TRANSFORMANDO ARRAYS
// ==========================================

// Exercício 13 – map()
const baseNumeros =;
const dobros = baseNumeros.map(n => n * 2);
console.log("Dobros:", dobros);

// Exercício 14 – filter()
const misturaNumeros =;
const pares = misturaNumeros.filter(n => n % 2 === 0);
console.log("Apenas pares:", pares);

// Exercício 15 – reduce()
const valores =;
const somaTotal = valores.reduce((acumulador, atual) => acumulador + atual, 0);
console.log("Soma Total:", somaTotal);

// ==========================================
// PARTE 6 – ORDENAÇÃO
// ==========================================

// Exercício 16 – sort() alfabético
const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
nomes.sort();
console.log("Nomes ordenados:", nomes);

// Exercício 17 – reverse()
nomes.reverse();
console.log("Nomes invertidos:", nomes);

// Exercício 18 – sort() numérico
const numerosDesordenados =;
numerosDesordenados.sort((a, b) => a - b); // Função de comparação para números
console.log("Números em ordem crescente:", numerosDesordenados);

// ==========================================
// PARTE 7 – STRINGS E ARRAYS
// ==========================================

// Exercício 19 – join()
const cidadesString = cidades.join(" - ");
console.log("Cidades em string:", cidadesString);
```

### Explicação dos Conceitos Chave:
*   **Mutabilidade:** Note que métodos como `push`, `pop`, `splice` e `sort` alteram o array original.
*   **Imutabilidade/Transformação:** Métodos como `map` e `filter` não alteram o array original, mas retornam um novo array com os resultados.
*   **Referência:** Ao usar `const` para declarar um array, você não pode reatribuir a variável para um novo array, mas pode modificar seu conteúdo livremente (adicionar/remover itens).
### 📚 Referências Oficiais
*   [MDN - Array JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).
*   [MDN - Manipulação do DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).