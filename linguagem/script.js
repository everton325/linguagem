function dobro(numero) {
    return numero * 2;
}
function triplo(numero) {
    return numero * 3;
}
function mostrarResultado() {
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    const valor = Number(input.value);
    const operacao = document.querySelector('input[name="operacao"]:checked').value;
    if (isNaN(valor)) {
        resultado.style.display = 'block';
        resultado.textContent = 'Por favor, digite um número válido!';
        resultado.style.color = '#d7263d';
        return;
    }
    resultado.style.display = 'block';
    resultado.style.color = '#f53803';
    if (operacao === 'dobro') {
        resultado.textContent = `O dobro mágico de ${valor} é ${dobro(valor)}! ✨`;
    } else {
        resultado.textContent = `O triplo fantástico de ${valor} é ${triplo(valor)}! 🚀`;
    }
} 