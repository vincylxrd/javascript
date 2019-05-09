class Casa {
    constructor (cor,qtdQuantos) {
        this.cor = cor;
        this.quarto =qtdQuantos;
    }

    getInformacao(){
        console.log(`cor: ${this.cor} Qtd. Quartos: ${this.quarto}`)
    }
    static abrirPortao(){
        console.log('Portão aberto!');
    }
    abrirJanela()
    {
        return 'Abriu Janela'
    }
}
module.exports = Casa;