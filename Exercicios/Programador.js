const Funcionario = require('./Funcionario');
class Programador extends Funcionario {
    constructor(salariobase){
        super(salariobase)
    }

    calcularSalario(){
        super.calcularSalario();
        this.total = this.total + 300;
    }

}

const programador = new Programador(500);
programador.calcularSalario();
programador.exibirSalario();