// Importando o framework Express
const express = require('express');

// Inicializando a aplicação Express
const app = express();

// Definindo a porta da aplicação
const PORT = 3000;

// Rota principal (HTTP GET na raiz '/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicializando o servidor web Express
app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
