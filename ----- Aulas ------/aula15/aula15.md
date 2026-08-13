
Esta atividade utiliza o **Live Server** para simular o ambiente de rede, permitindo que os alunos consumam um arquivo `.json` local como se fosse uma API.

---

### **Aula 1: Estruturação e Listagem Dinâmica**
**Objetivo:** Consumir um arquivo JSON e renderizar uma lista de cards no HTML usando manipulação do DOM.

#### **Exercício 1: O Banco de Dados Local**
Criem um arquivo `produtos.json`. Obs.: Regra de **aspas duplas** obrigatórias para chaves e valores.
```json
[
  { "id": 1, "nome": "Teclado Mecânico", "categoria": "Eletrônicos", "preco": 250 },
  { "id": 2, "nome": "Monitor 4K", "categoria": "Eletrônicos", "preco": 1200 },
  { "id": 3, "nome": "Cadeira Gamer", "categoria": "Móveis", "preco": 800 },
  { "id": 4, "nome": "Mouse Óptico", "categoria": "Eletrônicos", "preco": 150 }
]
```

#### **Exercício 2: O "Esqueleto" da Vitrine**
No `index.html`, os alunos devem criar um campo de busca e um contêiner vazio onde os dados serão injetados.
```html
<input type="text" id="filtro-nome" placeholder="Buscar produto...">
<section id="vitrine-produtos"></section>
```

#### **Exercício 3: Renderização com Fetch e Loop**
No `script.js`, os alunos devem usar o `fetch()` para buscar o arquivo. Ao receber os dados, devem usar um loop (`forEach`) para criar elementos `article` ou `div` dinamicamente para cada item.
*   **Ação:** Usar `document.createElement()` e `appendChild()` para montar a lista na tela.

---

### **Aula 2: Interatividade, Filtros e Estilo**
**Objetivo:** Implementar a lógica de busca em tempo real e aplicar estilos dinâmicos baseados nos dados.

#### **Exercício 4: Filtro de Busca (Evento de Input)**
Os alunos devem adicionar um "escutador de evento" (`addEventListener`) ao campo de busca.
*   **Lógica:** O evento deve ser o `input`, que dispara a cada tecla digitada.
*   **Desafio:** Dentro do evento, eles devem filtrar o array original e limpar a seção (`innerHTML = ""`) antes de renderizar apenas os produtos que contêm o texto digitado.

#### **Exercício 5: Estilização Condicional (Destaque de Preço)**
Utilizando o conceito de **Manipulação de Classes** da Aula 09, peça para criarem uma regra no CSS chamada `.premium` (ex: borda dourada ou fundo diferente).
*   **Ação JS:** No momento da criação do card, se o preço do produto for maior que 500, o JavaScript deve adicionar a classe usando `classList.add("premium")`.

#### **Exercício 6: Conversão de Dados (Stringify)**
Para consolidar o conhecimento de envio de dados, adicione um botão "Logar Dados" em cada card.
*   **Tarefa:** Ao clicar, o objeto daquele produto específico deve ser convertido em string via `JSON.stringify()` e exibido no console, simulando o preparo para um envio ao servidor.

---

### **Resumo de Ferramentas Utilizadas:**
*   **JSON.parse/fetch:** Para ler os dados do arquivo local através do Live Server.
*   **Input Event:** Para capturar a busca do usuário em tempo real.
*   **Array forEach:** Para percorrer a lista de produtos e gerar a interface.
*   **ClassList:** Para aplicar estilos dinâmicos baseados no valor do produto.