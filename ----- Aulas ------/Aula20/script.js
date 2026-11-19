// Seleção dos elementos
const form = document.querySelector('#formCadastro');
const nomeInput = document.querySelector('#nome');

// Funções utilitárias de feedback visual (Bootstrap)
function mostrarErro(input, mensagemId, textoMensagem) {
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
  const divErro = document.querySelector(`#${mensagemId}`);
  if (textoMensagem) {
    divErro.textContent = textoMensagem;
  }
}

function mostrarSucesso(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

// Função isolada para validar o Nome
function validarNome() {
  const valor = nomeInput.value.trim();
  if (valor === '') {
    mostrarErro(nomeInput, 'erroNome', 'O campo Nome é obrigatório.');
    return false;
  } else if (valor.length < 3) {
    mostrarErro(nomeInput, 'erroNome', 'O nome deve ter no mínimo 3 caracteres.');
    return false;
  }
  mostrarSucesso(nomeInput);
  return true;
}

// Interceptação do submit usando a função isolada
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nomeValido = validarNome();
  
  if (nomeValido) {
    console.log('Formulário pronto!');
  }
});
