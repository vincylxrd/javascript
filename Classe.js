class Pessoa {
    constructor(cpf, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui'
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    // Metodo não estatico 
    // Com retorno void
    CompararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(`${this.nome} é Masculino`);
        } else {

            console.log(`${this.nome} é Feminino`);
        }
    }

    // Metodo não estatico
    // Com retorno 
    MaiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }
    //metodo estatico -> static
    static exemplo(sexo) {
        //MASCULINO
        //FEMININO
        console.log(sexo)
        if (sexo == 'M') {
            console.log('Masculino');
        } else {
            console.log('Feminino');
        }
        console.log('Este é um metodo estatico')
    }

    //metódo estatico -> static
    //com retorno booleano
    static verificaNome(nome){
        if(nome.toUpperCase() == nome) {
            return true;
        } else {
            return false;
        }
    }
}



//Estou instanciando um novo objetivo(classe)
const Vinicius = new Pessoa('444.333.555-67', 'Vinicius', 21, 'M');

//Estou acessando um metodo nao estatico
//Que o retorno Void
Vinicius.CompararSexo();

// Este é metodo estatico
// Não precisa Instaciar
// Verica se nome maisculo
Pessoa.exemplo(Vinicius.sexo);
if (!Pessoa.verificaNome(Vinicius.nome)) {
    Vinicius.nome = Vinicius.nome.toUpperCase();
}
if (Vinicius.MaiorIdade()) {
    console.log(`${Vinicius.nome} É maior de Idade!`);
} else {
    console.log(`${Vinicius.nome} É menor de Idade!`);
}

console.info(Pessoa);