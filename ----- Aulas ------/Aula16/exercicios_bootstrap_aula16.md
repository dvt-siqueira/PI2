

## 📐 Exercício 1: Grid Responsivo de Pokémons (Layout e Breakpoints)

**🎯 Objetivo:** Organizar uma lista de Pokémons em um grid que se adapte automaticamente ao tamanho da tela (Mobile First).

**🧭 Direcionamento:**
1. No container pai, adicione a classe do Bootstrap que limita a largura máxima e centraliza o conteúdo horizontalmente na tela (`container`).
2. Na `div` que envolve as colunas, aplique a classe de linha (`row`) e adicione um espaçamento interno de calha (*gutter*) de nível 3 (`g-3`).
3. Em cada item do grid, aplique as classes de coluna responsivas para que:
   * Em **celulares** (`<576px`), ocupe **12 colunas** (linha inteira).
   * Em **tablets** (`≥768px`), ocupe **6 colunas** (2 itens por linha).
   * Em **desktops** (`≥992px`), ocupe **4 colunas** (3 itens por linha).

```html
<!-- 1. Container principal -->
<div class="<!-- INSIRA A CLASSE DO CONTAINER AQUI --> my-4">
    <h2 class="text-center mb-4">Pokédex Inicial</h2>
    
    <!-- 2. Linha com espaçamento (gutter) -->
    <div class="<!-- INSIRA AS CLASSES DA LINHA E GUTTER AQUI -->">
        
        <!-- Item 1: Bulbasaur -->
        <div class="<!-- INSIRA AS CLASSES DE COLUNA RESPONSIVAS AQUI -->">
            <div class="p-3 border bg-white rounded text-center shadow-sm">
                <h5>Bulbasaur</h5>
                <span class="badge bg-success">Planta</span>
            </div>
        </div>

        <!-- Item 2: Charmander -->
        <div class="<!-- INSIRA AS CLASSES DE COLUNA RESPONSIVAS AQUI -->">
            <div class="p-3 border bg-white rounded text-center shadow-sm">
                <h5>Charmander</h5>
                <span class="badge bg-danger">Fogo</span>
            </div>
        </div>

        <!-- Item 3: Squirtle -->
        <div class="<!-- INSIRA AS CLASSES DE COLUNA RESPONSIVAS AQUI -->">
            <div class="p-3 border bg-white rounded text-center shadow-sm">
                <h5>Squirtle</h5>
                <span class="badge bg-primary">Água</span>
            </div>
        </div>

    </div>
</div>
```

---

## 🎨 Exercício 2: Banner de Destaque (Utilitários de Espaçamento e Tipografia)

**🎯 Objetivo:** Estilizar a seção de cabeçalho do Quiz utilizando **apenas classes utilitárias** do Bootstrap 5, sem escrever CSS customizado.

**🧭 Direcionamento:**
1. Aplique no `<header>` fundo azul padrão do tema (`bg-primary`), texto branco (`text-white`), padding vertical de nível 5 (`py-5`) e alinhamento centralizado do texto (`text-center`).
2. No título `<h1>`, adicione uma classe de tipografia de destaque (`display-4`), texto em negrito (`fw-bold`) e margem inferior de nível 3 (`mb-3`).
3. Aplique a classe `.lead` no parágrafo `<p>` para aumentar o tamanho da fonte e dar destaque ao texto explicativo.
4. Transforme a tag `<span>` em um Badge/Emblema amarelo com texto escuro (`badge`, `bg-warning`, `text-dark`).

```html
<!-- 1. Header estilizado com cor de fundo, padding, cor de texto e alinhamento -->
<header class="<!-- INSIRA AS CLASSES DO HEADER AQUI -->">
    <div class="container">
        
        <!-- 2. Título principal com Display, Negrito e Margem inferior -->
        <h1 class="<!-- INSIRA AS CLASSES DO TITULO AQUI -->">
            Desafio Pokémon Master
        </h1>
        
        <!-- 3. Parágrafo com classe de destaque tipográfico -->
        <p class="<!-- INSIRA A CLASSE LEAD AQUI -->">
            Responda o teste e teste seus conhecimentos sobre a franquia!
        </p>

        <!-- 4. Badge / Emblema Amarelo com texto escuro -->
        <span class="<!-- INSIRA AS CLASSES DO BADGE AQUI -->">
            4 Perguntas
        </span>

    </div>
</header>
```

---

## 📝 Exercício 3: Card de Pergunta e Formulário (Componentes de UI)

**🎯 Objetivo:** Estruturar uma pergunta de múltipla escolha utilizando o componente de **Card** e estilizar os botões de seleção (*radio buttons*).

**🧭 Direcionamento:**
1. Transforme a `div` externa em um Card do Bootstrap (`card`), adicionando uma sombra suave (`shadow-sm`) e margem inferior de nível 4 (`mb-4`).
2. Aplique a classe de cabeçalho do card (`card-header`) com fundo azul (`bg-primary`) e texto em negrito e branco (`text-white fw-bold`).
3. Defina a `div` interna da pergunta como o corpo do card (`card-body`).
4. Estilize os elementos de entrada do formulário:
   * A `div` que envolve cada alternativa deve receber a classe `.form-check`.
   * O elemento `<input>` de rádio deve receber a classe `.form-check-input`.
   * O elemento `<label>` deve receber a classe `.form-check-label`.
5. Estilize o botão de envio usando a classe base (`btn`), a cor primária (`btn-primary`) e faça-o ocupar 100% da largura da tela (`w-100`).

```html
<form class="container my-5 col-md-8">
    
    <!-- 1. Card com sombra e margem -->
    <div class="<!-- INSIRA AS CLASSES DO CARD AQUI -->">
        
        <!-- 2. Cabeçalho do Card -->
        <div class="<!-- INSIRA AS CLASSES DO CABEÇALHO AQUI -->">
            Pergunta 1 de 4
        </div>
        
        <!-- 3. Corpo do Card -->
        <div class="<!-- INSIRA A CLASSE DO CORPO DO CARD AQUI -->">
            <p class="fw-bold mb-3">Qual destes Pokémons é originalmente do tipo Fogo?</p>
            
            <!-- Opção A -->
            <div class="<!-- INSIRA A CLASSE FORM-CHECK AQUI --> p-2 border rounded mb-2">
                <input type="radio" name="p1" id="opt1" value="A" class="<!-- INSIRA A CLASSE DO INPUT AQUI -->">
                <label for="opt1" class="<!-- INSIRA A CLASSE DO LABEL AQUI -->">A) Squirtle</label>
            </div>

            <!-- Opção B -->
            <div class="<!-- INSIRA A CLASSE FORM-CHECK AQUI --> p-2 border rounded mb-2">
                <input type="radio" name="p1" id="opt2" value="B" class="<!-- INSIRA A CLASSE DO INPUT AQUI -->">
                <label for="opt2" class="<!-- INSIRA A CLASSE DO LABEL AQUI -->">B) Charmander</label>
            </div>

            <!-- Opção C -->
            <div class="<!-- INSIRA A CLASSE FORM-CHECK AQUI --> p-2 border rounded mb-2">
                <input type="radio" name="p1" id="opt3" value="C" class="<!-- INSIRA A CLASSE DO INPUT AQUI -->">
                <label for="opt3" class="<!-- INSIRA A CLASSE DO LABEL AQUI -->">C) Bulbasaur</label>
            </div>

            <!-- Opção D -->
            <div class="<!-- INSIRA A CLASSE FORM-CHECK AQUI --> p-2 border rounded mb-2">
                <input type="radio" name="p1" id="opt4" value="D" class="<!-- INSIRA A CLASSE DO INPUT AQUI -->">
                <label for="opt4" class="<!-- INSIRA A CLASSE DO LABEL AQUI -->">D) Caterpie</label>
            </div>
        </div>

    </div>

    <!-- 4. Botão estilizado com largura total -->
    <button type="submit" class="<!-- INSIRA AS CLASSES DO BOTÃO AQUI -->">
        Confirmar Resposta
    </button>

</form>
```

---

## 🔑 Gabarito para o Professor

* **Exercício 1:**
  * Container: `container`
  * Linha: `row g-3`
  * Colunas: `col-12 col-md-6 col-lg-4`
* **Exercício 2:**
  * Header: `bg-primary text-white py-5 text-center`
  * Título: `display-4 fw-bold mb-3`
  * Parágrafo: `lead`
  * Badge: `badge bg-warning text-dark`
* **Exercício 3:**
  * Card: `card shadow-sm mb-4`
  * Cabeçalho do Card: `card-header bg-primary text-white fw-bold`
  * Corpo do Card: `card-body`
  * Opções: `form-check`, `form-check-input`, `form-check-label`
  * Botão: `btn btn-primary w-100`
