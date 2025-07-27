type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa1 = TemNome | TemSobrenome | TemIdade; // OR
type Pessoa2 = TemNome & TemSobrenome & TemIdade; // OR

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa2 = {
    nome: 'Victor',
    sobrenome: 'Dadério',
    idade: 22,
};

console.log(pessoa);

// Module mode
export { pessoa };
