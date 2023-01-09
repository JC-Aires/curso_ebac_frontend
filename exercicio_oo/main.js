function Driver(nomeDoPiloto, categoria) {
    this.nome = nomeDoPiloto;
    this.categoria = categoria;
    
}

function Car(nomeDoPiloto, categoria, numero, modelo) {
    this.numero = numero;
    this.modelo = modelo;

    Driver.call(this, nomeDoPiloto, categoria);
}

function Team(nomeDoPiloto, categoria, equipe, posicaoNaEquipe) {
    this.equipe = equipe;
    this.posicaoNaEquipe = posicaoNaEquipe;

    Driver.call(this, nomeDoPiloto, categoria);
}

const TeamRC = new Team('Daniel Serra', 'Stock Car', 'RC',  1);
const TeamFullTime = new Team('Rubens Barrichello', 'Stock Car', 'Full Time', 1);
const TeamKtf = new Team('Rodrigo Baptista', 'Stock Car', 'KTF',  2);

