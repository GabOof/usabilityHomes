import { companies } from "./data/problems.js";

console.log("Script carregado");
console.log("Número de empresas:", companies.length);
companies.forEach((company) => {
  console.log(`Empresa: ${company.name}, Imagem: ${company.image}`);
});

// Variáveis do jogo
let score = 0;
let elapsedTime = 0;
let elapsedTimer;
let questionTimer;
let currentProblem = null;
let alertCompanyId = null;
let alertInterval;
let questionAnswered = false;

// Variáveis para o fluxo de perguntas sequenciais por empresa
let currentCompanyBeingQuestioned = null; // Armazena a empresa atual que está respondendo
let currentProblemIndexInSequence = 0; // Controla qual problema da empresa está sendo exibido

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
const closeQuestionBtn = document.getElementById("closeQuestionBtn");
const QUESTION_TIMES = [40, 30, 20]; // TEMPOS: 1ª pergunta: 40s, 2ª: 30s, 3ª: 20s

// Pontuação por empresa
const companyResultsSummaryElement = document.getElementById("companyResultsSummary");


// Atualizar tempo decorrido
function updateElapsedTime() {
  timeElement.textContent = elapsedTime;
}

// Inicializar o jogo
function initGame() {
  score = 0;
  elapsedTime = 0;
  updateScore();
  updateElapsedTime();

  // Resetar o estado de "concluído" das empresas e criar os prédios
  buildingsContainer.innerHTML = "";
  companies.forEach((company) => {
    // Adiciona a propriedade isCompleted e correctAnswers se não existirem
    company.isCompleted = false;
    company.correctAnswers = 0; // Inicializa contador de respostas corretas para cada empresa
    const buildingElement = document.createElement("div");
    buildingElement.className = "building";
    buildingElement.id = company.id;
    buildingElement.innerHTML = `<img src="${company.image}" alt="${company.name}">`; 
    buildingElement.addEventListener("click", () =>
      handleBuildingClick(company.id)
    );
    buildingsContainer.appendChild(buildingElement);
  });

  // Limpar estados das perguntas sequenciais
  currentCompanyBeingQuestioned = null;
  currentProblemIndexInSequence = 0;

  // Iniciar temporizador do jogo
  elapsedTimer = setInterval(() => {
    elapsedTime++;
    updateElapsedTime();
  }, 1000);

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

  // Filtrar empresas que ainda não foram concluídas
  const availableCompanies = companies.filter((c) => !c.isCompleted);

  if (availableCompanies.length === 0) {
    // Todas as empresas foram concluídas, fim de jogo
    endGame();
    return;
  }

  // Escolher uma empresa aleatória entre as disponíveis
  const randomIndex = Math.floor(Math.random() * availableCompanies.length);
  alertCompanyId = availableCompanies[randomIndex].id;

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

  // Verificar se a empresa está com alerta E não está concluída
  if (alertElement && !companies.find(c => c.id === companyId).isCompleted) {
    // Remover o alerta
    buildingElement.removeChild(alertElement);
    alertCompanyId = null;

    // Parar o intervalo de alertas temporariamente
    clearInterval(alertInterval);

    // Definir a empresa atual e iniciar a sequência de problemas
    currentCompanyBeingQuestioned = companies.find((c) => c.id === companyId);
    currentProblemIndexInSequence = 0; // Começa sempre do primeiro problema da sequência
    showNextProblemInSequence();
  }
}

// Mostra o próximo problema na sequência para a empresa atual
function showNextProblemInSequence() {
  if (currentCompanyBeingQuestioned && currentProblemIndexInSequence < currentCompanyBeingQuestioned.problems.length) {
    currentProblem = currentCompanyBeingQuestioned.problems[currentProblemIndexInSequence];

    // Atualizar a modal com o problema
    problemTitle.textContent = `${currentCompanyBeingQuestioned.name} - ${currentProblem.description}`;
    problemImage.src = currentProblem.image;
    problemImage.alt = currentProblem.description;

    // Gerar opções de resposta usando as opções pré-definidas do problema
    generateQuestionOptions(currentProblem.options);

    // Resetar feedback
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";
    closeQuestionBtn.style.display = "none"; // Botão de fechar aparece APENAS após resposta

    // Configurar temporizador da pergunta
    let questionTimeLeft = QUESTION_TIMES[currentProblemIndexInSequence] || 15;
    questionTimeElement.textContent = questionTimeLeft;

    // Limpar temporizador anterior se existir
    if (questionTimer) clearInterval(questionTimer);

    questionAnswered = false; // Resetar para a nova pergunta
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
  } else {
    // Todos os problemas da empresa foram respondidos
    markCompanyAsCompleted(currentCompanyBeingQuestioned.id);
    currentCompanyBeingQuestioned = null; // Limpa a referência da empresa
    currentProblemIndexInSequence = 0; // Reseta o índice
    closeProblemModal(); // Fecha a modal
    startRandomAlerts(); // Reinicia os alertas para outras empresas
    checkEndGame(); // Verifica se o jogo terminou
  }
}

// Gerar opções de resposta usando as opções pré-definidas do problema
function generateQuestionOptions(problemOptions) { // Agora recebe o array de opções diretamente
  optionsContainer.innerHTML = "";

  // As opções já vêm prontas no array problemOptions, basta embaralhá-las
  const allOptions = problemOptions.sort(
    () => 0.5 - Math.random()
  );

  // Criar botões para cada opção
  allOptions.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    // Ao clicar, passamos a opção selecionada e a heurística CORRETA do problema para handleAnswer
    optionElement.addEventListener("click", () => handleAnswer(option, currentProblem.heuristic));
    optionsContainer.appendChild(optionElement);
  });
}


// Manipular resposta do jogador
function handleAnswer(selectedHeuristic, correctHeuristic) {
  if (questionAnswered) return; // Impede múltiplas respostas
  questionAnswered = true;

  // Parar o temporizador da pergunta
  clearInterval(questionTimer);
  const options = document.querySelectorAll(".option");
  options.forEach((btn) => (btn.style.pointerEvents = "none")); // Desabilita cliques

  // Verificar se a resposta está correta
  if (selectedHeuristic === correctHeuristic) {
    feedbackElement.textContent = "Correto! +100 pontos";
    feedbackElement.className = "feedback correct";
    score += 100;
    // Incrementa o contador de respostas corretas da empresa atual
    if (currentCompanyBeingQuestioned) {
      currentCompanyBeingQuestioned.correctAnswers++;
    }
  } else {
    feedbackElement.textContent = `Incorreto! A heurística correta é: ${correctHeuristic}`;
    feedbackElement.className = "feedback incorrect";
    score = Math.max(score - 200, 0); // Garante que a pontuação não seja negativa
  }

  // Adicionar explicação
  const explanationElement = document.createElement("p");
  explanationElement.textContent = currentProblem.explanation;
  feedbackElement.appendChild(explanationElement);

  updateScore();
  closeQuestionBtn.style.display = "block"; // Mostra o botão para avançar
}

// Tempo esgotado para responder
function handleTimeOut() {
  if (questionAnswered) return; // Impede múltiplas execuções se o usuário clicar após o timeout
  questionAnswered = true;

  clearInterval(questionTimer);
  const options = document.querySelectorAll(".option");
  options.forEach((btn) => (btn.style.pointerEvents = "none"));

  feedbackElement.textContent = "Tempo esgotado! Nenhum ponto ganho.";
  feedbackElement.className = "feedback incorrect";

  const explanationElement = document.createElement("p");
  explanationElement.textContent = currentProblem.explanation;
  feedbackElement.appendChild(explanationElement);

  closeQuestionBtn.style.display = "block"; // Mostra o botão para avançar
}

// Atualizar pontuação
function updateScore() {
  scoreElement.textContent = score;
}

// Função para marcar a empresa como concluída
function markCompanyAsCompleted(companyId) {
  const company = companies.find(c => c.id === companyId);
  if (company) {
    company.isCompleted = true;
    const buildingElement = document.getElementById(companyId);
    buildingElement.classList.add('completed'); 
  }
}

// Função para fechar a modal do problema
function closeProblemModal() {
  problemModal.style.display = "none";
  closeQuestionBtn.style.display = "none";
  // Resetar estados da modal para a próxima pergunta
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
}

// Verifica se o jogo deve terminar (todas as empresas concluídas ou pontuação alvo)
function checkEndGame() {
  const allCompaniesCompleted = companies.every(c => c.isCompleted);
  if (score >= 1000 || allCompaniesCompleted) {
    endGame();
  }
}

// Finalizar jogo
function endGame() {
  clearInterval(elapsedTimer);
  clearInterval(alertInterval);
  if (questionTimer) clearInterval(questionTimer);

  // Mostrar modal de fim de jogo
  finalScoreElement.textContent = score;

  // Exibir resumo de respostas por empresa ---
  companyResultsSummaryElement.innerHTML = ""; // Limpa qualquer conteúdo anterior
  const summaryTitle = document.createElement("h3");
  summaryTitle.textContent = "Resultados por Empresa:";
  companyResultsSummaryElement.appendChild(summaryTitle);

  companies.forEach(company => {
    const totalProblems = company.problems.length;
    const resultText = `${company.name}: ${company.correctAnswers}/${totalProblems} respostas corretas`;
    const pElement = document.createElement("p");
    pElement.textContent = resultText;
    companyResultsSummaryElement.appendChild(pElement);
  });
  // ----------------------------------------------------

  gameOverModal.style.display = "flex";
}

// Listeners
// O botão "Fechar" da modal esconde a modal e NÃO reinicia alertas
closeModalBtn.addEventListener("click", () => {
  closeProblemModal();
  // Se o usuário fechar a modal no meio da sequência, a sequência é interrompida
  currentCompanyBeingQuestioned = null; // Limpa a empresa atual
  currentProblemIndexInSequence = 0; // Reseta o índice
  startRandomAlerts();
  checkEndGame();
});

// O botão "Continuar/Próximo" agora avança na sequência ou finaliza a empresa
closeQuestionBtn.addEventListener("click", () => {
  currentProblemIndexInSequence++; // Avança para o próximo problema
  showNextProblemInSequence(); // Tenta mostrar o próximo problema
});

restartBtn.addEventListener("click", () => {
  gameOverModal.style.display = "none";
  initGame();
});

// Iniciar o jogo quando a página carregar
window.addEventListener("load", initGame);

document.getElementById("exitBtn").addEventListener("click", () => {
  const confirmar = confirm("Tem certeza que deseja sair do jogo?");
  if (confirmar) {
    window.location.href = "index.html"; // redireciona para a tela principal
  }
});

document.getElementById("exitBtnGameOver").addEventListener("click", () => {
  window.location.href = "index.html";
});