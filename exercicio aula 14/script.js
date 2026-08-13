fetch('herois.json')
.then(resposta => resposta.json())
.then(dados => {
    console.log("Dados recebidos:", dados);

    const titutulo = document.querySelector('h1');
    titutulo.textContent = dados.squadName;
}); 