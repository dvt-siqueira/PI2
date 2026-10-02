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
