function mostrarSecao(id, linkClicado){
  document.querySelectorAll('main section').forEach(sec =>{
    sec.classList.remove("visivel")
  });
  document.getElementById(id).classList.add('visivel');
  linkClicado.classList.add('ativo');
}


function gerarPedidoConsolidado() {
  const allQuantities = document.querySelectorAll('.quantity');
  const pedidoDiv = document.getElementById('pedidoConsolidado');
  let pedidoHTML = '<h3>Seu Pedido:</h3>';
  let total = 0;
  let itensSelecionados = 0;

  allQuantities.forEach(input => {
    const quantidade = parseInt(input.value);
    if (quantidade > 0) {
      const nome = input.dataset.name;
      const preco = parseFloat(input.dataset.price);
      const subtotal = preco * quantidade;
      total += subtotal;
      itensSelecionados++;
      pedidoHTML += `<p>${nome} x ${quantidade} = R$ ${subtotal.toFixed(2)}</p>`;
    }
  });

  if (itensSelecionados === 0) {
    pedidoDiv.innerHTML = '<p>Nenhum item selecionado.</p>';
  } else {
    pedidoHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
    pedidoDiv.innerHTML = pedidoHTML;
  }
}

document.getElementById('btnGerarPedido').addEventListener('click', gerarPedidoConsolidado);

document.getElementById('btnEnviarPedido').addEventListener('click', function() {
  const pedidoDiv = document.getElementById('pedidoConsolidado');
  if (pedidoDiv.innerHTML.includes('Nenhum item selecionado')) {
    alert('Por favor, selecione ao menos um item antes de enviar o pedido.');
  } else {
    alert('Pedido enviado com sucesso! Obrigado pela preferência.');

  }
});
