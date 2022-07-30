class Produto {
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}
// Exercício 5

// Dentro da classe Pedido, adicione um método adicionarProduto, que recebe como argumento um objeto do tipo Produto ( caso deseje, você pode realizar uma validação utilizando o operador instanceof).

// Este método deve adicionar (push) à propriedade listaProdutos o produto passado como argumento.

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
}


const teste= new Pedido(1, "João", "queijo");

console.log(teste instanceof Pedido)

console.log(teste); 