export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }

    getNomeCompleto(): string {
        console.log('Fazendo algo antes');
        const result = super.getNomeCompleto();
        return result + ' Heeey';
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.00-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.00-00', '0001');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.00-00');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
console.log(aluno);
