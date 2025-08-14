function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
        cor: string;
        nome: string;

        constructor(...args: any[]) {
            super(...args);
            this.nome = this.inverte(args[0]);
            this.cor = this.inverte(args[1]);
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join('');
        }
    };
}

@inverteNomeECor
export class Animal {
    constructor(
        public name: string,
        public cor: string,
    ) {
        console.log('Sou a classe');
    }
}

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
