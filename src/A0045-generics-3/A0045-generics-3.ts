interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 30,
};

const aluno3: PessoaProtocolo2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

console.log(aluno1, aluno2);
