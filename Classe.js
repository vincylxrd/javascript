class Pessoa {
    constructor(cpf, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui'
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    CompararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(`${this.nome} é Masculino`);
        } else {
            console.log(`${this.nome} é Feminino`);
        }
    }
    MaiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

const Vinicius = new Pessoa('444.333.555-67', 'Vinicius', 21, 'M');
Vinicius.CompararSexo();

if (Vinicius.MaiorIdade()) {
    console.log(`${Vinicius.nome} É maior de Idade!`);
} else {
    console.log(`${Vinicius.nome} É menor de Idade!`);
}