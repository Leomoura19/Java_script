function validateForm() {
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    const messageElement = document.getElementById('message');

    if (campoB > campoA) {
        messageElement.textContent = 'Formulário válido! Campo B é maior que Campo A.';
        messageElement.className = 'message valid';
    } else {
        messageElement.textContent = 'Formulário inválido. Campo B deve ser maior que Campo A.';
        messageElement.className = 'message invalid';
    }
}