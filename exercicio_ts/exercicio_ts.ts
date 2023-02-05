function multiplicacao(fator1: number, fator2: number): number {
    return fator1 * fator2;
}

function saudacao(nome: string): string {
    return 'Olá ' + nome;
}

const resultadoDaMultiplicacao = multiplicacao(13,7);
const saudacaoJose = saudacao('Jose');

console.log(resultadoDaMultiplicacao);
console.log(saudacaoJose);