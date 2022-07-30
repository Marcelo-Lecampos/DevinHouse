// Exercício 6
// Dentro da classe Pedido, crie outro método, chamado calcularTotal, que deve iterar sobre a listaProdutos e retornar o valor total do pedido.

// Lembre-se de multiplicar a quantidade de cada produto pelo seu valor quando realizar a soma (quantidade e valor são propriedades da classe Produto!).
class Produto {
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}

class Pedido {
  constructor(numeroPedido, nomeCliente, produto) {
    this.numeroPedido = numeroPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
    this.adicionarProduto(produto);
  }
  adicionarProduto(produto) {
    this.listaProdutos.push(produto);
  }
    calcularTotal() {
    let total = 0;
    this.listaProdutos.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return total;
  }
}
const produtoQueijo = new Produto("Queijo", 10, true, 2);
console.log(produtoQueijo);
const pedidoOne= new Pedido(1, "João", produtoQueijo);
console.log(pedidoOne)
console.log(pedidoOne.calcularTotal())




