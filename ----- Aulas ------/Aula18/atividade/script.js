// Seleção dos elementos do DOM
const cepInput = document.getElementById("cep");
const logradouroInput = document.querySelector("#logradouro");
const bairroInput = document.querySelector("#bairro");
const localidadeInput = document.querySelector("#localidade");
const ufInput = document.querySelector("#uf");
const mensagemDiv = document.querySelector("#mensagem");

// Função utilitária para limpar os campos do formulário
function limparCampos() {
  logradouroInput.value = "";
  bairroInput.value = "";
  localidadeInput.value = "";
  ufInput.value = "";
}

// Função assíncrona de consulta ao ViaCEP
async function buscarEndereco(cep) {
  // 1. Sanitização: remove caracteres não numéricos (ex: "01001-000" -> "01001000")
  const cepLimpo = cep.replace(/\D/g, "");

  // 2. Validação prévia de formato (deve conter exatamente 8 dígitos)
  if (cepLimpo.length !== 8) {
    mensagemDiv.textContent = "CEP inválido! Digite exatamente 8 números.";
    limparCampos();
    return;
  }
  mensagemDiv.innerHTML = `
    <div class="spinner-border spinner-border-sm text-primary" role="status">
      <span class="visually-hidden">Carregando...</span>
    </div> Buscando endereço...`;

  try {
    
    

   

 
      
    }
  } catch (erro) {
    // Captura falhas de conexão de rede ou exceções disparadas pelo throw Error
    console.error("Falha na consulta:", erro);
    mensagemDiv.textContent = "Erro ao se conectar com o serviço ViaCEP.";
    limparCampos();
  }
}

// Evento acionado quando o campo do CEP perde o foco (blur)
cepInput.addEventListener("blur", (e) => {
  const valorDigitado = e.target.value;
  if (valorDigitado.trim() !== "") {
    buscarEndereco(valorDigitado);
  }
});

cepInput.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, ""); // Mantém apenas números
  if (valor.length > 5) {
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2"); // Insere o hífen após os 5 primeiros dígitos
  }
  e.target.value = valor;
});

const historicoCEPs = [];



function renderizarHistorico() {
  let historicoContainer = document.querySelector('#historico-container');
  if (!historicoContainer) {
    historicoContainer = document.createElement('ul');
    historicoContainer.id = 'historico-container';
    historicoContainer.className = 'list-group mt-3';
    
  }
  
  historicoContainer.innerHTML = historicoCEPs
    .map(item => `<li class="list-group-item"><strong>${item.cep}</strong> - ${item.localidade}/${item.uf}</li>`)
    .join('');
}