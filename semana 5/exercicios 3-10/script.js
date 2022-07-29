
class Produto{
    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome
        this.preco = preco
        this.emEstoque = emEstoque
        this.quantidade = quantidade
    }
}
// Exercício 4

// Crie uma classe Pedido, com as propriedades numeroPedido, dataPedido, estaPago, listaProdutos e nomeCliente.

// Utilize o método construtor para que, a cada instancia dessa classe, um número do pedido e o nome do cliente seja informado, a dataPedido seja a data atual ( new Date( ).toLocaleDateString( ) ), o estaPago seja falso e a listaProdutos seja um array vazio.

class Pedido{
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido
        this.nomeCliente = nomeCliente
        this.dataPedido = new Date().toLocaleDateString()
        this.estaPago = false
        this.listaProdutos = []
    }
}