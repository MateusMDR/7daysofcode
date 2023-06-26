function abreprompt() {
    // Gera um número aleatório entre 1 e 10
    const numeroInicial = Math.floor(Math.random() * 10) + 1;
    let tentativas = 3;
    while (tentativas > 0) {
    // Transforma a resposta de uma String para um número inteiro
    const chute = parseInt(prompt("Digite um número de 1 a 10:"));

    if (chute === numeroInicial) {
    alert("Parabéns! Você acertou o número!");
    break;
     } 
    else {
    tentativas--;
    if (tentativas > 0) {
      alert(`Você errou! Restam ${tentativas} tentativas.`);
    }
    else {
      alert(`Você errou! Suas tentativas acabaram. O número era ${numeroInicial}.`);
            }       
        }
    }
}