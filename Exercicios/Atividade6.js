const idade = 21;
let tipo = '';
if (idade >= 0 && idade < 15) {
    tipo = 'Criança';
} else if (idade >= 15 && idade < 30) {
    tipo = 'Jovem';
} else if (idade >= 30 && idade < 60) {
    tipo = 'Adulto';
} else if (idade >= 60) {
    tipo = 'Idoso';
}

console.log(tipo);

class Pessoa {
    constructor(idadePessoa){
        this.idade = idadePessoa
    }

    verificarIdade() {
        let tipo = '';
        if (this.idade >= 0 && this.idade < 15) {
            tipo = 'Criança';
        } else if (this.idade >= 15 && this.idade < 30) {
            tipo = 'Jovem';
        } else if (this.idade >= 30 && this.idade < 60) {
            tipo = 'Adulto';
        } else if (this.idade >= 60) {
            tipo = 'Idoso';
    }

    console.log(tipo);

    }
}

console.log('Utilizando Classe');
const pessoa = new Pessoa(21);
pessoa.verificarIdade();

const pessoa2 = new Pessoa(54);
pessoa2.verificarIdade();

