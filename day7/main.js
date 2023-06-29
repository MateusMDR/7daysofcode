function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Erro: Divisão por zero";
    }
  }
  function calcular(operacao) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
      resultado = "Digite dois números válidos";
    } else {
      switch (operacao) {
        case "soma":
          resultado = somar(num1, num2);
          break;
        case "subtracao":
          resultado = subtrair(num1, num2);
          break;
        case "multiplicacao":
          resultado = multiplicar(num1, num2);
          break;
        case "divisao":
          resultado = dividir(num1, num2);
          break;
        default:
          resultado = "Operação inválida";
      }
    }

    document.getElementById("resultado").innerHTML = resultado;
  }