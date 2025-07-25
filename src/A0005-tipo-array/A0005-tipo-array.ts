// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
    return args.reduce((acumulador, valor) => acumulador + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
