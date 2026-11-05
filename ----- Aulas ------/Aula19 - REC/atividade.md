# 🚀 Atividade Prática de Recuperação: Pokédex Interativa com PokéAPI

### 📋 Enunciado para os Alunos

**Objetivo:** Criar um buscador de Pokémon em **HTML5, Bootstrap 5 e JavaScript (`async/await` / `fetch`)**, consumindo a **PokéAPI** (`[https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/){nome_ou_id}`). Ao buscar um Pokémon válido, a aplicação deve preencher dinamicamente um Card do Bootstrap com a foto e os dados do Pokémon.

---

### 🛠️ Requisitos do Projeto

#### 1. Interface Gráfica (HTML5 + Bootstrap 5)

* Um formulário de busca centralizado com campo de texto (`#pokemon-input`) e botão "Buscar" (`.btn-primary`).
* Um **Card do Bootstrap** (`.card`) que inicia oculto (`.d-none`) e só é exibido após uma busca bem-sucedida.
* O Card deve conter:
* Imagem frontal do Pokémon (`.card-img-top`).
* Nome do Pokémon em destaque (`.card-title`).
* Badges do Bootstrap (`.badge`) para indicar os tipos (ex: Fire, Water, Grass).
* Lista de estatísticas (HP, Ataque, Defesa) formatada com `.list-group`.


* Uma `<div>` de mensagem/status abaixo da busca para feedback visual (alertas do Bootstrap ou texto colorido).

#### 2. Lógica JavaScript (`async/await` e DOM)

* **Higienização do Input:** Converter o texto para minúsculas com `.toLowerCase().trim()` (a PokéAPI exige nomes em caixa baixa).
* **Validação:** Verificar se o campo não está vazio antes de disparar o `fetch`.
* **Consumo Assíncrono:** Utilizar `async/await` para buscar os dados em `[https://pokeapi.co/api/v2/pokemon/$](https://pokeapi.co/api/v2/pokemon/$){termo}`.
* **Tratamento de Status HTTP:** Se a resposta for 404 (`!resposta.ok`), exibir a mensagem *"Pokémon não encontrado!"* e manter o Card oculto.
* **Tratamento de Erros de Rede:** Usar `try...catch` para capturar falhas de conexão.
* **Manipulação do DOM:** Atualizar a `src` da imagem, o texto do nome, os tipos e remover a classe `.d-none` do Card ao encontrar o Pokémon.

---

### 📊 Rubrica de Avaliação (10,0 Pontos)

| Critério | Descrição | Valor |
| --- | --- | --- |
| **Interface & Componentes (Bootstrap)** | Uso correto de formulário, Card, Badges, List Group e classe `.d-none`. | **2,5** |
| **Consumo da PokéAPI (`fetch` / `async/await`)** | Requisição assíncrona correta ao endpoint da PokéAPI. | **2,5** |
| **Manipulação do DOM & Sanitização** | Formatação do texto (`.toLowerCase()`) e atribuição dinâmica de imagem/dados no Card. | **2,0** |
| **Tratamento de Erros (`try...catch` / 404)** | Exibição de aviso para Pokémon inexistente (HTTP 404) ou erro de rede. | **2,0** |
| **UX & Qualidade do Código** | Limpeza do campo após busca, mensagens claras e código organizado. | **1,0** |
