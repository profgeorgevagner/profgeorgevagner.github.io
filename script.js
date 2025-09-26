// Seleciona o elemento na página onde o valor será exibido
const levelSpan = document.getElementById('tank-level');

// Função para gerar um número aleatório e atualizar a página
function updateTankLevel() {
    // Gera um número aleatório de 0 a 100
    const newLevel = Math.floor(Math.random() * 101);
    
    // Atualiza o texto na página com o novo valor
    levelSpan.textContent = newLevel;
}

// ==========================================================
// AQUI VOCÊ CONTROLA O TEMPO
// ==========================================================
// Define com que frequência (em milissegundos) o número deve mudar.
// 3000 ms = 3 segundos. Mude este valor como preferir.
const updateInterval = 3000; 

// Chama a função pela primeira vez para mostrar um valor inicial
updateTankLevel();

// Configura para que a função seja chamada repetidamente no intervalo definido
setInterval(updateTankLevel, updateInterval);
