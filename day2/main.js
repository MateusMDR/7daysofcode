function abreprompt(){
    const nome = prompt("Qual seu nome?");
    const idade = prompt("Quantos anos você tem?");
    const prog = prompt("Qual linguagem de programação você está estudando?");

    const msg = `Olá ${nome}! Você com ${idade} anos já está aprendendo ${prog}, que legal!`;
    alert(msg);

    let question = prompt("Você está gostando de estudar " + prog + "?").toLowerCase();

    if (question == "sim"){
        alert('Muito bem! Continue estudando e você terá muito sucesso.')
    }
    else{
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    }
}