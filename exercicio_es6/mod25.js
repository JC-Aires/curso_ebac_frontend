let boletim = [
    {
        "nome": "José Carlos",
        "nota": 8
    }, 
    {
        "nome": "Denise",
        "nota": 9
    }, 
    {
        "nome": "Rodrigo",
        "nota": 5
    },
    {
        "nome": "Pedro",
        "nota": 4
    },
    {
        "nome": "Ana Laura",
        "nota": 6
}];

let aprovados = boletim.filter(aluno => aluno.nota >= 6);

aprovados.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} foi aprovado com a nota: ${aluno.nota}.`);
});