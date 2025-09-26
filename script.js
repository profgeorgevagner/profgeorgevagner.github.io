const levelSpan = document.getElementById('tank-level');

async function fetchTankLevel() {
    try {
        // Usa um parâmetro para evitar o cache do navegador e sempre pegar o valor mais recente
        const response = await fetch('data.json?t=' + new Date().getTime());
        const data = await response.json();
        
        levelSpan.textContent = data.level;

    } catch (error) {
        levelSpan.textContent = "Erro";
        console.error("Erro ao buscar dados:", error);
    }
}

// Verifica por atualizações a cada 2 segundos.
setInterval(fetchTankLevel, 2000); 

// Carrega o valor inicial
fetchTankLevel();
