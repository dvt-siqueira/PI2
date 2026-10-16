const cepInput = document.getElementById("cep");

async function buscarEndereco(cep){
    cepLimpo= cep.replace(/\D/g, '');
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    if (!resposta.ok) {
        throw new Error(`Erro de servidor. Status: ${resposta.status}`);
    }
    const dados = await resposta.json();
    console.log(dados);
}

cepInput.addEventListener("blur", (e) => {
    const valorDigitado = e.target.value;
    if(valorDigitado.trim() !== "") {
        buscarEndereco(valorDigitado);
    }
});