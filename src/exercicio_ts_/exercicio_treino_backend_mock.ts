interface Produto {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
}

interface Pedido {
    id: number;
    produtos: { produtoId: number; quantidade: number }[];
    total: number;
    criadoEm: Date;
}

const loja = new LojaController();

loja.createProduto('Notebook', 3000, 10);
loja.createProduto('Mouse', 100, 50);

console.log(loja.listProdutos());

loja.createPedido([
    { produtoId: 1, quantidade: 2 },
    { produtoId: 2, quantidade: 5 },
]);

console.log(loja.listPedidos());

console.log(loja.getFaturamentoTotal());

console.log(loja.getProdutoMaisVendido());
