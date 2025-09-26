// Seleciona o elemento na página onde o valor será exibido
const levelSpan = document.getElementById('tank-level');

// Função para buscar os dados e atualizar a página
async function fetchTankLevel() {
    try {
        // Busca o arquivo data.json. O 'cache: "no-store"' garante que sempre pegamos a versão mais recente.
        const response = await fetch('data.json', { cache: 'no-store' });
        const data = await response.json();
        
        // Atualiza o texto na página com o valor do nível
        levelSpan.textContent = data.level;

    } catch (error) {
        // Se der erro ao buscar o arquivo, exibe 'Erro'
        levelSpan.textContent = "Erro";
        console.error("Erro ao buscar dados:", error);
    }
}

// Define com que frequência (em milissegundos) a página deve verificar por atualizações.
// 5000 ms = 5 segundos. Você pode aumentar este valor se a atualização for menos frequente.
const updateInterval = 5000; 

// Chama a função pela primeira vez para carregar o valor inicial assim que a página abre
fetchTankLevel();

// Configura para que a função seja chamada repetidamente no intervalo definido
setInterval(fetchTankLevel, updateInterval);
