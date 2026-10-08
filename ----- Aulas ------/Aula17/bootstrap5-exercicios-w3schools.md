# 🚀 Lista Gradativa de 50 Exercícios Bootstrap 5 (Estilo W3Schools)

Esta lista contém **50 exercícios práticos e gradativos** de Bootstrap 5 organizados em 8 módulos temáticos. 

### 💡 Como utilizar no VS Code:
1. Copie o snippet do exercício.
2. Crie/abra um arquivo `index.html` contendo a CDN do Bootstrap 5 no `<head>`:
  ```html
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios — Bootstrap 5</title>
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
```
3. Substitua as lacunas `___` pelas classes ou atributos corretos do Bootstrap 5.
4. Confira suas respostas no **Gabarito** ao final de cada módulo.

---

## 📦 Módulo 1: Contêineres e Sistema de Grid

### Exercício 01: Contêiner de Largura Fixa
Adicione a classe do Bootstrap necessária para criar um contêiner responsivo de **largura fixa** (*fixed width container*).
```html
<div class="___">
  <h1>Meu Primeiro Site Bootstrap</h1>
  <p>Conteúdo com margens automáticas e largura fixa conforme a tela.</p>
</div>
```

### Exercício 02: Contêiner de Largura Total
Adicione a classe necessária para criar um contêiner que ocupa **100% da largura** da tela em todos os tamanhos de dispositivo (*fluid container*).
```html
<div class="___">
  <h1>Painel de Controle</h1>
  <p>Conteúdo expansível ocupando toda a largura da tela.</p>
</div>
```

### Exercício 03: Linhas e Colunas Básicas
Adicione as classes corretas para criar uma **linha** e **duas colunas** de largura igual no Grid System.
```html
<div class="container">
  <div class="___">
    <div class="___">Coluna 1</div>
    <div class="___">Coluna 2</div>
  </div>
</div>
```

### Exercício 04: Colunas Responsivas por Breakpoint
Defina a primeira coluna para ocupar **6 das 12 colunas** em telas pequenas (`sm`) e a segunda para ocupar as outras **6 colunas**.
```html
<div class="container">
  <div class="row">
    <div class="___">Esquerda (50%)</div>
    <div class="___">Direita (50%)</div>
  </div>
</div>
```

### Exercício 05: Grid com Múltiplas Colunas
Crie um layout de 3 colunas em telas médias (`md`), onde cada coluna ocupa **4 das 12 colunas**.
```html
<div class="container">
  <div class="row">
    <div class="___">Item A</div>
    <div class="___">Item B</div>
    <div class="___">Item C</div>
  </div>
</div>
```

#### 📌 Gabarito — Módulo 1
* **01:** `container`
* **02:** `container-fluid`
* **03:** `row`, `col`, `col`
* **04:** `col-sm-6`, `col-sm-6`
* **05:** `col-md-4`, `col-md-4`, `col-md-4`

---

## 🎨 Módulo 2: Tipografia e Cores

### Exercício 06: Título em Estilo Display
Transforme o elemento `<h1>` em um título gigante de destaque utilizando a classe de **Display 1**.
```html
<h1 class="___">Grande Destaque</h1>
```

### Exercício 07: Parágrafo de Introdução (Lead)
Adicione a classe do Bootstrap que faz o parágrafo se destacar como um **parágrafo introdutório** (*lead paragraph*).
```html
<p class="___">Este é o parágrafo principal do artigo com texto levemente maior.</p>
```

### Exercício 08: Alinhamento de Texto e Estilo de Fonte
Adicione as classes necessárias para **centralizar** o texto e deixá-lo em **itálico**.
```html
<p class="___ ___">Texto centralizado e em itálico.</p>
```

### Exercício 09: Cores de Texto de Contexto
Aplique as classes de cores do Bootstrap para tornar o primeiro texto **verde (sucesso)** e o segundo texto **vermelho (perigo)**.
```html
<p class="___">Operação realizada com sucesso!</p>
<p class="___">Ocorreu um erro inesperado.</p>
```

### Exercício 10: Cores de Fundo e Contraste
Defina o fundo do bloco como **escuro (dark)** e o texto como **branco**.
```html
<div class="___ ___ p-3">
  <h3>Bloco Noturno</h3>
  <p>Fundo escuro com texto claro para boa leitura.</p>
</div>
```

#### 📌 Gabarito — Módulo 2
* **06:** `display-1`
* **07:** `lead`
* **08:** `text-center`, `fst-italic`
* **09:** `text-success`, `text-danger`
* **10:** `bg-dark`, `text-white`

---

## 📊 Módulo 3: Tabelas e Imagens

### Exercício 11: Tabela Básica do Bootstrap
Transforme uma tabela HTML comum em uma **tabela estilizada** do Bootstrap.
```html
<table class="___">
  <thead>
    <tr><th>Nome</th><th>Email</th></tr>
  </thead>
</table>
```

### Exercício 12: Tabela Zebrada (Striped)
Adicione a classe que insere **linhas alternadas em tons de cinza** (*zebra-stripes*).
```html
<table class="table ___">
  <tbody>
    <tr><td>Linha 1</td></tr>
    <tr><td>Linha 2</td></tr>
  </tbody>
</table>
```

### Exercício 13: Tabela com Bordas Completas
Adicione bordas em todos os lados da tabela e de suas células.
```html
<table class="table ___">
  <tr><td>Célula com borda</td></tr>
</table>
```

### Exercício 14: Tabela Responsiva
Envolva a tabela em uma `<div>` com a classe que adiciona **barra de rolagem horizontal** quando a tela for muito pequena.
```html
<div class="___">
  <table class="table">
    <!-- Conteúdo da tabela -->
  </table>
</div>
```

### Exercício 15: Tabela com Efeito Hover
Adicione o efeito visual que **destaca a linha da tabela** quando o ponteiro do mouse passa sobre ela.
```html
<table class="table ___">
  <tr><td>Passe o mouse aqui</td></tr>
</table>
```

### Exercício 16: Imagem com Cantos Arredondados
Adicione a classe do Bootstrap para deixar os **cantos da imagem suaves/arredondados**.
```html
<img src="foto.jpg" class="___" alt="Perfil">
```

### Exercício 17: Imagem Circular
Modifique a imagem para que ela fique no formato de um **círculo perfeito**.
```html
<img src="avatar.jpg" class="___" alt="Avatar">
```

### Exercício 18: Imagem em Moldura Thumbnail
Aplique o estilo de **miniatura com borda arredondada** (*thumbnail*) à imagem.
```html
<img src="produto.jpg" class="___" alt="Produto">
```

### Exercício 19: Imagem Responsiva
Faça a imagem se ajustar automaticamente à largura do elemento pai sem ultrapassá-lo (`max-width: 100%`).
```html
<img src="banner.jpg" class="___" alt="Banner">
```

#### 📌 Gabarito — Módulo 3
* **11:** `table`
* **12:** `table-striped`
* **13:** `table-bordered`
* **14:** `table-responsive`
* **15:** `table-hover`
* **16:** `rounded`
* **17:** `rounded-circle`
* **18:** `img-thumbnail`
* **19:** `img-fluid`

---

## 🔔 Módulo 4: Alertas e Botões

### Exercício 20: Alerta de Sucesso
Complete a `<div>` para exibir uma mensagem de **alerta verde (sucesso)**.
```html
<div class="___ ___" role="alert">
  Cadastro efetuado com sucesso!
</div>
```

### Exercício 21: Alerta Dispensável (Com botão de fechar)
Adicione as classes necessárias para tornar o alerta **fechável pelo usuário** e estilize o botão de fechar.
```html
<div class="alert alert-warning ___ fade show" role="alert">
  Atenção!
  <button type="button" class="___" data-bs-dismiss="alert"></button>
</div>
```

### Exercício 22: Link Destacado Dentro do Alerta
Estilize o hiperlink dentro do alerta para que combine com a cor do componente.
```html
<div class="alert alert-danger">
  Falha de conexão. <a href="#" class="___">Tente novamente</a>.
</div>
```

### Exercício 23: Estilização Básica de Botão
Transforme o elemento `<button>` em um **botão azul primário** padrão do Bootstrap.
```html
<button type="button" class="___ ___">Enviar</button>
```

### Exercício 24: Botão Outline (Apenas Contorno)
Crie um botão com **fundo transparente e borda vermelha (danger)** que preenche o fundo ao passar o mouse.
```html
<button type="button" class="btn ___">Excluir Conta</button>
```

### Exercício 25: Botão de Tamanho Grande
Aumente o tamanho padrão do botão utilizando a classe de **botão grande**.
```html
<button type="button" class="btn btn-primary ___">Clique Aqui</button>
```

### Exercício 26: Botão de Tamanho Pequeno
Reduza a escala do botão utilizando a classe de **botão pequeno**.
```html
<button type="button" class="btn btn-secondary ___">Cancelar</button>
```

### Exercício 27: Botão Desativado (Disabled)
Desative visualmente e funcionalmente o botão utilizando o atributo e classe adequados.
```html
<button type="button" class="btn btn-primary ___" ___>Indisponível</button>
```

### Exercício 28: Botão em Bloco (Largura Total)
Utilize um contêiner auxiliar com utilitários Flexbox/Grid para fazer o botão ocupar **100% da largura**.
```html
<div class="___">
  <button type="button" class="btn btn-success">Confirmar Tudo</button>
</div>
```

### Exercício 29: Grupo de Botões
Agrupe três botões lado a lado em uma única barra horizontal contínua.
```html
<div class="___" role="group">
  <button type="button" class="btn btn-primary">Esq</button>
  <button type="button" class="btn btn-primary">Meio</button>
  <button type="button" class="btn btn-primary">Dir</button>
</div>
```

#### 📌 Gabarito — Módulo 4
* **20:** `alert`, `alert-success`
* **21:** `alert-dismissible`, `btn-close`
* **22:** `alert-link`
* **23:** `btn`, `btn-primary`
* **24:** `btn-outline-danger`
* **25:** `btn-lg`
* **26:** `btn-sm`
* **27:** `disabled`, `disabled`
* **28:** `d-grid`
* **29:** `btn-group`

---

## 🏷️ Módulo 5: Badges e Barras de Progresso

### Exercício 30: Badge Notificador Simples
Adicione um pequeno marcador **cinza (secondary)** ao lado de um texto.
```html
<h3>Notificações <span class="___ ___">Novas</span></h3>
```

### Exercício 31: Badge em Formato de Pílula
Deixe o badge com cantos completamente arredondados (*pill format*).
```html
<span class="badge bg-primary ___">12</span>
```

### Exercício 32: Badge Posicionado Dentro de Botão
Adicione um badge **vermelho (danger)** dentro de um botão para indicar quantidade de mensagens.
```html
<button type="button" class="btn btn-primary">
  Mensagens <span class="___ ___">4</span>
</button>
```

### Exercício 33: Barra de Progresso Básica
Crie a estrutura básica de uma **barra de progresso** do Bootstrap.
```html
<div class="___">
  <div class="___" style="width: 50%">50%</div>
</div>
```

### Exercício 34: Barra de Progresso Colorida
Altere a cor interna do preenchimento da barra de progresso para **verde (success)**.
```html
<div class="progress">
  <div class="progress-bar ___" style="width: 70%">70% Concluído</div>
</div>
```

### Exercício 35: Barra de Progresso Listrada
Aplique o padrão de **listras diagonais** na barra de progresso.
```html
<div class="progress">
  <div class="progress-bar ___" style="width: 40%"></div>
</div>
```

### Exercício 36: Barra de Progresso Animada
Adicione a classe que faz as listras da barra de progresso **se moverem da esquerda para a direita**.
```html
<div class="progress">
  <div class="progress-bar progress-bar-striped ___" style="width: 60%"></div>
</div>
```

#### 📌 Gabarito — Módulo 5
* **30:** `badge`, `bg-secondary`
* **31:** `rounded-pill`
* **32:** `badge`, `bg-danger`
* **33:** `progress`, `progress-bar`
* **34:** `bg-success`
* **35:** `progress-bar-striped`
* **36:** `progress-bar-animated`

---

## ⏳ Módulo 6: Spinners e Paginação

### Exercício 37: Spinner de Borda (Carregamento)
Crie um indicador de carregamento giratório em **estilo borda**.
```html
<div class="___ ___" role="status">
  <span class="visually-hidden">Carregando...</span>
</div>
```

### Exercício 38: Spinner de Crescimento (Growing)
Crie um spinner no estilo **pulso/crescimento** (*grow spinner*).
```html
<div class="___ ___" role="status">
  <span class="visually-hidden">Carregando...</span>
</div>
```

### Exercício 39: Paginação Básica
Monte a estrutura de uma **lista de paginação** com os links numéricos.
```html
<ul class="___">
  <li class="___"><a class="___" href="#">1</a></li>
  <li class="___"><a class="___" href="#">2</a></li>
</ul>
```

### Exercício 40: Item de Paginação Ativo
Indique que a página número 2 é a **página atualmente selecionada**.
```html
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item ___"><a class="page-link" href="#">2</a></li>
</ul>
```

### Exercício 41: Paginação em Tamanho Grande
Aumente a escala visual dos botões de paginação.
```html
<ul class="pagination ___">
  <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
  <li class="page-item"><a class="page-link" href="#">Próximo</a></li>
</ul>
```

#### 📌 Gabarito — Módulo 6
* **37:** `spinner-border`, `text-primary`
* **38:** `spinner-grow`, `text-success`
* **39:** `pagination`, `page-item`, `page-link`
* **40:** `active`
* **41:** `pagination-lg`

---

## 🃏 Módulo 7: List Groups e Cards

### Exercício 42: Grupo de Lista Simples
Crie uma **lista vertical encadeada** com três itens estilizados.
```html
<ul class="___">
  <li class="___">Item 1</li>
  <li class="___">Item 2</li>
  <li class="___">Item 3</li>
</ul>
```

### Exercício 43: Item de Lista Clicável e Ativo
Transforme os itens da lista em **links interativos** e marque o primeiro como ativo.
```html
<div class="list-group">
  <a href="#" class="list-group-item ___ ___">Painel Inicial</a>
  <a href="#" class="list-group-item ___">Configurações</a>
</div>
```

### Exercício 44: Cartão (Card) com Cabeçalho e Corpo
Crie um **Card do Bootstrap** estruturado com cabeçalho e corpo de texto.
```html
<div class="___">
  <div class="___">Título do Cartão</div>
  <div class="___">
    <p>Conteúdo principal dentro do corpo do card.</p>
  </div>
</div>
```

### Exercício 45: Card com Imagem Superior e Rodapé
Complete o código adicionando uma **imagem no topo** do card e o bloco de **rodapé**.
```html
<div class="card" style="width: 18rem;">
  <img src="capa.jpg" class="___" alt="Capa">
  <div class="card-body">
    <h5 class="card-title">Produto A</h5>
  </div>
  <div class="___">Preço: R$ 99,00</div>
</div>
```

#### 📌 Gabarito — Módulo 7
* **42:** `list-group`, `list-group-item`
* **43:** `list-group-item-action`, `active`, `list-group-item-action`
* **44:** `card`, `card-header`, `card-body`
* **45:** `card-img-top`, `card-footer`

---

## 🧩 Módulo 8: Componentes Interativos (Dropdowns, Collapse, Navs e Navbars)

### Exercício 46: Menu Suspenso (Dropdown)
Monte um menu suspenso com seu botão disparador e opções.
```html
<div class="___">
  <button class="btn btn-secondary ___" type="button" data-bs-toggle="dropdown">
    Opções
  </button>
  <ul class="___">
    <li><a class="___" href="#">Ação 1</a></li>
    <li><a class="___" href="#">Ação 2</a></li>
  </ul>
</div>
```

### Exercício 47: Bloco Retrátil (Collapse)
Configure o botão para **expandir e recolher** a `<div>` oculta usando os atributos `data-bs-*`.
```html
<button class="btn btn-primary" ___="collapse" ___="#conteudoOculto">
  Mostrar/Ocultar
</button>
<div class="___" id="conteudoOculto">
  <div class="card card-body">Texto que pode ser ocultado.</div>
</div>
```

### Exercício 48: Abas de Navegação (Nav Tabs)
Crie um menu superior em formato de **abas estilo guias** (*tabs*).
```html
<ul class="___ ___">
  <li class="___"><a class="___ ___" href="#">Aba 1</a></li>
  <li class="___"><a class="___" href="#">Aba 2</a></li>
</ul>
```

### Exercício 49: Barra de Navegação Básica (Navbar)
Crie uma barra de navegação simples com **fundo claro e marca registrada**.
```html
<nav class="___ ___ bg-light">
  <div class="container-fluid">
    <a class="___" href="#">MeuSite.com</a>
  </div>
</nav>
```

### Exercício 50: Navbar Responsiva Completa
Complete a classe que faz a Navbar **expandir no breakpoint largo (`lg`)** e a estrutura do menu colapsável.
```html
<nav class="navbar ___ navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logotipo</a>
    <button class="___" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse ___" id="menuNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
```

#### 📌 Gabarito — Módulo 8
* **46:** `dropdown`, `dropdown-toggle`, `dropdown-menu`, `dropdown-item`, `dropdown-item`
* **47:** `data-bs-toggle`, `data-bs-target`, `collapse`
* **48:** `nav`, `nav-tabs`, `nav-item`, `nav-link active`, `nav-item`, `nav-link`
* **49:** `navbar`, `navbar-light`, `navbar-brand`
* **50:** `navbar-expand-lg`, `navbar-toggler`, `navbar-collapse`
