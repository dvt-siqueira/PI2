console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.7));
console.log(Math.ceil(9.7));
console.log(Math.floor(550.0000009));
console.log(Math.trunc(5516.0000009));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.min(10, 5, 8, 3, 1));
console.log(Math.max(10, 5, 8, 3, 1));
console.log(Math.abs(-56));

let sorteio = Math.floor(Math.random() * 10) + 1;
console.log(sorteio);

const inputNum = document.getElementById("num");
const spanRes = document.getElementById("resultado");

function calcular(operacao) {
  let valor = parseFloat(inputNum.value);
  if (isNaN(valor)) {
    alert("Digite um numero");
    return;
  }
  let res = 0;
  switch (operacao) {
    case "round":
      res = Math.round(valor);
      break;
    case "ceil":
      res = Math.ceil(valor);
      break;
    case "floor":
      res = Math.floor(valor);
      break;
    case "sqrt":
      res = Math.sqrt(valor);
      break;
    case "abs":
      res = Math.abs(valor);
      break;
  }
  spanRes.textContent = res;
}

function sortear(){
    let numeroSorteado = (Math.random()*100);
    inputNum .value = numeroSorteado;
    spanRes.textContent =  numeroSorteado;
}