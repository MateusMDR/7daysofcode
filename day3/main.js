const react = "React é uma biblioteca JavaScript para construção de interfaces de usuário interativas. Ele permite criar componentes reutilizáveis que atualizam automaticamente quando os dados mudam. Com base em uma abordagem de programação declarativa, o React simplifica o desenvolvimento de aplicativos web rápidos e eficientes.";

const vue = "Vue.js é uma linguagem de programação baseada em JavaScript, utilizada para construir interfaces de usuário interativas em aplicativos da web. É conhecida por sua abordagem reativa, modularidade e facilidade de uso. Vue combina recursos dos frameworks Angular e React, tornando-o uma opção popular para o desenvolvimento de aplicativos modernos.";

const c = "C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. Ela combina elementos de C e C++ com recursos avançados de programação, como gerenciamento automático de memória. É amplamente utilizada para desenvolver aplicativos e sistemas para a plataforma .NET, oferecendo alto desempenho e segurança.";

const java = "Java é uma linguagem de programação popular e versátil. Ela é orientada a objetos, possui uma sintaxe elegante e é usada para desenvolver uma ampla gama de aplicativos, desde aplicativos para desktop até aplicativos móveis. É conhecida por sua portabilidade, segurança e extensa biblioteca de funções pré-construídas.";

function front() {
  let front = prompt("Você gostaria de aprender mais sobre React ou Vue?").toLowerCase();

  if (front === 'react') {
    alert(react);
  }
  if (front === 'vue') {
    alert(vue);
  }
}

function back() {
  let back = prompt("Você gostaria de aprender mais sobre C# ou Java?").toLowerCase();

  if (back === 'c#' || back === 'c') {
    alert(c);
  }
  if (back === 'java') {
    alert(java);
  }
}

function abreprompt() {
  let end = prompt("Você gostaria de se especializar em front-end ou back-end?").toLowerCase();

  if (end === 'front-end') {
    front();
  }
  if (end === 'back-end') {
    back();
  }

  let tecnologias = [react, vue, c, java];
  let tecnologiasConhecidas = [];

  while (tecnologiasConhecidas.length < tecnologias.length) {
    let escolha = prompt("Quais outras tecnologias mencionadas você gostaria de conhecer?\nOpções: React, Vue, C#, Java").toLowerCase();

    switch (escolha) {
      case 'react':
        if (!tecnologiasConhecidas.includes(react)) {
          alert(react);
          tecnologiasConhecidas.push(react);
        } else {
          alert("Você já conhece React. Escolha outra opção.");
        }
        break;
      case 'vue':
        if (!tecnologiasConhecidas.includes(vue)) {
          alert(vue);
          tecnologiasConhecidas.push(vue);
        } else {
          alert("Você já conhece Vue. Escolha outra opção.");
        }
        break;
      case 'c#':
      case 'c':
        if (!tecnologiasConhecidas.includes(c)) {
          alert(c);
          tecnologiasConhecidas.push(c);
        } else {
          alert("Você já conhece C#. Escolha outra opção.");
        }
        break;
      case 'java':
        if (!tecnologiasConhecidas.includes(java)) {
          alert(java);
          tecnologiasConhecidas.push(java);
        } else {
          alert("Você já conhece Java. Escolha outra opção.");
        }
        break;
      default:
        alert("Tecnologia não reconhecida. Por favor, escolha uma das opções mencionadas.");
        break;
    }
  }
}