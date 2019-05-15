class Calculadora{
    constructor(){

    }

    static Somar(numero1, numero2){
        const resultado = numero1 + numero2;
        console.log(`Resultado: ${resultado}`);
    }
}

Calculadora.Somar(10,20);