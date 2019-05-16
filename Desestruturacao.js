/// Desestruturação de Array

///Criando as variaveis
let a,b,resto;
///Criando o Array
const pessoas = ['Vinicius', 'Patricia', 'Gabriel', 'Ygor'];
///Pegando as duas primeiras posições
///E pegando todo o resto
///Utiliza o ...
[a,b, ...resto] = pessoas;

console.log(resto);

///Objeto Literal

let Pessoa = {
    Nome: 'Vinicius',
    Idade: 21,
    CPF: '11122233345',
    Sexo: 'M',
    CompararSexo: function() {
        if(this.Sexo == 'M') {
            console.log(`${this.Nome} é Masculino`);
        } else {
            console.log(`${this.Nome} é Feminino`);
        }
    }
}

Pessoa.CompararSexo();

/// Desestruturação do Objeto Literal
const{sexo,cpf, ...resto1} = Pessoa;

console.log(sexo); 

