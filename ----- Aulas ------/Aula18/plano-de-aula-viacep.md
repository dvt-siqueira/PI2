# 📚 Plano de Aula: Consumo Assíncrono de APIs com ViaCEP, JavaScript e Bootstrap

---

## 🎯 Objetivos de Aprendizagem
Ao final desta aula, o aluno será capaz de:
1. Compreender o conceito de **API REST**, protocolo HTTP (método GET, status codes) e o formato de dados **JSON**.
2. Entender o funcionamento da assincronicidade no navegador, **Promises** e o papel da **Fetch API**.
3. Escrever código limpo utilizando a sintaxe **`async/await`** e aplicar tratamento defensivo de erros (`try...catch` e validações de negócios).
4. Construir uma interface gráfica responsiva com o **Bootstrap 5** e atualizar seus elementos dinamicamente via DOM.

---

## 🗺️ Estrutura da Aula

```
┌─────────────────────────────────────────────────────────────┐
│ Módulo 1: Fundamentos de API REST e Fetch API               │
│   ├─ O que é uma API e Padrão REST (HTTP, Endpoints, JSON)  │
│   └─ Assincronicidade, Promises e a Fetch API               │
├─────────────────────────────────────────────────────────────┤
│ Módulo 2: Interface Responsiva com Bootstrap                │
│   └─ Construção do Formulário de Endereço                   │
├─────────────────────────────────────────────────────────────┤
│ Módulo 3: Prática JS com Async/Await e ViaCEP               │
│   ├─ Sanitização do CEP (RegEx) e Chamada HTTP              │
│   └─ Tratamento de Erros (HTTP vs Rede) e Manipulação do DOM│
├─────────────────────────────────────────────────────────────┤
│ Módulo 4: Lista de Exercícios Práticos                      │
|_____________________________________________________________|

```

---

## Módulo 1: Conceito de API REST, Promises e Fetch API 

### 1.1 O que é uma API e o Padrão REST?
* **API (*Application Programming Interface*):** É uma interface que permite a comunicação e a troca de dados entre diferentes aplicações de forma padronizada, sem expor regras internas ou bancos de dados subjacentes.
  * *Analogia:* O cliente (front-end) faz o pedido, a API (garçom) leva o pedido até o servidor (cozinha) e traz a resposta pronta de volta.
* **O que é uma API REST / RESTful?**
  * É um estilo arquitetural para web services que utiliza o protocolo **HTTP**.
  * **Endpoints (URLs):** Os caminhos onde os recursos estão localizados (ex: `https://viacep.com.br/ws/{CEP}/json/`).
  * **Verbos/Métodos HTTP:** Indicam a ação a ser executada no servidor:
    * `GET`: Solicita e recupera dados (usado no ViaCEP).
    * `POST`: Envia novos dados para processamento/criação.
    * `PUT`: Atualiza dados existentes.
    * `DELETE`: Remove dados do servidor.
  * **Formato JSON (*JavaScript Object Notation*):** Estrutura leve de chave-valor amplamente utilizada na transferência de dados em APIs modernas.

### 1.2 Assincronicidade, Promises e a Fetch API
* **Por que requisições de rede são assíncronas?** A comunicação pela rede depende de latência e velocidade de conexão. Como o JavaScript executa em uma única thread no navegador (*single-threaded*), requisições síncronas congelariam a interface do usuário até a chegada da resposta.
* **Promises (Promessas):** Objeto JavaScript que representa a eventual conclusão (ou falha) de uma operação assíncrona.
  * Estados de uma Promise:
    1. `pending` (pendente): Estado inicial, aguardando a conclusão da operação.
    2. `fulfilled` / `resolved` (resolvida): Operação concluída com sucesso.
    3. `rejected` (rejeitada): Ocorreu uma falha na operação (ex: erro de conexão).
* **A Fetch API (`fetch`):**
  * Interface nativa do navegador para requisições HTTP baseadas em Promises.
  * Ao chamar `fetch(url)`, o navegador dispara a requisição em segundo plano e retorna imediatamente uma Promise no estado `pending`.

---

### ✏️ Exercícios de Fixação — Módulo 1

1. **(Conceitual)** Explique o que caracteriza o padrão REST e qual a função do verbo HTTP `GET` no consumo da API do ViaCEP.
2. **(Múltipla Escolha)** O que a função `fetch()` do JavaScript retorna no momento exato em que é executada?
   * a) O objeto JSON com o endereço retornado.
   * b) Uma Promise no estado pendente (`pending`).
   * c) Uma string HTML com os dados formatados.
   * d) Um número inteiro indicando o código de status 200.
3. **(Assincronicidade)** Por que as requisições HTTP em aplicações web precisam ser executadas de forma assíncrona?

---

## Módulo 2: Construindo a Interface Responsiva com Bootstrap

Neste módulo, utilizaremos o **Bootstrap 5** para estruturar um formulário de cadastro de endereço limpo, moderno e responsivo.

### Código HTML (`index.html`):

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consulta de Endereço - ViaCEP</title>
  <!-- CSS do Bootstrap 5 via CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

  <div class="container mt-5">
    <div class="card shadow p-4">
      <h3 class="card-title text-center mb-4">Consulta de Endereço via CEP</h3>
      
      <form id="form-endereco">
        <div class="row g-3">
          <!-- Campo CEP -->
          <div class="col-md-4">
            <label for="cep" class="form-label">CEP</label>
            <input type="text" class="form-control" id="cep" placeholder="00000-000" maxlength="9">
            <div id="mensagem" class="form-text text-danger mt-1"></div>
          </div>

          <!-- Campo Logradouro -->
          <div class="col-md-8">
            <label for="logradouro" class="form-label">Logradouro / Rua</label>
            <input type="text" class="form-control" id="logradouro" readonly>
          </div>

          <!-- Campo Bairro -->
          <div class="col-md-5">
            <label for="bairro" class="form-label">Bairro</label>
            <input type="text" class="form-control" id="bairro" readonly>
          </div>

          <!-- Campo Cidade -->
          <div class="col-md-5">
            <label for="localidade" class="form-label">Cidade</label>
            <input type="text" class="form-control" id="localidade" readonly>
          </div>

          <!-- Campo UF -->
          <div class="col-md-2">
            <label for="uf" class="form-label">UF</label>
            <input type="text" class="form-control" id="uf" readonly>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- JS do Bootstrap e Script da Aplicação -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

---

### ✏️ Exercícios de Fixação — Módulo 2

1. **(Bootstrap Grid)** Explique como a linha `<div class="row g-3">` combinada com as classes `col-md-4` e `col-md-8` posiciona os campos CEP e Logradouro em telas de tamanho médio ou superior.
2. **(Acessibilidade e UX)** Qual a finalidade técnica e de usabilidade de aplicar o atributo `readonly` aos campos de endereço preenchidos pela API?
3. **(Prática HTML/Bootstrap)** Adicione mais dois campos ao formulário HTML: um campo de **"Número"** (`col-md-3`) e um campo de **"Complemento"** (`col-md-9`).

---

## Módulo 3: Lógica JavaScript com `async/await`, `fetch` e Tratamento de Erros 

Conectaremos o formulário Bootstrap à API do ViaCEP utilizando JavaScript moderno.

### Conceitos Críticos da Implementação:
1. **`async / await`:** Permite escrever chamadas assíncronas de forma síncrona e sequencial.
2. **Tratamento de Erros HTTP vs Erros de Rede:** A `fetch()` só rejeita a Promise em caso de falha de conexão de rede. Respostas HTTP com erro (como 404 ou 500) retornam com sucesso pela rede. Por isso, validamos explicitamente `if (!resposta.ok)`.
3. **Verificação de Regras de Negócio do ViaCEP:** Se o CEP informado for válido em termos de formato mas não existir no banco dos Correios, o ViaCEP retorna HTTP 200 contendo o objeto `{ "erro": true }`.



---

### ✏️ Exercícios de Fixação — Módulo 3

1. **(Análise de Código)** Por que existem duas chamadas com a palavra `await` dentro da função `buscarEndereco()`? O que cada uma aguarda especificamente?
2. **(Tratamento de Erros)** Explique a diferença entre um erro capturado pelo bloco `catch` e o teste condicional `if (dados.erro)` no contexto do ViaCEP.
3. **(Manipulação de Strings e RegEx)** O que faz a expressão `cep.replace(/\D/g, '')` e qual o resultado obtido se o valor passado for `"01001-000"`?

---

## Módulo 4: Lista de Exercícios Complementares (Projetos Práticos)

1. **(Exercício 1 — Indicador Visual UX):** Adicione um indicador de carregamento (*Spinner* do Bootstrap) na tela enquanto a função `buscarEndereco` aguarda a resposta do servidor.
2. **(Exercício 2 — Formatação de CEP em Tempo Real):** Crie uma função associada ao evento `input` do campo CEP para formatar automaticamente a máscara `00000-000` enquanto o usuário digita.
3. **(Exercício 3 — Navegação Inteligente DOM):** Após o preenchimento bem-sucedido dos dados do CEP, direcione automaticamente o foco do cursor para o campo "Número" usando a função `.focus()`.
4. **(Exercício 4 — Histórico de Consultas):** Crie um histórico visual com os últimos 3 CEPs pesquisados com sucesso, utilizando o componente `list-group` do Bootstrap.

---
