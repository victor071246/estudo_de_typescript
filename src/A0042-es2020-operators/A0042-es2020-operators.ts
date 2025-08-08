// Encademamento opcional e Operador de coalescência nula
type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'O título',
    texto: 'O texto',
    // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data;');
console.log(undefined ?? ' 2, não existe nada ');
console.log(null ?? ' 2, não existe nada ');
console.log(false ?? ' 2, não existe nada ');
console.log(0 ?? ' 2, não existe nada ');
console.log('' ?? ' 2, não existe nada ');
