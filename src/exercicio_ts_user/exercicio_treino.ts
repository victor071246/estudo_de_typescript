interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class Livro implements Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public autor: string,
    ) {}
}

class Eletronico implements Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public garantia: number,
    ) {}
}

class Carrinho<T extends Produto> {
    private items: T[] = [];

    adicionar(item: T): void {
        this.items.push(item);
    }

    remover(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }

    listar(): T[] {
        return this.items;
    }

    total(): number {
        return this.items.reduce((acc, item) => acc + item.preco, 0);
    }
}

// --- Teste ---
const carrinho = new Carrinho<Produto>();

carrinho.adicionar(new Livro(1, 'Clean Code', 120, 'Robert C. Martin'));
carrinho.adicionar(new Eletronico(2, 'Teclado Mecânico', 250, 24));

console.log(carrinho.listar());
console.log('Total:', carrinho.total());

carrinho.remover(1);
console.log('Após remover livro:', carrinho.listar());
console.log('Total:', carrinho.total());
