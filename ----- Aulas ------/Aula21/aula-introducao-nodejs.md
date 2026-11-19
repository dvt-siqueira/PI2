# 📘 Programação para Internet II
## 🗓️ Aula 01 — Introdução ao Node.js: Fundamentos e Servidor HTTP

---

### 🎯 Objetivo da Aula
* Entender o que é a plataforma Node.js e sua utilidade no desenvolvimento server-side (back-end).
* Compreender o funcionamento do motor V8 e do modelo de E/S (I/O) não bloqueante e assíncrono.
* Diferenciar os sistemas de módulos CommonJS (`require`) e ECMAScript Modules (`import`).
* **Evolução do Projeto:** Criar um **Servidor Web e API em Tempo Real**, evoluindo de um servidor HTTP nativo para uma aplicação estruturada com o framework **Express.js**.

---

### 💡 Conceito: O que é o Node.js?

Nas aulas de JavaScript front-end, executamos scripts diretamente no navegador. O Node.js expande essa possibilidade para o lado do servidor:

1. **Execução Fora do Navegador:** O Node.js é um ambiente de execução (runtime) JavaScript open-source e cross-platform que roda o motor V8 (o mesmo motor de alta performance do Google Chrome) fora do browser.
2. **Modelo Não Bloqueante (Non-Blocking I/O):** Ao realizar operações de entrada e saída (como leitura de arquivos, consultas a banco de dados ou requisições de rede), o Node.js não trava a execução da thread principal enquanto aguarda a resposta.
3. **Processo Único e Concorrência:** A aplicação opera em um único processo (single process) sem criar uma nova thread para cada requisição. Isso permite lidar com milhares de conexões concorrentes em um único servidor com alta eficiência de recursos.
4. **Unificação da Linguagem:** Permite que desenvolvedores que já escrevem JavaScript no cliente (front-end) utilizem a mesma linguagem no lado do servidor (back-end).

---

### 🚀 Evoluindo a Aplicação (Passo a Passo)

Vamos construir uma aplicação web que recebe requisições no servidor e retorna respostas estruturadas ao cliente.

---

#### 1️⃣ Parte 1: Verificação do Ambiente e Fundamentos

Antes de iniciar a criação do servidor, é essencial validar a instalação do ambiente e os fundamentos da linguagem JavaScript.

##### Verificação da Versão no Terminal
No terminal de comando, execute:

```bash
node --version
```

##### Revisão de Fundamentos de JavaScript
O desenvolvimento em Node.js fundamenta-se no uso de variáveis (`let`, `const`), tipos de dados (`String`, `Number`, `Boolean`), estruturas de controle (`if-else`, `for`, `while`) e funções (como *arrow functions*).

Para rodar o exemplo crie um arquivo chamado script.js e rode -> `node script.js`
```javascript
// Exemplo de função usando sintaxe de arrow function
const saudacao = (nome) => {
  console.log(`Olá, ${nome}!`);
};

// Chamada da função
saudacao('Mundo');
```

> **PAUSA 1:** No Node.js o comando `console.log` exibe a saída diretamente no terminal de comando do sistema operacional, e não no Console de Desenvolvedor do navegador.

---

#### 2️⃣ Parte 2: O Servidor HTTP Nativo (O Esqueleto do Servidor)

O Node.js possui uma biblioteca padrão completa para comunicação em rede. O módulo nativo `http` (ou `node:http`) permite criar um servidor web básico sem a necessidade de bibliotecas externas.

```javascript
// Selecionando o módulo HTTP nativo do Node.js (Sintaxe CommonJS)
const http = require('http');

// Criando o servidor HTTP
const server = http.createServer((req, res) => {
  // Configurando o código de status HTTP (200 = Sucesso)
  res.statusCode = 200;

  // Definindo o cabeçalho de resposta (tipo de conteúdo texto puro)
  res.setHeader('Content-Type', 'text/plain');

  // Encerrando a resposta e enviando a mensagem ao cliente
  res.end('Olá, Mundo!\n');
});

// Definindo a porta de escuta do servidor
const PORT = 3000;

// Iniciando o servidor na porta configurada
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
```

> **PAUSA 2:** O método `createServer` recebe um callback com dois objetos fundamentais: `req` (`IncomingMessage`), contendo os dados da requisição do cliente, e `res` (`ServerResponse`), utilizado para devolver os dados e status de resposta ao cliente.

##### Variação com Módulos ECMAScript (ESM)
O Node.js permite a utilização dos padrões modernos de módulos do ECMAScript (`import`/`export`):

```javascript
// Sintaxe ECMAScript Modules (ESM)
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

---

#### 3️⃣ Parte 3: Gerenciamento de Pacotes com NPM e Framework Express.js

Para construir aplicações web mais complexas e APIs com rotas organizadas, utilizamos bibliotecas do ecossistema Node.js gerenciadas pelo **NPM (Node Package Manager)**.

##### Instalação do Express via Terminal
No terminal do projeto, instale o framework Express:

```bash
npm install express
```

##### Criando a Aplicação Web com Express.js
O **Express.js** é um framework web rápido, flexível e minimalista que simplifica a manipulação de rotas e requisições HTTP.

```javascript
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
```

> **PAUSA 3:** Explique que o Express abstrai a complexidade do módulo HTTP nativo, permitindo definir rotas de forma limpa como `app.get()`, facilitando o desenvolvimento de APIs RESTful e aplicações web escaláveis.

---

### 📌 Desafio (Tarefa de Casa)

Para aprimorar a nossa aplicação Node.js, os alunos devem:

1. **Verificação de Instalação:** Executar `node --version` no terminal e registrar a versão utilizada no projeto.
2. **Criação de Rota Adicional no Express:** Adicionar uma nova rota HTTP GET `/sobre` que responda com o texto `"Página Sobre a Aplicação Node.js"`.
3. **Desafio Master:** Criar uma rota HTTP GET `/api/status` no Express que defina o tipo de conteúdo como texto puro ou JSON e responda com a mensagem `"Servidor operacional na porta 3000"`, acompanhada da verificação do código de status 200 (OK).

---

