// Buscando o arquivo através da URL do Live Server
fetch('herois.json')
  .then(resposta => resposta.json()) // Converte o texto JSON em Objeto JS
  .then(dados => {
    console.log("Dados recebidos:", dados);
    
    // Nível Intermediário: Manipulação do DOM (Aula 08)
    const titulo = document.querySelector("h1");
    titulo.textContent = dados.squadName;
    
    // Nível Avançado: Criando elementos dinâmicos (Aula 09)
    const secao = document.querySelector("section");
    dados.members.forEach(heroi => {
      const card = document.createElement("article");
      card.classList.add(`${heroi.name}`);
      card.innerHTML = `<h2>${heroi.name}</h2><p>Idade: ${heroi.age}</p>`;
      secao.appendChild(card);
    });
  })
  .catch(erro => console.error("Erro ao carregar JSON:", erro));


//Exemplo de Uso do JSON.parse()
  // Uma string que simula o que veio do arquivo .json
const jsonString = '{"nome": "Davi", "idade": 30}';

// Convertendo a string em um objeto real
const heroiObjeto = JSON.parse(jsonString);

// Agora podemos usar as propriedades normalmente (Aula 08)
console.log(heroiObjeto.nome); // Saída: Molecule Man