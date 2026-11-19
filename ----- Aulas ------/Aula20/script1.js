const form = document.querySelector('#formCadastro');
const nomeInput = document.querySelector('#nome');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const valorNome = nomeInput.value.trim();
    if (valorNome===''){
        nomeInput.classList.remove('is-valid');
        nomeInput.classList.add('is-invalid');
        console.log('Erro: Nome é Obrigatorio');
    }else{
        nomeInput.classList.remove('is-invalid');
        nomeInput.classList.add('is-valid');
        console.log('Sucesso: Nome correto');
    }

})