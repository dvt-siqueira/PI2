const inputNome = document.getElementById('nome_produto');
const selectCat= document.getElementById('categoria-produto');

const previaNome = document.getElementById('previa-nome');
const previaCat = document.getElementById('previa-categoria');
const btnLimpar = document.getElementById('btn-limpar');

inputNome.addEventListener('input', () => {
    previaNome.textContent = inputNome.value;

    if(inputNome.value.length > 10){
        previaNome.style.color = 'red';
    }
    else{
        previaNome.style.color = 'black';
    }
});
selectCat.addEventListener('change', () => { 
    previaCat.textContent = selectCat.value;
    document.getElementById("card-previa").classList.add("destaque");
});

btnLimpar.addEventListener('click', () => {
    inputNome.value = '';
    selectCat.value = 'Sem Categoria';
    previaNome.textContent = 'Nome do Produto';
    previaNome.style.color = '#007bff';
    previaCat.textContent = 'Nenhuma';
    document.getElementById("card-previa").classList.remove("destaque");
});