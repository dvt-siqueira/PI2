# 📘 Aula 16: Desenvolvendo um Pokémon Quiz Responsivo com Bootstrap 5 e JavaScript

## 🎯 Objetivos da Aula
Nesta aula, os alunos irão construir uma aplicação web interativa e responsiva: um **Pokémon Quiz**. Ao longo do projeto, vamos explorar a **lógica arquitetural do Bootstrap 5**, compreendendo por que cada classe é utilizada, como funciona a filosofia *Mobile First*, a matemática do Grid de 12 colunas e como o JavaScript manipula o DOM e o objeto `Window` para criar animações e feedbacks visuais em tempo real.


## Filosofia Mobile First, Viewport e Setup da Aplicação

### 💡 Lógica do Conceito
O Bootstrap 5 foi construído com base na filosofia **Mobile First** (O Celular em Primeiro Lugar). Historicamente, os desenvolvedores criavam sites para monitores de computador e depois tentavam "encolher" o layout para telas pequenas. O Mobile First inverte essa lógica:
1. Os estilos padrões sem *breakpoints* aplicam-se a **todas as telas**, começando da menor largura possível.
2. À medida que a tela se expande, utilizam-se *media queries* para adaptar o layout a telas maiores.

Para que o navegador do smartphone não tente simular uma tela de computador (o que deixaria o texto minúsculo e exigiria zoom manual), é **obrigatório** incluir a tag `<meta name="viewport">`.

#### Entendendo os Parâmetros da Viewport:
* `width=device-width`: Define a largura da página para corresponder exatamente à largura física da tela do dispositivo em pixels lógicos.
* `initial-scale=1.0`: Define o nível de zoom inicial em 100% quando a página é carregada pela primeira vez.

### 💻 Código de Entrada (Esqueleto HTML5)
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <!-- Meta Viewport Obrigatória para Responsividade -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Quiz — Bootstrap 5</title>
    
    <!-- Bootstrap 5 CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <!-- Conteúdo da Aplicação -->

    <!-- Script da Aplicação -->
    <script src="app.js"></script>
</body>
</html>
```

---

### ✏️ Atividade: O Desafio da Viewport no DevTools
**Objetivo**: Sentir na prática o impacto da tag viewport em dispositivos móveis.

1. Abra o arquivo `index.html` no seu navegador.
2. Pressione **F12** (ou clique com o botão direito e selecione **Inspecionar**) para abrir o *Chrome DevTools*.
3. Clique no ícone de simulação de dispositivos móveis (**Toggle Device Toolbar** - `Ctrl + Shift + M`). Escolha o dispositivo **iPhone 12 Pro** ou **Pixel 7**.
4. **O Teste**: Abra o código HTML, comente a linha `<meta name="viewport" ...>` e salve o arquivo. Recarregue a página no navegador.
5. **Pergunta para Reflexão**: O que aconteceu com a escala dos textos e elementos? Por que o navegador tentou "comprimir" a tela? Descomente a tag e veja a correção imediata.

---

## O Sistema de Grid de 12 Colunas e Breakpoints

### 💡 Lógica do Conceito
O layout do Bootstrap baseia-se em um **Sistema de Grid de 12 Colunas**. 

#### Por que 12 colunas?
O número 12 foi escolhido matematicamente por ser altamente divisível:
* **2 seções iguais**: `col-6` + `col-6` = 12
* **3 seções iguais**: `col-4` + `col-4` + `col-4` = 12
* **4 seções iguais**: `col-3` + `col-3` + `col-3` + `col-3` = 12
* **Layout Assimétrico (Conteúdo + Sidebar)**: `col-8` + `col-4` = 12

#### A Hierarquia Obrigatória do Grid:
Para o Grid funcionar sem quebras de layout ou barra de rolagem horizontal indesejada, você deve seguir estritamente esta estrutura de 3 níveis:
```
[ .container ou .container-fluid ]
       └── [ .row ]
               └── [ .col-* ]
```
1. **`.container`**: Centraliza o conteúdo e cria margens laterais automáticas.
2. **`.row`**: Funciona como um invólucro flexível (`display: flex`) com margens negativas para alinhar as colunas perfeitamente.
3. **`.col-*`**: Define quantas das 12 colunas o elemento irá ocupar.

#### Breakpoints do Bootstrap 5:
Os breakpoints representam as larguras mínimas de tela (*media queries* `min-width`):
* `xs` (<576px): Padrão (sem prefixo, ex: `col-12`)
* `sm` (≥576px): Smartphones deitados / Telas pequenas (`col-sm-*`)
* `md` (≥768px): Tablets / Telas médias (`col-md-*`)
* `lg` (≥992px): Laptops / Monitores (`col-lg-*`)
* `xl` (≥1200px): Telas grandes (`col-xl-*`)
* `xxl` (≥1400px): Telas ultrawide (`col-xxl-*`)

---

### 💻 Exemplo Prático: Cabeçalho do Quiz com Grid
```html
<header class="bg-primary text-white py-4 shadow-sm">
    <div class="container">
        <div class="row align-items-center">
            <!-- Em telas pequenas (celulares), ocupa 12 colunas. Em telas médias (md+), ocupa 8 colunas -->
            <div class="col-12 col-md-8 text-center text-md-start">
                <h1 class="display-4 fw-bold mb-1">🎮 Pokémon Quiz</h1>
                <p class="lead mb-0">Teste seus conhecimentos e descubra se você é um verdadeiro Mestre Pokémon!</p>
            </div>
            <!-- Painel Informativo Lateral no Desktop -->
            <div class="col-12 col-md-4 mt-3 mt-md-0 text-center text-md-end">
                <span class="badge bg-warning text-dark fs-6 p-3 shadow-sm">
                    ⚡ 4 Perguntas | 🎯 100 Pontos Max
                </span>
            </div>
        </div>
    </div>
</header>
```

---

### ✏️ Atividade: Ajustando o Grid Responsivo
**Objetivo**: Construir a estrutura de Grid do cabeçalho e testar a transição entre telas pequenas e grandes.

1. Insira a estrutura do `<header>` acima dentro do seu `index.html`.
2. Altere as classes das colunas para experimentar diferentes proporções:
   * Teste mudar de `col-md-8` e `col-md-4` para `col-md-6` e `col-md-6`.
3. Redimensione a janela do navegador e observe o momento exato em que o painel lateral salta para baixo do título ao atingir o ponto de interrupção de `768px` (`md`).

---

## Lógica dos Utilitários de Espaçamento e Tipografia

### 💡 Lógica do Conceito
Em projetos tradicionais sem frameworks, o desenvolvedor precisa criar dezenas de seletores CSS para ajustar margens e espaçamentos internos (ex: `.card-margin-top { margin-top: 20px; }`). O Bootstrap resolve isso com **Classes Utilitárias de Espaçamento**.

#### A Sintaxe Universal de Espaçamento: `[propriedade][lado]-[tamanho]`

* **Propriedade**:
  * `m`: *Margin* (espaçamento externo)
  * `p`: *Padding* (espaçamento interno)

* **Lado**:
  * `t`: *top* (topo)
  * `b`: *bottom* (base/inferior)
  * `s`: *start* (esquerda no LTR)
  * `e`: *end* (direita no LTR)
  * `x`: horizontal (`start` + `end` / esquerda + direita)
  * `y`: vertical (`top` + `bottom` / topo + base)
  * *(omisso)*: aplica nos 4 lados simultaneamente

* **Escala de Tamanhos (Baseada em `rem`)**:
  * `0`: `0px` (remove espaçamento)
  * `1`: `0.25rem` (4px)
  * `2`: `0.5rem` (8px)
  * `3`: `1rem` (16px — tamanho padrão do navegador)
  * `4`: `1.5rem` (24px)
  * `5`: `3rem` (48px)
  * `auto`: aplica `margin: auto` (usado para centralizar elementos flexíveis)

*Exemplos de Leitura de Classes*:
* `py-4`: Padding vertical de 1.5rem (24px em cima e 24px embaixo).
* `my-5`: Margem vertical de 3rem (48px em cima e 48px embaixo).
* `me-auto`: Margem na direita automática (`margin-right: auto`).

#### Utilitários de Tipografia:
* `.display-1` até `.display-6`: Títulos com fonte expandida e maior destaque visual do que as tags `<h1>`-`<h6>` normais.
* `.lead`: Aumenta levemente o tamanho da fonte e o espaçamento de linha de um parágrafo para dar destaque explicativo.
* `.fw-bold`, `.fw-normal`, `.fw-light`: Controle do peso da fonte (*font-weight*).

---

### ✏️ Atividade: O Experimento do "Respiro Visual" (White Space)
**Objetivo**: Entender a importância das margens e paddings na usabilidade de interfaces.

1. Adicione um contêiner de introdução ao Quiz no seu HTML:
```html
<div class="container my-5">
    <div class="p-4 bg-white rounded shadow-sm border border-primary-subtle">
        <h2 class="h4 text-primary font-weight-bold mb-3">📜 Instruções do Quiz:</h2>
        <p class="mb-0 text-muted">Selecione uma opção para cada uma das 4 perguntas abaixo. Ao finalizar, clique no botão <strong>"Enviar Respostas"</strong> para calcular a sua pontuação em tempo real!</p>
    </div>
</div>
```
2. **Teste Prático**:
   * Substitua `p-4` por `p-1`. Observe como os textos ficam "espremidos" contra a borda do cartão.
   * Substitua `my-5` por `my-1`. Observe como o cartão cola no cabeçalho sem espaço para respirar.
   * Volte para `p-4` e `my-5` e note a melhoria imediata na experiência de leitura (UX).

---

## Formulários Responsivos e Componentes de Seleção

### 💡 Lógica do Conceito
Os elementos nativos do formulário HTML (como `<input type="radio">`) possuem duas grandes limitações:
1. **Inconsistência Visual**: Têm visual diferente no Windows, macOS, Android e iOS.
2. **Baixa Usabilidade Mobile**: Os círculos originais de seleção são pequenos (cerca de 12px), dificultando o toque com o polegar em dispositivos móveis.

O Bootstrap resolve isso com a suíte de componentes `.form-check`:
* **`.form-check`**: Envolve a opção, garantindo margens adequadas e alinhamento vertical flexível.
* **`.form-check-input`**: Estiliza a caixa/círculo de seleção com animações de foco e ampliação da área de clique (*touch target*).
* **`.form-check-label`**: Permite que o usuário clique no texto para selecionar a opção, facilitando a navegação em celulares.

---

### 💻 Estrutura das Perguntas do Quiz
```html
<main class="container my-5">
    <form class="quiz-form">
        
        <!-- Pergunta 1 -->
        <div class="card mb-4 border-0 shadow-sm">
            <div class="card-header bg-primary text-white font-weight-bold">
                ❓ Pergunta 1 de 4
            </div>
            <div class="card-body">
                <p class="card-text lead fw-normal mb-3">Qual é o primeiro Pokémon na Pokédex Nacional (#0001)?</p>
                
                <div class="form-check p-3 mb-2 rounded border bg-light">
                    <input class="form-check-input ms-1" type="radio" name="q1" id="q1a" value="A" checked>
                    <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1a">A) Bulbasaur</label>
                </div>
                
                <div class="form-check p-3 mb-2 rounded border bg-light">
                    <input class="form-check-input ms-1" type="radio" name="q1" id="q1b" value="B">
                    <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1b">B) Charmander</label>
                </div>

                <div class="form-check p-3 mb-2 rounded border bg-light">
                    <input class="form-check-input ms-1" type="radio" name="q1" id="q1c" value="C">
                    <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1c">C) Pikachu</label>
                </div>

                <div class="form-check p-3 mb-2 rounded border bg-light">
                    <input class="form-check-input ms-1" type="radio" name="q1" id="q1d" value="D">
                    <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1d">D) Mewtwo</label>
                </div>
            </div>
        </div>

        <!-- Botão de Envio -->
        <div class="text-center my-4">
            <button type="submit" class="btn btn-primary btn-lg px-5 shadow">
                🚀 Enviar Respostas
            </button>
        </div>

    </form>
</main>
```

---

### ✏️ Atividade Prática 4: Construção do Formulário de Quiz
**Objetivo**: Montar as 4 perguntas do Pokémon Quiz utilizando o componente de formulário do Bootstrap.

1. Adicione a **Pergunta 1** conforme o exemplo acima.
2. **Sua vez**: Replique a estrutura da Pergunta 1 para criar as Perguntas 2, 3 e 4 com os seguintes dados:
   * **Pergunta 2**: *Qual tipo de Pokémon é super efetivo contra Pokémons do tipo Água?*
     * Opções: A) Fogo | B) Planta (Correta) | C) Pedra | D) Normal
   * **Pergunta 3**: *Qual é a evolução final do Eevee ao usar uma Pedra do Trovão (Thunder Stone)?*
     * Opções: A) Vaporeon | B) Jolteon (Correta) | C) Flareon | D) Espeon
   * **Pergunta 4**: *Qual lendário é conhecido como o criador do universo Pokémon?*
     * Opções: A) Arceus (Correta) | B) Rayquaza | C) Dialga | D) Lugia
3. Certifique-se de alterar o atributo `name` de cada pergunta (`name="q2"`, `name="q3"`, `name="q4"`) para que os botões de rádio funcionem de forma independente em cada bloco!

---

## Módulo 5: Manipulação do DOM, Objeto Window e Feedback Dinâmico

### 💡 Lógica do Conceito

#### 1. A Classe Utilitária `.d-none` (Display: None)
Em vez de remover elementos da árvore do DOM com JS, usamos a classe `.d-none` do Bootstrap para esconder a seção de resultados até que o usuário clique no botão de envio.

#### 2. Interceptação de Evento com `e.preventDefault()`
Ao clicar em um botão `<button type="submit">` dentro de um formulário, o comportamento padrão do navegador é atualizar a página ou tentar enviar dados via requisição HTTP GET/POST. O método `e.preventDefault()` cancela esse comportamento padrão, permitindo que nosso script processe os dados sem recarregar a tela.

#### 3. O Objeto Global `window` e `window.scrollTo(x, y)`
O objeto `window` representa a janela do navegador. Quando o usuário está no final de um formulário longo em um smartphone e clica em "Enviar", a resposta é mostrada no topo da tela. Se a tela não rolar automaticamente, o usuário achará que nada aconteceu. Usamos `window.scrollTo(0, 0)` para realizar a rolagem automática até o topo (`y = 0`).

#### 4. Animação de Placar com `setInterval()`
O método `setInterval(callback, tempo_em_ms)` executa uma função repetidamente em intervalos fixos de tempo. Usaremos o `setInterval` para fazer o placar contar de `0%` até a nota final do aluno (ex: `75%`) gradualmente, criando uma animação fluida.

---

### 💻 Código HTML da Seção de Resultados (Invisível Inicialmente)
```html
<!-- Seção de Resultado (Oculta com .d-none) -->
<section class="result-section d-none bg-white py-4 shadow-sm border-bottom mb-4">
    <div class="container text-center">
        <h2 class="h3 mb-3">Seu Desempenho:</h2>
        
        <!-- Placar Animado -->
        <p class="display-3 fw-bold text-primary my-2">
            <span class="score-display">0%</span>
        </p>

        <!-- Caixa de Alerta do Bootstrap para Feedback Personalizado -->
        <div class="alert feedback-alert d-none col-md-8 mx-auto fw-bold fs-5" role="alert">
            <!-- Texto inserido dinamicamente via JS -->
        </div>
    </div>
</section>
```

---

### 💻 Código JavaScript (`app.js`)
```javascript
// 1. Respostas corretas do Quiz
const correctAnswers = ['A', 'B', 'B', 'A'];

// 2. Seleção dos Elementos do DOM
const quizForm = document.querySelector('.quiz-form');
const resultSection = document.querySelector('.result-section');
const scoreDisplay = document.querySelector('.score-display');
const feedbackAlert = document.querySelector('.feedback-alert');

// 3. Ouvinte de Evento de Submissão do Formulário
quizForm.addEventListener('submit', event => {
    // Impede o recarregamento da página
    event.preventDefault();

    let score = 0;

    // Coleta as respostas do usuário no formulário
    const userAnswers = [
        quizForm.q1.value,
        quizForm.q2.value,
        quizForm.q3.value,
        quizForm.q4.value
    ];

    // Calcula a pontuação (25 pontos por acerto)
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Rola a página suavemente até o topo para exibir o resultado no celular
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Remove a classe .d-none para exibir a seção de resultados
    resultSection.classList.remove('d-none');

    // 4. Animação do Placar Percentual com setInterval
    let currentScore = 0;
    
    // Desabilita animação prévia se já houver um timer
    const timer = setInterval(() => {
        scoreDisplay.textContent = `${currentScore}%`;

        if (currentScore === score) {
            clearInterval(timer); // Para o temporizador quando atinge a nota
            exibirFeedback(score); // Exibe o alerta estilizado do Bootstrap
        } else {
            currentScore++;
        }
    }, 15); // Executa a cada 15 milissegundos
});

// 5. Função para Exibir Feedback Dinâmico com Classes de Alerta do Bootstrap
function exibirFeedback(finalScore) {
    feedbackAlert.classList.remove('d-none', 'alert-success', 'alert-warning', 'alert-danger');

    if (finalScore >= 75) {
        feedbackAlert.classList.add('alert-success');
        feedbackAlert.innerHTML = '🏆 <strong>Incrível!</strong> Você é um verdadeiro Mestre Pokémon!';
    } else if (finalScore >= 50) {
        feedbackAlert.classList.add('alert-warning');
        feedbackAlert.innerHTML = '⚡ <strong>Bom trabalho!</strong> Você conhece bastante, mas ainda pode melhorar!';
    } else {
        feedbackAlert.classList.add('alert-danger');
        feedbackAlert.innerHTML = '🎒 <strong>Continue treinando!</strong> Revise a Pokédex e tente novamente!';
    }
}
```


## 📂 Código Fonte Completo do Projeto (Gabarito)

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Quiz — Bootstrap 5 & JavaScript</title>
    <!-- Bootstrap 5 CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .cursor-pointer { cursor: pointer; }
    </style>
</head>
<body class="bg-light">

    <!-- Cabeçalho com Grid e Respiro Visual -->
    <header class="bg-primary text-white py-4 shadow-sm">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-8 text-center text-md-start">
                    <h1 class="display-4 fw-bold mb-1">🎮 Pokémon Quiz</h1>
                    <p class="lead mb-0">Teste seus conhecimentos e descubra se você é um verdadeiro Mestre Pokémon!</p>
                </div>
                <div class="col-12 col-md-4 mt-3 mt-md-0 text-center text-md-end">
                    <span class="badge bg-warning text-dark fs-6 p-3 shadow-sm">
                        ⚡ 4 Perguntas | 🎯 100 Pts Max
                    </span>
                </div>
            </div>
        </div>
    </header>

    <!-- Seção de Resultado Oculta (.d-none) -->
    <section class="result-section d-none bg-white py-4 shadow-sm border-bottom">
        <div class="container text-center">
            <h2 class="h4 text-muted mb-2">Seu Desempenho:</h2>
            <p class="display-3 fw-bold text-primary my-2">
                <span class="score-display">0%</span>
            </p>
            <div class="alert feedback-alert d-none col-md-8 mx-auto fw-bold fs-5 mt-3 shadow-sm" role="alert">
                <!-- Preenchido via JavaScript -->
            </div>
        </div>
    </section>

    <!-- Conteúdo Principal / Quiz -->
    <main class="container my-5">
        <form class="quiz-form">
            
            <!-- Pergunta 1 -->
            <div class="card mb-4 border-0 shadow-sm">
                <div class="card-header bg-primary text-white fw-bold">
                    ❓ Pergunta 1 de 4
                </div>
                <div class="card-body">
                    <p class="card-text lead fw-normal mb-3">Qual é o primeiro Pokémon na Pokédex Nacional (#0001)?</p>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q1" id="q1a" value="A" checked>
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1a">A) Bulbasaur</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q1" id="q1b" value="B">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1b">B) Charmander</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q1" id="q1c" value="C">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1c">C) Pikachu</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q1" id="q1d" value="D">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q1d">D) Mewtwo</label>
                    </div>
                </div>
            </div>

            <!-- Pergunta 2 -->
            <div class="card mb-4 border-0 shadow-sm">
                <div class="card-header bg-primary text-white fw-bold">
                    ❓ Pergunta 2 de 4
                </div>
                <div class="card-body">
                    <p class="card-text lead fw-normal mb-3">Qual tipo de Pokémon é super efetivo contra Pokémons do tipo Água?</p>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q2" id="q2a" value="A" checked>
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q2a">A) Fogo</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q2" id="q2b" value="B">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q2b">B) Planta</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q2" id="q2c" value="C">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q2c">C) Pedra</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q2" id="q2d" value="D">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q2d">D) Normal</label>
                    </div>
                </div>
            </div>

            <!-- Pergunta 3 -->
            <div class="card mb-4 border-0 shadow-sm">
                <div class="card-header bg-primary text-white fw-bold">
                    ❓ Pergunta 3 de 4
                </div>
                <div class="card-body">
                    <p class="card-text lead fw-normal mb-3">Qual é a evolução final do Eevee ao usar uma Pedra do Trovão (Thunder Stone)?</p>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q3" id="q3a" value="A" checked>
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q3a">A) Vaporeon</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q3" id="q3b" value="B">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q3b">B) Jolteon</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q3" id="q3c" value="C">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q3c">C) Flareon</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q3" id="q3d" value="D">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q3d">D) Espeon</label>
                    </div>
                </div>
            </div>

            <!-- Pergunta 4 -->
            <div class="card mb-4 border-0 shadow-sm">
                <div class="card-header bg-primary text-white fw-bold">
                    ❓ Pergunta 4 de 4
                </div>
                <div class="card-body">
                    <p class="card-text lead fw-normal mb-3">Qual lendário é conhecido como o criador do universo Pokémon?</p>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q4" id="q4a" value="A" checked>
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q4a">A) Arceus</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q4" id="q4b" value="B">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q4b">B) Rayquaza</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q4" id="q4c" value="C">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q4c">C) Dialga</label>
                    </div>
                    <div class="form-check p-3 mb-2 rounded border bg-light">
                        <input class="form-check-input ms-1" type="radio" name="q4" id="q4d" value="D">
                        <label class="form-check-label ms-2 w-100 cursor-pointer" for="q4d">D) Lugia</label>
                    </div>
                </div>
            </div>

            <!-- Botão de Envio -->
            <div class="text-center my-5">
                <button type="submit" class="btn btn-primary btn-lg px-5 py-3 shadow fs-5 rounded-pill">
                    🚀 Enviar Respostas e Calcular Nota
                </button>
            </div>

        </form>
    </main>

    <!-- Script JavaScript da Aplicação -->
    <script src="app.js"></script>
</body>
</html>
```

### 📄 `app.js`
```javascript
// Gabarito do Quiz: Q1=A, Q2=B, Q3=B, Q4=A
const correctAnswers = ['A', 'B', 'B', 'A'];

const quizForm = document.querySelector('.quiz-form');
const resultSection = document.querySelector('.result-section');
const scoreDisplay = document.querySelector('.score-display');
const feedbackAlert = document.querySelector('.feedback-alert');

quizForm.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [
        quizForm.q1.value,
        quizForm.q2.value,
        quizForm.q3.value,
        quizForm.q4.value
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Rola a tela até o topo suavemente
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Exibe a seção de resultados
    resultSection.classList.remove('d-none');

    // Animação de contagem da pontuação
    let currentScore = 0;
    const timer = setInterval(() => {
        scoreDisplay.textContent = `${currentScore}%`;

        if (currentScore === score) {
            clearInterval(timer);
            exibirFeedback(score);
        } else {
            currentScore++;
        }
    }, 15);
});

function exibirFeedback(finalScore) {
    feedbackAlert.classList.remove('d-none', 'alert-success', 'alert-warning', 'alert-danger');

    if (finalScore >= 75) {
        feedbackAlert.classList.add('alert-success');
        feedbackAlert.innerHTML = '🏆 <strong>Incrível!</strong> Você é um verdadeiro Mestre Pokémon!';
    } else if (finalScore >= 50) {
        feedbackAlert.classList.add('alert-warning');
        feedbackAlert.innerHTML = '⚡ <strong>Bom trabalho!</strong> Você conhece bastante, mas ainda pode melhorar!';
    } else {
        feedbackAlert.classList.add('alert-danger');
        feedbackAlert.innerHTML = '🎒 <strong>Continue treinando!</strong> Revise a Pokédex e tente novamente!';
    }
}
```
