// Importar dados dos problemas
import { companies, heuristics } from "./data/problems.js";

console.log("Script carregado");
console.log("Número de empresas:", companies.length);
companies.forEach((company) => {
  console.log(`Empresa: ${company.name}, Imagem: ${company.image}`);
});

// Variáveis do jogo
let score = 0;
let timeLeft = 60;
let gameTimer;
let questionTimer;
let currentProblem = null;
let alertCompanyId = null;
let alertInterval;

// Elementos do DOM
const buildingsContainer = document.getElementById("buildings");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const problemModal = document.getElementById("problemModal");
const closeModalBtn = document.getElementById("closeModal");
const problemTitle = document.getElementById("problemTitle");
const problemImage = document.getElementById("problemImage");
const optionsContainer = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const questionTimeElement = document.getElementById("questionTime");
const gameOverModal = document.getElementById("gameOverModal");
const finalScoreElement = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

// Adicione esta função antes de initGame()
function updateTimer() {
  timeElement.textContent = timeLeft;
}

// Inicializar o jogo
function initGame() {
  score = 0;
  timeLeft = 60;
  updateScore();
  updateTimer();

  // Criar os prédios das empresas
  buildingsContainer.innerHTML = "";
  companies.forEach((company) => {
    const buildingElement = document.createElement("div");
    buildingElement.className = "building";
    buildingElement.id = company.id;
    buildingElement.innerHTML = `
            <img src="${company.image}" alt="${company.name}">
        `;
    buildingElement.addEventListener("click", () =>
      handleBuildingClick(company.id)
    );
    buildingsContainer.appendChild(buildingElement);
  });

  // Iniciar temporizador do jogo
  gameTimer = setInterval(updateGameTimer, 1000);

  // Iniciar alertas aleatórios
  startRandomAlerts();
}

// Iniciar alertas aleatórios
function startRandomAlerts() {
  // Limpar qualquer intervalo existente
  if (alertInterval) clearInterval(alertInterval);

  // Definir novo intervalo (entre 3 e 8 segundos)
  const alertTime = Math.floor(Math.random() * 5000) + 3000;
  alertInterval = setInterval(triggerRandomAlert, alertTime);
}

// Disparar alerta aleatório
function triggerRandomAlert() {
  // Remover alerta anterior, se houver
  if (alertCompanyId) {
    const previousAlert = document.querySelector(".alert");
    if (previousAlert) previousAlert.remove();
  }

  // Escolher uma empresa aleatória
  const randomIndex = Math.floor(Math.random() * companies.length);
  alertCompanyId = companies[randomIndex].id;

  // Adicionar indicador de alerta
  const buildingElement = document.getElementById(alertCompanyId);
  const alertElement = document.createElement("div");
  alertElement.className = "alert";
  alertElement.textContent = "!";
  buildingElement.appendChild(alertElement);

  // Definir tempo para o alerta desaparecer (5-10 segundos)
  setTimeout(() => {
    if (buildingElement.contains(alertElement)) {
      buildingElement.removeChild(alertElement);
      alertCompanyId = null;
    }
  }, Math.floor(Math.random() * 5000) + 5000);
}

// Manipular clique em um prédio
function handleBuildingClick(companyId) {
  const buildingElement = document.getElementById(companyId);
  const alertElement = buildingElement.querySelector(".alert");

  // Verificar se a empresa está com alerta
  if (alertElement) {
    // Remover o alerta
    buildingElement.removeChild(alertElement);
    alertCompanyId = null;

    // Parar o intervalo de alertas temporariamente
    clearInterval(alertInterval);

    // Mostrar problema da empresa
    showCompanyProblem(companyId);
  }
}

// Mostrar problema de uma empresa
function showCompanyProblem(companyId) {
  const company = companies.find((c) => c.id === companyId);
  const randomProblemIndex = Math.floor(
    Math.random() * company.problems.length
  );
  currentProblem = company.problems[randomProblemIndex];

  // Atualizar a modal com o problema
  problemTitle.textContent = `${company.name} - ${currentProblem.description}`;
  problemImage.src = currentProblem.image;
  problemImage.alt = currentProblem.description;

  // Gerar opções de resposta
  generateQuestionOptions(currentProblem.heuristic);

  // Resetar feedback
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";

  // Configurar temporizador da pergunta
  let questionTimeLeft = 15;
  questionTimeElement.textContent = questionTimeLeft;

  // Limpar temporizador anterior se existir
  if (questionTimer) clearInterval(questionTimer);

  questionTimer = setInterval(() => {
    questionTimeLeft--;
    questionTimeElement.textContent = questionTimeLeft;

    if (questionTimeLeft <= 0) {
      clearInterval(questionTimer);
      handleTimeOut();
    }
  }, 1000);

  // Mostrar a modal
  problemModal.style.display = "flex";
}

// Gerar opções de resposta
function generateQuestionOptions(correctHeuristic) {
  optionsContainer.innerHTML = "";

  // Criar array com heurísticas incorretas (excluindo a correta)
  const incorrectHeuristics = heuristics.filter((h) => h !== correctHeuristic);

  // Embaralhar e pegar 3 heurísticas incorretas
  const shuffled = incorrectHeuristics.sort(() => 0.5 - Math.random());
  const selectedIncorrect = shuffled.slice(0, 3);

  // Combinar com a correta e embaralhar
  const allOptions = [correctHeuristic, ...selectedIncorrect].sort(
    () => 0.5 - Math.random()
  );

  // Criar botões para cada opção
  allOptions.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => handleAnswer(option));
    optionsContainer.appendChild(optionElement);
  });
}

// Manipular resposta do jogador
function handleAnswer(selectedHeuristic) {
  // Parar o temporizador da pergunta
  clearInterval(questionTimer);

  // Verificar se a resposta está correta
  if (selectedHeuristic === currentProblem.heuristic) {
    // Resposta correta
    feedbackElement.textContent = "Correto! +100 pontos";
    feedbackElement.className = "feedback correct";
    score += 100;
  } else {
    // Resposta incorreta
    feedbackElement.textContent = `Incorreto! A heurística correta é: ${currentProblem.heuristic}`;
    feedbackElement.className = "feedback incorrect";
  }

  // Adicionar explicação
  const explanationElement = document.createElement("p");
  explanationElement.textContent = currentProblem.explanation;
  feedbackElement.appendChild(explanationElement);

  // Atualizar pontuação
  updateScore();

  // Fechar a modal após 3 segundos
  setTimeout(() => {
    problemModal.style.display = "none";
    // Reiniciar alertas aleatórios
    startRandomAlerts();
  }, 3000);
}

// Tempo esgotado para responder
function handleTimeOut() {
  feedbackElement.textContent = "Tempo esgotado! Nenhum ponto ganho.";
  feedbackElement.className = "feedback incorrect";

  const explanationElement = document.createElement("p");
  explanationElement.textContent = currentProblem.explanation;
  feedbackElement.appendChild(explanationElement);

  // Fechar a modal após 3 segundos
  setTimeout(() => {
    problemModal.style.display = "none";
    // Reiniciar alertas aleatórios
    startRandomAlerts();
  }, 3000);
}

// Atualizar pontuação
function updateScore() {
  scoreElement.textContent = score;
}

// Atualizar temporizador do jogo
function updateGameTimer() {
  timeLeft--;
  timeElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    endGame();
  }
}

// Finalizar o jogo
function endGame() {
  clearInterval(gameTimer);
  clearInterval(alertInterval);
  if (questionTimer) clearInterval(questionTimer);

  // Mostrar modal de fim de jogo
  finalScoreElement.textContent = score;
  gameOverModal.style.display = "flex";
}

// Event listeners
closeModalBtn.addEventListener("click", () => {
  problemModal.style.display = "none";
  // Reiniciar alertas aleatórios
  startRandomAlerts();
});

restartBtn.addEventListener("click", () => {
  gameOverModal.style.display = "none";
  initGame();
});

// Iniciar o jogo quando a página carregar
window.addEventListener("load", initGame);
