# 📘 Programação para Internet II
## 🗓️ Aula 07 — Atividade Prática de Lógica: Revisando Conceitos

---

# 🎯 Objetivo da Aula

- Consolidar os conhecimentos de **Variáveis e Tipos de Dados**.
- Praticar o uso de **Operadores Aritméticos e Lógicos**.
- Aplicar **Estruturas de Decisão** (`if`, `else`, `switch`) em problemas reais.
- Dominar as **Estruturas de Repetição** (`for`, `while`) para automação de tarefas.
- Desenvolver o raciocínio lógico através da resolução de algoritmos integrados.

---

# 🧠 Revisão: O que já vimos até aqui?

Nas últimas aulas, construímos a base da nossa jornada em JavaScript:
1.  **Variáveis (`let`, `const`):** Como guardar informações.
2.  **Tipos de Dados:** Strings, Numbers, Booleans e Objetos.
3.  **Operadores:** Fazer cálculos (`+`, `-`, `*`, `/`, `%`) e comparações (`==`, `===`, `>`, `<`, `&&`, `||`).
4.  **Condicionais:** Tomar decisões com `if/else` e organizar escolhas com `switch`.
5.  **Loops:** Repetir tarefas com `for` e `while`.

Hoje, vamos "misturar" tudo isso em uma série de desafios práticos! 🚀

---

# 🛣️ O que faremos hoje?

Esta aula é 100% prática. O objetivo é que você tente resolver cada desafio sozinho antes de consultar a solução. Lembre-se: **programação se aprende praticando!**

---

# 🧩 Desafios Práticos

1.  **Calculadora de Média e Frequência:**
    *   Crie três variáveis: `nota1`, `nota2` e `frequencia` (de 0 a 100).
    *   Calcule a média das notas.
    *   **Regra para Aprovação:** O aluno precisa de média maior ou igual a 7 **E** frequência maior ou igual a 75.
    *   Exiba: "Aprovado", "Recuperação" (se a média for entre 5 e 7) ou "Reprovado" (se média abaixo de 5 ou frequência abaixo de 75).

2.  **Menu de Restaurante (Switch Case):**
    *   Crie uma variável `codigoPedido`.
    *   Use um `switch` para exibir o nome e o preço do prato:
        *   `1` -> "Hambúrguer - R$ 15,00"
        *   `2` -> "Batata Frita - R$ 10,00"
        *   `3` -> "Refrigerante - R$ 5,00"
        *   `4` -> "Combo (Todos os itens) - R$ 25,00"
        *   Qualquer outro -> "Código inválido"

3.  **O Desafio do "FizzBuzz" (Loop + Condicional):**
    *   Faça um loop `for` que conte de 1 a 30.
    *   Para cada número, verifique:
        *   Se o número for divisível por 3, imprima "Fizz".
        *   Se o número for divisível por 5, imprima "Buzz".
        *   Se for divisível por 3 **E** 5 ao mesmo tempo, imprima "FizzBuzz".
        *   Se não for nenhum desses, imprima apenas o número.

4.  **Gerador de Quadrados (Loop Aninhado):**
    *   Crie uma variável `tamanho`.
    *   Use loops para desenhar um quadrado de asteriscos (`*`) no console com esse tamanho.
    *   *Exemplo (tamanho 3):*
        ```
        ***
        ***
        ***
        ```

5.  **Jogo de Adivinhação (While + Break):**
    *   Defina um `numeroSecreto`.
    *   Crie um loop que simule tentativas de um usuário.
    *   O loop deve parar apenas quando o usuário "acertar" o número secreto ou atingir 5 tentativas.
    *   Dica: Use um contador para as tentativas.

---

# ✅ Soluções dos Desafios (Gabarito)

> **⚠️ Atenção:** Tente resolver sozinho antes de olhar aqui!

### Solução 1: Média e Frequência
```javascript
let nota1 = 8, nota2 = 6, frequencia = 80;
let media = (nota1 + nota2) / 2;

if (media >= 7 && frequencia >= 75) {
    console.log(`Média ${media}: Aprovado!`);
} else if (media >= 5 && frequencia >= 75) {
    console.log(`Média ${media}: Recuperação.`);
} else {
    console.log("Reprovado.");
}
```

### Solução 2: Menu com Switch
```javascript
let codigoPedido = 4;

switch (codigoPedido) {
    case 1: console.log("Hambúrguer - R$ 15,00"); break;
    case 2: console.log("Batata Frita - R$ 10,00"); break;
    case 3: console.log("Refrigerante - R$ 5,00"); break;
    case 4: console.log("Combo - R$ 25,00"); break;
    default: console.log("Código inválido");
}
```

### Solução 3: FizzBuzz
```javascript
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

### Solução 4: Quadrado de Asteriscos
```javascript
let tamanho = 4;

for (let i = 0; i < tamanho; i++) {
    let linha = "";
    for (let j = 0; j < tamanho; j++) {
        linha += "*";
    }
    console.log(linha);
}
```

### Solução 5: Jogo de Adivinhação
```javascript
const numeroSecreto = 7;
let tentativas = 1;
let palpite;

// Simulando palpites em um loop
while (tentativas <= 5) {
    palpite = Math.floor(Math.random() * 10) + 1; // Gera um palpite aleatório entre 1 e 10
    console.log(`Tentativa ${tentativas}: O sistema chutou ${palpite}`);

    if (palpite === numeroSecreto) {
        console.log("🎉 Parabéns! Você acertou!");
        break; // Sai do loop
    }
    
    if (tentativas === 5) {
        console.log("❌ Fim de jogo! Você não conseguiu.");
    }
    tentativas++;
}
```

---

# 📌 Próxima Aula

> Na próxima aula, iniciaremos um novo módulo: **Funções em JavaScript**. Vamos aprender como organizar nosso código em blocos reutilizáveis e eficientes! Até lá!
