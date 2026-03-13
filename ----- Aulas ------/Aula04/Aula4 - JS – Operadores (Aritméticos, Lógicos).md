# 📘 Programação para Internet II
## 🗓️ Aula 04 — JavaScript: Operadores (Aritméticos, Lógicos e Comparação)

---

# 🎯 Objetivo da Aula

- Compreender e utilizar os operadores aritméticos para realizar cálculos matemáticos.
- Entender e aplicar os operadores de comparação para comparar valores.
- Dominar os operadores lógicos para construir expressões condicionais complexas.
- Praticar a combinação de diferentes tipos de operadores em cenários reais.

---

# 🧠 Revisão: Variáveis e Tipos de Dados

Na aula anterior, aprendemos sobre **variáveis** e **tipos de dados** em JavaScript. Vimos como `let` e `const` nos permitem armazenar diferentes tipos de informações (números, textos, booleanos, etc.) e como `console.log()` é fundamental para visualizar esses valores.

Agora que sabemos guardar informações, o próximo passo é **manipulá-las** e **tomar decisões** com base nelas. É exatamente isso que os **operadores** nos permitem fazer!

---

# ➕ Operadores Aritméticos: Fazendo Contas em JavaScript

> **Operadores aritméticos** são símbolos que realizam operações matemáticas em valores (operandos) e retornam um resultado numérico.

Você já está familiarizado com eles da matemática básica. Em JavaScript, eles funcionam de maneira muito similar.

## Principais Operadores Aritméticos

| Operador | Descrição          | Exemplo         | Resultado |
| -------- | ------------------ | --------------- | --------- |
| `+`      | Adição             | `5 + 3`         | `8`       |
| `-`      | Subtração          | `10 - 4`        | `6`       |
| `*`      | Multiplicação      | `6 * 2`         | `12`      |
| `/`      | Divisão            | `15 / 3`        | `5`       |
| `%`      | Módulo (Resto)     | `10 % 3`        | `1`       |
| `**`     | Exponenciação (ES6)| `2 ** 3`        | `8`       |

```javascript
// Exemplo 1: Operações Básicas
let num1 = 10;
let num2 = 5;

let soma = num1 + num2;
console.log("Soma:", soma); // Saída: Soma: 15

let subtracao = num1 - num2;
console.log("Subtração:", subtracao); // Saída: Subtração: 5

let multiplicacao = num1 * num2;
console.log("Multiplicação:", multiplicacao); // Saída: Multiplicação: 50

let divisao = num1 / num2;
console.log("Divisão:", divisao); // Saída: Divisão: 2

let resto = num1 % 3; // 10 dividido por 3 é 3 com resto 1
console.log("Resto da divisão (10 % 3):", resto); // Saída: Resto da divisão (10 % 3): 1

let potencia = 2 ** 4; // 2 elevado à potência de 4 (2*2*2*2)
console.log("Potência (2 ** 4):", potencia); // Saída: Potência (2 ** 4): 16
```

## Incremento (`++`) e Decremento (`--`)

Estes operadores são usados para adicionar ou subtrair `1` de uma variável.

-   `++`: Adiciona 1 (incrementa).
-   `--`: Subtrai 1 (decrementa).

Eles podem ser usados de duas formas:

1.  **Prefixado (`++x` ou `--x`):** O valor é alterado *antes* de ser usado na expressão.
2.  **Posfixado (`x++` ou `x--`):** O valor é alterado *depois* de ser usado na expressão.

```javascript
// Exemplo 2: Incremento e Decremento
let contador = 0;
console.log("Contador inicial:", contador); // Saída: Contador inicial: 0

contador++; // contador = contador + 1
console.log("Contador depois do ++:", contador); // Saída: Contador depois do ++: 1

contador--; // contador = contador - 1
console.log("Contador depois do --:", contador); // Saída: Contador depois do --: 0

let a = 5;
let b = ++a; // 'a' é incrementado para 6, então 'b' recebe 6
console.log("a:", a, "b:", b); // Saída: a: 6 b: 6

let x = 5;
let y = x++; // 'y' recebe o valor atual de 'x' (5), então 'x' é incrementado para 6
console.log("x:", x, "y:", y); // Saída: x: 6 y: 5
```

## Ordem de Precedência

Assim como na matemática, os operadores em JavaScript seguem uma ordem de precedência. Multiplicação e Divisão têm precedência sobre Adição e Subtração. Parênteses `()` podem ser usados para alterar essa ordem.

```javascript
// Exemplo 3: Precedência
let resultado1 = 5 + 3 * 2;
console.log("Resultado 1 (5 + 3 * 2):", resultado1); // Saída: Resultado 1 (5 + 3 * 2): 11 (3*2 = 6, depois 5+6)

let resultado2 = (5 + 3) * 2;
console.log("Resultado 2 ((5 + 3) * 2):", resultado2); // Saída: Resultado 2 ((5 + 3) * 2): 16 (5+3 = 8, depois 8*2)
```

---

# ⚖️ Operadores de Comparação: Perguntando "É Verdadeiro?"

> **Operadores de comparação** são usados para comparar dois valores e retornam um valor booleano (`true` ou `false`). Eles são a base para tomadas de decisão em nossos programas.

| Operador | Descrição                     | Exemplo          | Resultado |
| -------- | ----------------------------- | ---------------- | --------- |
| `==`     | Igual a (compara valor)       | `5 == '5'`       | `true`    |
| `===`    | Estritamente igual a (compara valor E tipo) | `5 === '5'`      | `false`   |
| `!=`     | Diferente de (compara valor)  | `10 != 5`        | `true`    |
| `!==`    | Estritamente diferente de (compara valor E tipo) | `10 !== '10'`    | `true`    |
| `>`      | Maior que                     | `7 > 3`          | `true`    |
| `<`      | Menor que                     | `2 < 8`          | `true`    |
| `>=`     | Maior ou igual a              | `5 >= 5`         | `true`    |
| `<=`     | Menor ou igual a              | `4 <= 2`         | `false`   |

```javascript
// Exemplo 4: Comparando Números
let idadeAluno = 18;
let idadeMinima = 18;

console.log("É maior de idade? (idadeAluno >= idadeMinima):", idadeAluno >= idadeMinima); // Saída: É maior de idade? (idadeAluno >= idadeMinima): true
console.log("É menor de 16? (idadeAluno < 16):", idadeAluno < 16); // Saída: É menor de 16? (idadeAluno < 16): false

// Exemplo 5: Comparando Diferentes Tipos (CUIDADO com == e !=)
let numeroString = "10";
let numeroNumber = 10;

console.log("numeroString == numeroNumber:", numeroString == numeroNumber);   // Saída: true (JavaScript tenta converter os tipos)
console.log("numeroString === numeroNumber:", numeroString === numeroNumber); // Saída: false (Tipos são diferentes: string vs number)

console.log("numeroString != numeroNumber:", numeroString != numeroNumber);   // Saída: false
console.log("numeroString !== numeroNumber:", numeroString !== numeroNumber); // Saída: true

let zero = 0;
let falseBoolean = false;
console.log("zero == falseBoolean:", zero == falseBoolean); // Saída: true (0 é considerado "falso" em comparações frouxas)
console.log("zero === falseBoolean:", zero === falseBoolean); // Saída: false (Tipos são diferentes)
```

**Importante**: Sempre prefira usar `===` (estritamente igual) e `!==` (estritamente diferente) na maioria dos casos. Eles evitam conversões de tipo inesperadas e tornam seu código mais previsível e menos propenso a erros. Use `==` e `!=` apenas quando você *realmente* quiser que JavaScript faça a conversão de tipo por você.

---

# 🧠 Operadores Lógicos: Conectando Verdades

> **Operadores lógicos** são usados para combinar ou inverter valores booleanos. Eles nos permitem construir condições mais complexas, unindo os resultados de múltiplas comparações.

| Operador | Descrição           | Exemplo                       | Resultado     |
| -------- | ------------------- | ----------------------------- | ------------- |
| `&&`     | E Lógico (AND)      | `true && false`               | `false`       |
| `||`     | OU Lógico (OR)      | `true || false`               | `true`        |
| `!`      | NÃO Lógico (NOT)    | `!true`                       | `false`       |

## 1. E Lógico (`&&`)

Retorna `true` se **TODOS** os operandos forem `true`. Se um único operando for `false`, o resultado é `false`.

```javascript
// Exemplo 6: E Lógico (&&)
let possuiCNH = true;
let temCarro = false;
let ehMaiorDe18 = true;

// Para dirigir, precisa ter CNH E ser maior de 18
let podeDirigir = possuiCNH && ehMaiorDe18;
console.log("Pode dirigir?", podeDirigir); // Saída: Pode dirigir? true

// Para alugar carro, precisa ter CNH E ter carro E ser maior de 18
let podeAlugarCarro = possuiCNH && temCarro && ehMaiorDe18;
console.log("Pode alugar carro?", podeAlugarCarro); // Saída: Pode alugar carro? false (porque temCarro é false)

console.log("true && true:", true && true);     // Saída: true
console.log("true && false:", true && false);   // Saída: false
console.log("false && true:", false && true);   // Saída: false
console.log("false && false:", false && false); // Saída: false
```

## 2. OU Lógico (`||`)

Retorna `true` se **PELO MENOS UM** dos operandos for `true`. Retorna `false` apenas se **TODOS** os operandos forem `false`.

```javascript
// Exemplo 7: OU Lógico (||)
let estaChovendo = false;
let temGuardaChuva = true;
let estaSol = true;

// Posso sair se NÃO estiver chovendo OU se eu tiver guarda-chuva
let possoSair = !estaChovendo || temGuardaChuva;
console.log("Posso sair?", possoSair); // Saída: Posso sair? true

// Preciso de óculos de sol se estiver Sol OU se estiver muito claro
let precisoOculosDeSol = estaSol || !estaChovendo; // !estaChovendo é true
console.log("Preciso de óculos de sol?", precisoOculosDeSol); // Saída: Preciso de óculos de sol? true

console.log("true || true:", true || true);     // Saída: true
console.log("true || false:", true || false);   // Saída: true
console.log("false || true:", false || true);   // Saída: true
console.log("false || false:", false || false); // Saída: false
```

## 3. NÃO Lógico (`!`)

Inverte o valor booleano de um operando. Se for `true`, vira `false`. Se for `false`, vira `true`.

```javascript
// Exemplo 8: NÃO Lógico (!)
let usuarioAtivo = true;
let usuarioInativo = !usuarioAtivo;
console.log("Usuário ativo:", usuarioAtivo);     // Saída: Usuário ativo: true
console.log("Usuário inativo:", usuarioInativo); // Saída: Usuário inativo: false

console.log("!true:", !true);   // Saída: false
console.log("!false:", !false); // Saída: true

// Também pode ser usado para converter valores para booleanos e invertê-los
console.log("!0:", !0);         // Saída: true (0 é considerado false, !0 é true)
console.log("!'Olá':", !'Olá'); // Saída: false ('Olá' é considerado true, !'Olá' é false)
```

---

# 💡 Operadores de Atribuição (Compostos)

> **Operadores de atribuição** são usados para atribuir um valor a uma variável. Os operadores compostos combinam uma operação aritmética com a atribuição.

| Operador | Exemplo          | Equivalente a      |
| -------- | ---------------- | ------------------ |
| `=`      | `x = 10`         | `x = 10`           |
| `+=`     | `x += 5`         | `x = x + 5`        |
| `-=`     | `x -= 3`         | `x = x - 3`        |
| `*=`     | `x *= 2`         | `x = x * 2`        |
| `/=`     | `x /= 4`         | `x = x / 4`        |
| `%=`     | `x %= 3`         | `x = x % 3`        |
| `**=`    | `x **= 2`        | `x = x ** 2`       |

```javascript
// Exemplo 9: Operadores de Atribuição Compostos
let saldo = 100;
console.log("Saldo inicial:", saldo); // Saída: Saldo inicial: 100

saldo += 50; // saldo = saldo + 50
console.log("Saldo após depósito de 50:", saldo); // Saída: Saldo após depósito de 50: 150

saldo -= 20; // saldo = saldo - 20
console.log("Saldo após saque de 20:", saldo); // Saída: Saldo após saque de 20: 130

let precoProduto = 25;
precoProduto *= 2; // precoProduto = precoProduto * 2
console.log("Preço do produto dobrado:", precoProduto); // Saída: Preço do produto dobrado: 50

let pontos = 100;
pontos /= 10; // pontos = pontos / 10
console.log("Pontos divididos por 10:", pontos); // Saída: Pontos divididos por 10: 10

let contadorModulo = 7;
contadorModulo %= 3; // contadorModulo = contadorModulo % 3
console.log("Resto de 7 por 3:", contadorModulo); // Saída: Resto de 7 por 3: 1
```

---

# 🧠 O que aprendemos hoje?

-   **Operadores Aritméticos:** Essenciais para cálculos matemáticos (+, -, \*, /, %, \*\*, ++, --).
-   **Precedência:** A ordem em que as operações são executadas (parênteses mudam a ordem).
-   **Operadores de Comparação:** Para comparar valores (==, ===, !=, !==, >, <, >=, <=) e retornam `true` ou `false`. Sempre prefira `===` e `!==`.
-   **Operadores Lógicos:** Para combinar ou inverter resultados booleanos (&&, ||, !).
-   **Operadores de Atribuição Compostos:** Uma forma concisa de realizar uma operação e atribuir o resultado à mesma variável (+=, -=, \*=, /=, %=, \*\*=).

---

# 🧩 Desafios Práticos

Prepare seu editor de código e o console do navegador para testar seus conhecimentos!

1.  **Cálculo de Média:**
    *   Crie três variáveis `nota1`, `nota2` e `nota3` e atribua a elas valores numéricos (com casas decimais).
    *   Calcule a `media` dessas notas usando operadores aritméticos.
    *   Imprima a `media` no console.
    *   Declare uma constante `MEDIA_APROVACAO` com o valor `7.0`.
    *   Use um operador de comparação para verificar se o aluno foi `aprovado` (média maior ou igual à `MEDIA_APROVACAO`). Imprima o resultado booleano.

2.  **Conversor de Temperatura:**
    *   Declare uma variável `celsius` e atribua a ela um valor numérico (ex: 25).
    *   Converta essa temperatura para Fahrenheit usando a fórmula: `Fahrenheit = (Celsius * 9/5) + 32`.
    *   Armazene o resultado em uma variável `fahrenheit`.
    *   Imprima ambas as temperaturas no console, usando template literals para uma mensagem amigável (ex: "25°C equivalem a 77°F").

3.  **Verificador de Login:**
    *   Crie duas variáveis: `usuarioLogado` (booleano) e `idadeUsuario` (numérica). Atribua valores a elas.
    *   Crie uma variável `isAdmin` (booleano) e atribua `false`.
    *   Usando operadores lógicos, verifique as seguintes condições e imprima os resultados:
        *   `podeAcessarPainel`: O usuário só pode acessar o painel se estiver logado `E` for `admin`.
        *   `podeComprar`: O usuário pode comprar se estiver logado `OU` tiver mais de 16 anos.
        *   `naoLogado`: Verifique se o usuário `NÃO` está logado.

4.  **Desconto na Loja:**
    *   Declare uma variável `valorCompra` com um valor numérico (ex: 150.00).
    *   Declare uma variável `temCupom` como `true`.
    *   Declare uma constante `DESCONTO_PERCENTUAL` com `0.10` (10%).
    *   Use um operador de atribuição composto para aplicar o desconto, se `temCupom` for `true`. (Dica: `valorCompra = valorCompra - (valorCompra * DESCONTO_PERCENTUAL)` ou `valorCompra *= (1 - DESCONTO_PERCENTUAL)`).
    *   Imprima o `valorFinal` da compra no console.

5.  **Contagem Regressiva:**
    *   Declare uma variável `segundos` e atribua `10`.
    *   Use o operador de decremento (`--`) para simular uma contagem regressiva.
    *   Imprima o valor de `segundos` a cada decremento até chegar a 0. (Desafio extra: tente fazer isso dentro de um loop, que veremos em aulas futuras, mas por enquanto, faça na mão mesmo com vários `console.log`!).

---

# 📌 Próxima Aula

> Na próxima aula, vamos explorar as **Estruturas Condicionais** (`if`, `else if`, `else`), que nos permitirão executar blocos de código diferentes com base nas decisões que aprendemos a fazer com os operadores lógicos e de comparação. Prepare-se para tornar seus programas ainda mais inteligentes!

---
