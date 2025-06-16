document.addEventListener('DOMContentLoaded', () => {
    const gerarPalpiteBtn = document.getElementById('gerar-palpite');
    const numerosGeradosDiv = document.getElementById('numeros-gerados');

    gerarPalpiteBtn.addEventListener('click', () => {
        const numeros = gerarNumerosMegaSena();
        exibirNumeros(numeros);
    });

    /**
     * Gera 6 números únicos aleatórios para a Mega-Sena.
     * Os números estão no intervalo de 1 a 60.
     * @returns {Array<number>} Um array com 6 números da Mega-Sena.
     */
    function gerarNumerosMegaSena() {
        const numeros = new Set(); // Usamos Set para garantir números únicos
        while (numeros.size < 6) {
            // Gera um número entre 1 e 60 (inclusive)
            const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
            numeros.add(numeroAleatorio);
        }
        // Converte o Set de volta para um Array e ordena para melhor visualização
        return Array.from(numeros).sort((a, b) => a - b);
    }

    /**
     * Exibe os números gerados na interface do usuário.
     * Cada número é colocado em um elemento 'div' com a classe 'numero-bola'.
     * @param {Array<number>} numeros O array de números a serem exibidos.
     */
    function exibirNumeros(numeros) {
        numerosGeradosDiv.innerHTML = ''; // Limpa os números anteriores
        numeros.forEach(numero => {
            const numeroBola = document.createElement('div');
            numeroBola.classList.add('numero-bola');
            numeroBola.textContent = String(numero).padStart(2, '0'); // Garante 2 dígitos (ex: 05, 12)
            numerosGeradosDiv.appendChild(numeroBola);
        });
    }

    // Opcional: Gerar um palpite inicial ao carregar a página
    // gerarPalpiteBtn.click();
});