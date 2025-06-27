function calcularDobro() {
    const input = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');
    const animacaoDiv = document.getElementById('animacao');
    const valor = Number(input.value);

    // Limpa animação anterior
    animacaoDiv.innerHTML = '';

    if (isNaN(valor) || input.value.trim() === '') {
        resultadoDiv.textContent = 'Por favor, digite um número válido!';
        resultadoDiv.style.color = '#f53803';
        return;
    }

    const dobro = valor * 2;
    resultadoDiv.textContent = `O dobro de ${valor} é ${dobro}!`;
    resultadoDiv.style.color = '#f53803';

    // Animação divertida
    const burst = document.createElement('span');
    burst.className = 'burst';
    burst.textContent = '💥 ' + dobro + ' 💥';
    animacaoDiv.appendChild(burst);

    // Efeito sonoro divertido (opcional)
    // let audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae0b2.mp3');
    // audio.play();
} 