// Armazena os itens em diferentes categorias
const listaDeCompras = {
    laticinios: [],
    hortifruti: [],
    congelados: [],
    doces: [],
    padaria: [],
    carnes: [],
    bebidas: []
  };
//Função principal, acionada quando o botão é clicado
  function adicionarItem() {
    const resposta = prompt('Deseja adicionar uma comida na lista de compras? (sim/não)');
//Verifica a resposta
    if (resposta.toLowerCase() === 'sim') {
      const comida = prompt('Digite o nome da comida:');
      const categoria = prompt('Em qual categoria essa comida se encaixa?\nOpções: laticinios, hortifruti, congelados, doces, padaria, carnes, bebidas');
//Se a categoria existir o item é adicionado na categoria correspondente
      if (listaDeCompras.hasOwnProperty(categoria)) {
        listaDeCompras[categoria].push(comida);
      } else {
        alert('Categoria inválida. A comida não será adicionada à lista.');
      }
//Repete o ciclo
      adicionarItem();
//Termina o ciclo se o usuário responde não
    } else {
      gerarListaCompras();
    }
  }
//Busca o elemento `<div>` com o ID `lista-compras` e armazena na variavel
  function gerarListaCompras() {
    const listaComprasElement = document.getElementById('lista-compras');
//Percorre as categorias do objeto listaDeCompras para ver se tem itens armazenados
    for (const categoria in listaDeCompras) {
      const itens = listaDeCompras[categoria];
//Se houver itens, cria um elemento `<p>` para exibir os itens
      if (itens.length > 0) {
        const categoriaElement = document.createElement('p');
        categoriaElement.innerHTML = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${itens.join(', ')}`;
//Elemento `<p>` é adicionado como filho ao elemento `listaComprasElement` para que ele seja exibido no HTML
        listaComprasElement.appendChild(categoriaElement);
      }
    }
  }