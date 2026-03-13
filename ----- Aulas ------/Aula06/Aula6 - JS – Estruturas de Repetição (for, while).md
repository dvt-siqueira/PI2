# 📘 Programação para Internet II
## 🗓️ Aula 06 — JavaScript: Estruturas de Repetição (for, while)

---

# 🎯 Objetivo da Aula

- Compreender o conceito de laços de repetição (loops).
- Utilizar a estrutura `while` para repetições baseadas em uma condição.
- Aprender a estrutura `for` para repetições com contagem definida.
- Entender a diferença entre `while`, `do...while` e `for`.
- Aplicar estruturas de repetição para automatizar tarefas e processar dados.

---

# 🧠 Revisão: Fluxo de Execução

Na aula anterior, vimos como o `if` e o `switch` nos permitem **desviar** o caminho do código. Hoje, veremos como fazer o código **voltar** e executar o mesmo bloco várias vezes. 

Imagine que você precise imprimir os números de 1 a 100. Sem as estruturas de repetição, você teria que escrever 100 linhas de `console.log`. Com loops, fazemos isso em apenas 3 linhas!

---

# 🔄 O que são Estruturas de Repetição?

Também chamadas de **loops** ou **laços**, elas permitem que um bloco de código seja executado repetidamente enquanto uma condição for verdadeira.

Todo loop precisa de três elementos principais para não rodar infinitamente:
1.  **Inicialização:** Onde começamos (ex: `let i = 0`).
2.  **Condição de Parada:** Até quando repetimos (ex: `i < 10`).
3.  **Atualização (Incremento):** O passo que nos aproxima do fim (ex: `i++`).

---

# 1️⃣ A Estrutura `while` (Enquanto)

O `while` é ideal quando não sabemos exatamente quantas vezes o código será executado, mas sabemos a condição que deve ser mantida.

**Sintaxe:**
```javascript
while (condicao) {
    // código a ser repetido
}
```

**Exemplo:**
```javascript
let contador = 1;

while (contador <= 5) {
    console.log("Contagem:", contador);
    contador++; // Importante: sem isso, o loop é infinito!
}
```

---

# 2️⃣ A Estrutura `do...while` (Faça... Enquanto)

Diferente do `while`, o `do...while` garante que o código seja executado **pelo menos uma vez**, pois a condição só é verificada ao final.

```javascript
let i = 10;

do {
    console.log("Isso será impresso uma vez, mesmo que i não seja < 5");
    i++;
} while (i < 5);
```

---

# 3️⃣ A Estrutura `for` (Para)

O `for` é a estrutura mais utilizada quando sabemos previamente o número de repetições. Ele agrupa a inicialização, a condição e o incremento em uma única linha.

**Sintaxe:**
```javascript
for (inicializacao; condicao; incremento) {
    // código a ser repetido
}
```

**Exemplo:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}
```

---

# 4️⃣ Controle de Loops: `break` e `continue`

- **`break`**: Interrompe o loop imediatamente.
- **`continue`**: Pula a iteração atual e vai para a próxima.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // Pula o número 5
    if (i === 8) break;    // Para o loop no 8
    console.log(i);
}
```

---

# 🧩 Desafios Práticos para os Alunos

Tente resolver os exercícios abaixo utilizando `for` ou `while`.

1.  **Tabuada Dinâmica:**
    *   Crie uma variável `numero`.
    *   Use um loop `for` para imprimir a tabuada desse número (de 1 a 10) no formato: "5 x 1 = 5".

2.  **Contagem Regressiva:**
    *   Use um loop para imprimir uma contagem regressiva de 10 até 0.
    *   Ao final, imprima "FOGO! 🚀".

3.  **Soma de Números:**
    *   Crie uma variável `soma` começando em 0.
    *   Use um loop para somar todos os números de 1 a 50.
    *   Ao final, exiba o resultado total.

4.  **Apenas Pares:**
    *   Faça um loop que percorra de 1 a 20 e imprima apenas os números que são pares.

5.  **Simulador de Senha (Desafio Extra):**
    *   Crie uma variável `senhaCorreta = "1234"`.
    *   Crie uma variável `tentativa`.
    *   Simule (usando `while` ou `prompt` se estiver no navegador) um sistema que pede a senha até que o usuário acerte.

---

# 📌 Próxima Aula

> Na próxima aula, teremos uma **Atividade Prática de Lógica**, onde aplicaremos tudo o que aprendemos sobre variáveis, operadores, decisões e repetições em problemas mais complexos! Preparem-se!
