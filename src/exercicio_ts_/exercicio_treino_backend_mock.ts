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

class ProdutoRepository {
    private produtos: Produto[] = [];
    private contadorId = 1;

    create(produto: Omit<Produto, 'id'>): Produto {
        const novo = { ...produto, id: this.contadorId++ };
        this.produtos.push(novo);
        return novo;
    }

    findAll(): Produto[] {
        return this.produtos;
    }

    findById(id: number): Produto | undefined {
        return this.produtos.find((p) => p.id === id);
    }

    update(id: number, dados: Partial<Omit<Produto, 'id'>>): Produto | undefined {
        const produto = this.findById(id);
        if (!produto) return undefined;
        Object.assign(produto, dados);
        return produto;
    }

    delete(id: number): boolean {
        const index = this.produtos.findIndex((p) => p.id === id);
        if (index === -1) return false;
        this.produtos.splice(index, 1);
        return true;
    }
}
class PedidoRepository {
    private pedidos: Pedido[] = [];
    private contadorId = 1;

    create(pedido: Omit<Pedido, 'id' | 'criadoEm'>): Pedido {
        const novo: Pedido = { ...pedido, id: this.contadorId++, criadoEm: new Date() };
        this.pedidos.push(novo);
        return novo;
    }

    findAll(): Pedido[] {
        return this.pedidos;
    }
}

class LojaService {
    constructor(
        private produtoRepo: ProdutoRepository,
        private pedidoRepo: PedidoRepository,
    ) {}

    createProduto(nome: string, preco: number, estoque: number) {
        return this.produtoRepo.create({ nome, preco, estoque });
    }

    listProdutos(): Produto[] {
        return this.produtoRepo.findAll();
    }

    updateProduto(id: number, dados: Partial<Omit<Produto, 'id'>>) {
        return this.produtoRepo.update(id, dados);
    }

    deleteProduto(id: number) {
        return this.produtoRepo.delete(id);
    }

    createPedido(itens: { produtoId: number; quantidade: number }[]): Pedido | string {
        let total = 0;
    }
}
