# 📚 Validação de Formulários com JavaScript e Bootstrap


## 🎯 Objetivos de Aprendizagem
Ao final desta aula, o aluno será capaz de:
1. Compreender a diferença entre validação no front-end e no back-end.
2. Intercepta a submissão de formulários utilizando `event.preventDefault()`.
3. Construir a lógica de validação de forma evolutiva e modular em JavaScript.
4. Aplicar expressões regulares (RegEx) para validação de formatos (e-mail, senha, etc.).
5. Exibir mensagens de erro dinâmicas e aplicar classes visuais do Bootstrap (`is-invalid` / `is-valid`).

---


## 1. Conceitos Fundamentais

### 1.1 Por que Validar no Front-end?
A validação de formulários no front-end desempenha dois papéis fundamentais:
* **Experiência do Usuário (UX):** Fornece feedback imediato sem exigir uma viagem de ida e volta (*round-trip*) até o servidor.
* **Economia de Recursos:** Reduz o tráfego desnecessário de dados e requisições para o servidor quando os dados inseridos contêm erros óbvios.

> **Atenção:** A validação no front-end **nunca** substitui a validação no back-end, pois o código client-side pode ser alterado ou burlado pelo usuário no navegador.

### 1.2 Validação Nativa HTML5 vs. Validação Customizada com JavaScript
* **HTML5:** Utiliza atributos como `required`, `type="email"`, `minlength`, `maxlength` e `pattern`. É simples e rápida, mas oferece pouca flexibilidade de estilização e mensagens de erro padronizadas pelo navegador.
* **JavaScript:** Permite controle total sobre a lógica de validação, formatação de mensagens, animações e integração com APIs externas (como validação de CEP ou e-mail duplicado).

### 1.3 O Método `event.preventDefault()`
Por padrão, quando um formulário é submetido (evento `submit`), o navegador recarrega a página ou tenta enviar os dados para o endereço especificado no atributo `action`. 
No JavaScript, utilizamos `event.preventDefault()` para **interromper esse comportamento padrão**, permitindo validar os dados via script antes de autorizar o envio.

### 1.4 Eventos Principais
* `submit`: Disparado quando o formulário é enviado (clique no botão ou tecla Enter).
* `blur`: Disparado quando o campo perde o foco (útil para validar o campo imediatamente após o usuário sair dele).
* `input`: Disparado a cada caractere digitado (ideal para máscaras ou validações instantâneas).

---

## 2. Programação Prática e Construção Passo a Passo

### 2.1 Estrutura HTML com Bootstrap (`index.html`)

[Teste de Validação](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_required)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validação de Formulário - JavaScript</title>
  <!-- CSS do Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow p-4">
          <h3 class="card-title text-center mb-4">Cadastro de Usuário</h3>

          <form id="formCadastro" novalidate>
            <!-- Campo Nome -->
            <div class="mb-3">
              <label for="nome" class="form-label">Nome Completo</label>
              <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
              <div class="invalid-feedback" id="erroNome">Por favor, informe seu nome completo.</div>
            </div>

            <!-- Campo E-mail -->
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com">
              <div class="invalid-feedback" id="erroEmail">Informe um e-mail válido.</div>
            </div>

            <!-- Campo Senha -->
            <div class="mb-3">
              <label for="senha" class="form-label">Senha</label>
              <input type="password" class="form-control" id="senha" placeholder="Mínimo de 6 caracteres">
              <div class="invalid-feedback" id="erroSenha">A senha deve ter pelo menos 6 caracteres.</div>
            </div>

            <!-- Botão Enviar -->
            <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
          </form>

          <!-- Alerta de Sucesso -->
          <div id="alertaSucesso" class="alert alert-success mt-3 d-none" role="alert">
            Formulário validado e enviado com sucesso!
          </div>

        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

### 2.2 Construção Didática do JavaScript (`script.js`)

A construção do script é dividida em 4 passos progressivos.

---

#### ➔ Passo 1: O Mínimo Viável — Interceptando o Envio e Validando 1 Campo (Nome)

Neste primeiro passo, mostramos aos alunos apenas a lógica essencial:
1. Selecionar o formulário e o campo de Nome.
2. Interceptar o evento `submit` com `event.preventDefault()`.
3. Verificar se o campo está vazio e aplicar as classes do Bootstrap (`is-invalid` ou `is-valid`).
4. Crie o arquivo scrcpt.js



---

#### ➔ Passo 2: Refatoração com Funções Auxiliares e Modularização

Conforme novos campos forem adicionados, repetir a manipulação de classes (`classList.add` / `classList.remove`) tornará o código repetitivo. 
Neste passo, ensinamos o conceito de **DRY (Don't Repeat Yourself)** criando funções auxiliares reutilizáveis para erro e sucesso.



---

#### ➔ Passo 3: Evoluindo a Lógica — Adicionando E-mail (RegEx) e Senha

Com a estrutura modular definida no Passo 2, podemos evoluir a aplicação adicionando a validação dos campos de E-mail (introduzindo Expressão Regular) e Senha de forma simples.

```javascript

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

```

---

#### ➔ Passo 4: Código Final Integrado (`script.js`)

Unindo todos os passos em um script final limpo, completo e pronto para ser executado:

```javascript

// Listener do Submit (Integração de todas as validações)
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const senhaValida = validarSenha();

  // Exibe o alerta de sucesso se todas as validações passarem
  if (nomeValido && emailValido && senhaValida) {
    alertaSucesso.classList.remove('d-none');
    console.log('Dados prontos para envio:', {
      nome: nomeInput.value,
      email: emailInput.value,
      senha: senhaInput.value
    });
    
    // Reseta o formulário após 3 segundos
    setTimeout(() => {
      form.reset();
      nomeInput.classList.remove('is-valid');
      emailInput.classList.remove('is-valid');
      senhaInput.classList.remove('is-valid');
      alertaSucesso.classList.add('d-none');
    }, 3000);
  } else {
    alertaSucesso.classList.add('d-none');
  }
});
```

---

## Módulo 3: Atividade Prática e Exercícios

Instruções para os alunos: Utilize o projeto base desenvolvido no Módulo 2 e adicione as seguintes melhorias ao formulário.

### 📝 Exercício 1: Validação de Confirmação de Senha (Nível Básico)
Adicione um novo campo chamado **"Confirmar Senha"** no HTML. No JavaScript, crie uma função `validarConfirmacaoSenha()` que verifique:
1. Se o campo de confirmação não está vazio.
2. Se o valor digitado é **exatamente igual** ao valor do campo "Senha".
3. Exiba a mensagem de erro `"As senhas não coincidem!"` caso sejam diferentes.

### 📝 Exercício 2: Feedback Instantâneo no Evento `blur` (Nível Intermediário)
Atualmente, a validação só ocorre ao clicar no botão "Cadastrar".
Modifique o script para que os campos (Nome, E-mail e Senha) sejam validados **imediatamente quando o usuário sair do campo** (evento `blur`).

### 📝 Exercício 3: Validação com Expressão Regular para Senhas Fortes (Nível Intermediário)
Atualize a validação da senha para exigir que ela seja **forte**. A senha deve conter:
* No mínimo 8 caracteres;
* Pelo menos 1 letra maiúscula;
* Pelo menos 1 número.


---

## Módulo 4: Gabarito e Soluções das Atividades (Para o Professor)

### Solução do Exercício 1: Confirmação de Senha
**HTML:**
```html
<div class="mb-3">
  <label for="confirmarSenha" class="form-label">Confirmar Senha</label>
  <input type="password" class="form-control" id="confirmarSenha" placeholder="Repita sua senha">
  <div class="invalid-feedback" id="erroConfirmarSenha">As senhas não coincidem.</div>
</div>
```

**JavaScript:**
```javascript
const confirmarSenhaInput = document.querySelector('#confirmarSenha');

function validarConfirmacaoSenha() {
  const senha = senhaInput.value;
  const confirmacao = confirmarSenhaInput.value;

  if (confirmacao === '') {
    mostrarErro(confirmarSenhaInput, 'erroConfirmarSenha', 'Confirme sua senha.');
    return false;
  } else if (confirmacao !== senha) {
    mostrarErro(confirmarSenhaInput, 'erroConfirmarSenha', 'As senhas não coincidem!');
    return false;
  }
  mostrarSucesso(confirmarSenhaInput);
  return true;
}
```

---

### Solução do Exercício 2: Validação no Evento `blur`
```javascript
nomeInput.addEventListener('blur', validarNome);
emailInput.addEventListener('blur', validarEmail);
senhaInput.addEventListener('blur', validarSenha);
confirmarSenhaInput.addEventListener('blur', validarConfirmacaoSenha);
```

---

### Solução do Exercício 3: RegEx para Senha Forte
```javascript
function validarSenhaForte() {
  const valor = senhaInput.value;
  // RegEx: Mínimo 8 caracteres, pelo menos 1 maiúscula e 1 número
  const regexSenhaForte = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!regexSenhaForte.test(valor)) {
    mostrarErro(senhaInput, 'erroSenha', 'A senha deve ter 8+ caracteres, com ao menos 1 letra maiúscula e 1 número.');
    return false;
  }
  mostrarSucesso(senhaInput);
  return true;
}
```


