// --- EXEMPLO 1: if / else ---
let idade = 18;

console.log("--- Exemplo 1: Verificação de Idade ---");
if (idade >= 18) {
    console.log("Pode entrar na festa!");
} else {
    console.log("Entrada proibida para menores.");
}

// --- EXEMPLO 2: if / else if / else ---
let nota = 8.5;

console.log("\n--- Exemplo 2: Sistema de Notas ---");
if (nota >= 9) {
    console.log("Conceito: A");
} else if (nota >= 7) {
    console.log("Conceito: B");
} else {
    console.log("Conceito: C");
}

// --- EXEMPLO 3: switch ---
let dia = 2;

console.log("\n--- Exemplo 3: Switch Case ---");
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    default:
        console.log("Outro dia");
}

// --- EXEMPLO 4: Operador Ternário ---
let saldo = 100;
let mensagem = (saldo > 0) ? "Saldo Positivo" : "Saldo Negativo";
console.log("\n--- Exemplo 4: Ternário ---");
console.log(mensagem);
