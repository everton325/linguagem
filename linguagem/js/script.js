function dobro(numero) {
    return numero * 2;
}
function triplo(numero) {
    return numero * 3;
}
function mostrarResultado() {
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    const valor = input.value.trim();
    const operacao = document.querySelector('input[name="operacao"]:checked').value;

    // Validação: campo vazio, não numérico ou negativo
    if (valor === '' || isNaN(Number(valor)) || Number(valor) < 0) {
        resultado.style.display = 'block';
        resultado.textContent = 'Por favor, digite um número válido e positivo!';
        resultado.style.color = '#d7263d';
        return;
    }
    resultado.style.display = 'block';
    resultado.style.color = '#4a90e2';
    const num = Number(valor);
    if (operacao === 'dobro') {
        resultado.textContent = `O dobro mágico de ${num} é ${dobro(num)}! ✨`;
    } else {
        resultado.textContent = `O triplo fantástico de ${num} é ${triplo(num)}! 🚀`;
    }
} 