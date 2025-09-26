// Seleciona o elemento na página onde o valor será exibido
const levelSpan = document.getElementById('tank-level');

// --- Nossas variáveis de controle ---
let currentLevel = 0;   // Começa com o tanque em 0
let direction = 1;      // Começa enchendo (1 = enchendo, -1 = esvaziando)

// Função que atualiza o nível do tanque
function updateTankLevel() {
    // 1. Atualiza o texto na tela com o valor atual
    levelSpan.textContent = currentLevel;

    // 2. Verifica se atingiu os limites para inverter a direção
    if (currentLevel >= 100) {
        direction = -1; // Se chegou em 100, começa a esvaziar
    } else if (currentLevel <= 0) {
        direction = 1;  // Se chegou em 0, começa a encher
    }

    // 3. Calcula o próximo nível somando a direção (ou subtraindo, se direction for -1)
    currentLevel += direction;
}

// ==========================================================
// AQUI VOCÊ CONTROLA A VELOCIDADE
// ==========================================================
// Define a velocidade da animação em milissegundos.
// Valores menores = mais rápido. Valores maiores = mais lento.
// 100 ms = 0.1 segundos por passo.
const updateInterval = 9000;

// Configura para que a função `updateTankLevel` seja chamada repetidamente,
// criando a animação de encher e esvaziar.
setInterval(updateTankLevel, updateInterval);
