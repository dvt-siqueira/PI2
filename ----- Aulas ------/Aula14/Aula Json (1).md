Aqui está o roteiro da aula formatado em **Markdown (MD)**, focando na comparação direta entre as estruturas e no passo a passo prático utilizando o **Live Server**.

---

# 📘 Aula: Dominando JSON no JavaScript

### 1. Diferença Visual: Objeto JS vs. Texto JSON

No desenvolvimento web, é fundamental distinguir a estrutura que o JavaScript usa na memória daquela que usamos para enviar dados pela rede.

**Objeto JavaScript (Estrutura de Dados)**
```javascript
// Chaves não precisam de aspas e aceita aspas simples nos valores
const usuario = {
  id: 101,
  nome: 'John Doe',
  ativo: true
};
```

**JSON (Formato de Texto)**
```json
// Chaves E valores (strings) OBRIGATORIAMENTE com aspas duplas
{
  "id": 101,
  "nome": "John Doe",
  "ativo": true
}
```
*(Fontes:)*

---

### 2. O que é o JSON?
*   **Significado:** *JavaScript Object Notation*.
*   **Função:** É um formato de **texto** leve para armazenar e trocar informações entre sistemas (ex: servidor para navegador).
*   **Regras Estritas:** Não permite funções, não permite comentários e exige o uso de aspas duplas em todas as propriedades e strings.

---

### 3. Métodos de Conversão (A Ponte)
Para trabalhar com esses dados, usamos o objeto global `JSON` do navegador:

*   **`JSON.parse(texto)`**: Transforma um texto JSON recebido em um objeto JavaScript para que você possa acessar propriedades como `objeto.nome`.
*   **`JSON.stringify(objeto)`**: Transforma um objeto em texto para que ele possa ser enviado via internet ou salvo em arquivos.

---

### 4. Passo a Passo de Teste (Simulador com Live Server)

Como não utilizaremos Node.js, o **Live Server** servirá como nosso servidor local para hospedar o arquivo de dados.

#### **Passo 1: Criar o arquivo de dados**
Crie um arquivo na raiz do seu projeto chamado `herois.json`:
```json
{
  "squadName": "Super heróis",
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "powers": ["Radiação", "Teletransporte"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "powers": ["Super soco", "Reflexos"]
    }
  ]
}
```
Para finalizar o seu roteiro de aula, aqui está a estrutura do arquivo **`index.html`**. Ela foi projetada seguindo as **boas práticas de HTML semântico** apresentadas na sua Aula 01 e contém os seletores necessários para que o JavaScript de integração funcione corretamente.

---

### **📄 Arquivo: index.html**

Este arquivo serve como o "esqueleto" da aplicação, onde os dados do JSON serão injetados dinamicamente.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula JSON - Integração com Live Server</title>
    <!-- Conectando o CSS para estilizar os cards (Aula 01) -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <!-- Este título será alterado pelo JSON (ex: "Super heróis") -->
        <h1 id="titulo-pagina">Carregando dados...</h1>
    </header>

    <main class="container">
        <section id="area-herois">
            <!-- Os cards dos heróis criados no JS (Aula 09) aparecerão aqui -->
        </section>
    </main>

    <!-- Conectando o JavaScript ao final do body (Aula 01) -->
    <script src="script.js"></script>
</body>
</html>
```

---

### **🎨 Sugestão de CSS (style.css)**
Para que os alunos visualizem o resultado como "cards" (como visto na Aula 12), você pode fornecer este estilo básico:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #eeeeee; /* Cor sugerida na Aula 01 */
    text-align: center;
    padding: 20px;
}

.container {
    background-color: white;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2); /* Sombra da Aula 01 */
}

article {
    background: #f9f9f9;
    border-left: 5px solid #0055aa; /* Destaque lateral da Aula 08 */
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
}

h2 {
    color: #0055aa;
}
```

---

### **✅ Resumo do Fluxo da Aula para os Alunos**

1.  **Estrutura:** Criar o `index.html` com as tags de identificação (`id`).
2.  **Dados:** Criar o arquivo `herois.json` com as regras de aspas duplas.
3.  **Servidor:** Clicar em **"Go Live"** para simular o ambiente de rede.
4.  **Lógica:** OEscrever o `fetch()` no `script.js` para buscar o arquivo, transformar o texto em objeto com `.json()` (que executa o `JSON.parse` internamente) e usa o `DOM` para criar os elementos na tela.

Com isso, você fecha o ciclo: **Estrutura (HTML) + Aparência (CSS) + Dados (JSON) + Comportamento (JS)**.

#### **Passo 2: Ativar o Servidor**
1. Abra o arquivo `index.html`.
2. Clique no botão **"Go Live"** no rodapé do VS Code.
3. O navegador abrirá o site em um endereço como `http://127.0.0.1:5500`.

#### **Passo 3: Consumir os dados no `script.js`**
Use o comando `fetch` para buscar o arquivo. O navegador tratará o arquivo local como uma requisição de rede.

```javascript
// Buscando o arquivo através da URL do Live Server
fetch('herois.json')
  .then(resposta => resposta.json()) // Converte o texto JSON em Objeto JS
  .then(dados => {
    console.log("Dados recebidos:", dados);
    
  
    const titulo = document.querySelector("h1");
    titulo.textContent = dados.squadName;
    
    
    const secao = document.querySelector("section");
    dados.members.forEach(heroi => {
      const card = document.createElement("article");
      card.innerHTML = `<h2>${heroi.name}</h2><p>Idade: ${heroi.age}</p>`;
      secao.appendChild(card);
    });
  })
  .catch(erro => console.error("Erro ao carregar JSON:", erro));
```
*(Fontes:)*

---

### 5. Exercício de Fixação
1. **Erro Proposital:** Retire as aspas de uma chave no seu arquivo `.json` e veja o erro que aparece no console do navegador.
