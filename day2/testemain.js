function mostraprompt(){
    
    let nome = prompt ("Qual seu nome", "")
    if (nome != null){
        document.getElementById("demo").innerHTML =
        "Olá, " + nome + "! Tudo bem?";
    }
}