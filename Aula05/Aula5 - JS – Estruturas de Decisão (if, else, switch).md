# 📘 Programação para Internet II
## 🗓️ Aula 05 — JavaScript: Estruturas de Decisão (if, else, switch)

---

# 🎯 Objetivo da Aula

- Compreender o conceito de fluxo de execução em um programa.
- Utilizar a estrutura `if` e `else` para criar desvios condicionais simples e compostos.
- Aprender a encadear condições com `else if`.
- Dominar a estrutura `switch` para seleções múltiplas de forma organizada.
- Conhecer o operador ternário como uma alternativa compacta ao `if/else`.

---

# 🧠 Revisão: Operadores de Comparação e Lógicos

Na aula anterior, vimos que os **operadores de comparação** (como `==`, `===`, `>`, `<`) e os **operadores lógicos** (como `&&`, `||`, `!`) sempre resultam em um valor booleano: `true` ou `false`.

Hoje, aprenderemos como usar esses resultados para dizer ao computador **qual caminho seguir** no código. É aqui que nossos programas começam a ganhar "inteligência"!

---

# 🛣️ O que são Estruturas de Decisão?

Por padrão, o JavaScript executa o código de cima para baixo, linha por linha. As **estruturas de decisão** (ou condicionais) nos permitem quebrar essa linearidade, executando blocos de código apenas se certas condições forem atendidas.

---

# 1️⃣ A Estrutura `if` e `else`

O `if` (se) é a base de toda decisão na programação.

## if Simples
Executa um bloco de código **apenas se** a condição for verdadeira.

```javascript
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade!");
}
```

## if...else (Se... Senão)
Oferece um caminho alternativo caso a condição seja **falsa**.

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}
```

## if...else if...else (Múltiplas Condições)
Quando precisamos verificar várias possibilidades em sequência.

```javascript
let nota = 7.5;

if (nota >= 9) {
    console.log("Excelente! Conceito A");
} else if (nota >= 7) {
    console.log("Muito bem! Conceito B");
} else if (nota >= 5) {
    console.log("Aprovado! Conceito C");
} else {
    console.log("Reprovado. Precisa estudar mais!");
}
```

---

# 2️⃣ Estruturas Encadeadas (Nesting)

Podemos colocar um `if` dentro de outro para criar verificações mais complexas.

```javascript
let usuarioLogado = true;
let isAdmin = false;

if (usuarioLogado) {
    console.log("Bem-vindo ao sistema!");
    
    if (isAdmin) {
        console.log("Acesso ao painel administrativo liberado.");
    } else {
        console.log("Você não tem permissão de administrador.");
    }
} else {
    console.log("Por favor, faça login primeiro.");
}
```

---

# 3️⃣ Operador Ternário: O "if" de uma linha

É uma forma simplificada de escrever um `if...else` que atribui um valor a uma variável.
**Sintaxe:** `condição ? valor_se_verdadeiro : valor_se_falso`

```javascript
let idade = 17;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";

console.log(status); // Saída: Menor de idade
```

---

# 4️⃣ Estrutura `switch`

O `switch` é ideal quando temos uma única variável e queremos compará-la com vários valores possíveis (**casos**). Ele é mais limpo e organizado que vários `if/else if`.

### Importante:
- `case`: Define o valor a ser comparado.
- `break`: Interrompe a execução e sai do switch (fundamental!).
- `default`: Executa se nenhum dos casos anteriores for atendido (opcional, como o `else`).

```javascript
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido!");
}
```

---

# 🧩 Desafios Práticos

Tente resolver os desafios abaixo antes de olhar as soluções!

1.  **Par ou Ímpar:**
    *   Crie uma variável `numero`.
    *   Use `if` e o operador de resto (`%`) para verificar se o número é par ou ímpar.
    *   Imprima a mensagem no console.

2.  **Classificação de Triângulos:**
    *   Crie três variáveis: `ladoA`, `ladoB` e `ladoC`.
    *   Primeiro, verifique se esses lados formam um triângulo (a soma de dois lados deve ser sempre maior que o terceiro).
    *   Se for um triângulo, classifique-o:
        *   **Equilátero:** Todos os lados iguais.
        *   **Isósceles:** Dois lados iguais.
        *   **Escaleno:** Todos os lados diferentes.

3.  **Semáforo Inteligente:**
    *   Crie uma variável `corSemafaro` (pode ser "Verde", "Amarelo" ou "Vermelho").
    *   Use a estrutura `switch` para imprimir a ação do motorista:
        *   "Verde" -> "Siga em frente"
        *   "Amarelo" -> "Atenção, reduza a velocidade"
        *   "Vermelho" -> "Pare o veículo"
        *   Caso seja qualquer outra cor -> "Cor inválida ou semáforo com defeito"

4.  **Calculadora de IMC (Simplificada):**
    *   Calcule o IMC (`peso / (altura * altura)`).
    *   Exiba a classificação segundo a tabela:
        *   Abaixo de 18.5: "Abaixo do peso"
        *   Entre 18.5 e 24.9: "Peso normal"
        *   Entre 25 e 29.9: "Sobrepeso"
        *   30 ou mais: "Obesidade"

---

# ✅ Soluções dos Desafios

### Solução 1: Par ou Ímpar
```javascript
let numero = 15;

if (numero % 2 === 0) {
    console.log(`${numero} é Par`);
} else {
    console.log(`${numero} é Ímpar`);
}
```

### Solução 2: Classificação de Triângulos
```javascript
let a = 10, b = 10, c = 10;

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores não formam um triângulo.");
}
```

### Solução 3: Semáforo com Switch
```javascript
let cor = "Amarelo";

switch (cor.toLowerCase()) {
    case "verde":
        console.log("Siga em frente");
        break;
    case "amarelo":
        console.log("Atenção, reduza a velocidade");
        break;
    case "vermelho":
        console.log("Pare o veículo");
        break;
    default:
        console.log("Cor inválida!");
}
```

### Solução 4: Calculadora de IMC
```javascript
let peso = 75;
let altura = 1.75;
let imc = peso / (altura * altura);

console.log("Seu IMC é:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
```

---

# 📌 Próxima Aula

> Na próxima aula, vamos aprender sobre **Estruturas de Repetição** (`while`, `do while`, `for`), que nos permitirão executar o mesmo bloco de código várias vezes sem precisar repeti-lo manualmente. Até lá!
