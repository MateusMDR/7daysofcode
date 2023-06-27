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
  
  // Função principal, acionada quando o botão é clicado
  function adicionarItem() {
    const resposta = prompt('Deseja adicionar uma comida na lista de compras? (sim/não)');
  
    // Verifica a resposta
    if (resposta.toLowerCase() === 'sim') {
      const comida = prompt('Digite o nome da comida:');
      const categoria = prompt('Em qual categoria essa comida se encaixa?\nOpções: laticinios, hortifruti, congelados, doces, padaria, carnes, bebidas');
  
      // Se a categoria existir o item é adicionado na categoria correspondente
      if (listaDeCompras.hasOwnProperty(categoria)) {
        listaDeCompras[categoria].push(comida);
      } else {
        alert('Categoria inválida. A comida não será adicionada à lista.');
      }
  
      // Repete o ciclo
      adicionarItem();

      // Verifica se a respsota não é inválida e se for o processo é reiniciado
    } else if (resposta.toLowerCase() === 'não') {
      gerarListaCompras();
    } else {
      alert('Resposta inválida. Tente novamente.');
      adicionarItem();
    }
  }
  
  // Busca o elemento <div> com o ID lista-compras e armazena na variável
  function gerarListaCompras() {
    const listaComprasElement = document.getElementById('lista-compras');
    listaComprasElement.innerHTML = ''; // Limpa o conteúdo atual da lista
  
    // Percorre as categorias do objeto listaDeCompras para ver se tem itens armazenados
    for (const categoria in listaDeCompras) {
      const itens = listaDeCompras[categoria];
  
      // Se houver itens, cria um elemento <p> para exibir os itens
      if (itens.length > 0) {
        const categoriaElement = document.createElement('p');
        categoriaElement.innerHTML = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${itens.join(', ')}`;
  
        // Elemento <p> é adicionado como filho ao elemento listaComprasElement para que ele seja exibido no HTML
        listaComprasElement.appendChild(categoriaElement);
      }
    }
  }
  
  // Função para remover um item da lista de compras
  function removerItem() {
    const item = prompt('Digite o nome do item que deseja remover:');
  
    // Percorre as categorias da lista de compras
    for (const categoria in listaDeCompras) {
      const itens = listaDeCompras[categoria];
      const index = itens.indexOf(item);
  
      // Verifica se o item existe na categoria
      if (index !== -1) {
        // Remove o item da categoria
        itens.splice(index, 1);
        alert('Item removido com sucesso!');
        atualizarListaCompras(); // Atualiza a exibição da lista na página HTML
        return; // Encerra a função após remover o item
      }
    }
  
    // Caso o item não seja encontrado em nenhuma categoria
    alert('O item não existe na lista de compras.');
  }
  
  // Função para atualizar a exibição da lista de compras na página HTML
  function atualizarListaCompras() {
    const listaComprasElement = document.getElementById('lista-compras');
    listaComprasElement.innerHTML = ''; // Limpa o conteúdo atual da lista
  
    // Percorre as categorias do objeto listaDeCompras para ver se tem itens armazenados
    for (const categoria in listaDeCompras) {
      const itens = listaDeCompras[categoria];
  
      // Se houver itens, cria um elemento <p> para exibir os itens
      if (itens.length > 0) {
        const categoriaElement = document.createElement('p');
        categoriaElement.innerHTML = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${itens.join(', ')}`;
  
        // Elemento <p> é adicionado como filho ao elemento listaComprasElement para que ele seja exibido no HTML
        listaComprasElement.appendChild(categoriaElement);
      }
    }
  }
  