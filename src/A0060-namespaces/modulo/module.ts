/* eslint-disable @typescript-eslint/no-namespace*/
namespace MeuNamespace {
    export const nomeDoNamespace = 'Luiz';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Luiz');
    console.log(pessoaDoNamespace);

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Luiz';
    }
}

const constDoNamespace = 'Valor da const do namespace';
