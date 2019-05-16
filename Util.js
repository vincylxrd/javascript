/// Util com Strig
const nome = 'Vinicius Guilherme Silva dos Santos';

//Split(Trocas espaços por virgulas)
console.log('Usando SPLIT: ' + nome.split(' '))

//---------------------------------------------------------------------------

//Replace(Troca de Palavras);
console.log('Usando REPLACE: ' + nome.replace('Vinicius', 'Breno'));

//---------------------------------------------------------------------------

//Utilizando REGEX(Substituição de letras ou palavras)
console.log('Usando REGEX: ' + nome.replace(new RegExp(' ','g'),'_'));

//---------------------------------------------------------------------------

//Utilizando REPEAT(Repetir)
const texto = 'abc';
console.log('Usando REPEAT: ' + texto.repeat(3));

//---------------------------------------------------------------------------

// Utilizando Substr(Pegar parte do texto)
// O metodo retorna uma parte da String iniciando no indice especifico e estendendo
// para um determinado numero de caracteres(Soma 8+10=18)
console.log('Usando SUBSTR: ' + nome.substr(8,10));

//---------------------------------------------------------------------------

//Slice(Extrai uma seção de uma String e retorna como uma nova)(9 ao 11)
console.log('Usando SLICE: ' + nome.slice(9,11));

//---------------------------------------------------------------------------

//StarsWith inicia com a determinada
//Retorna *Boolean(True ou false)*
console.log('Usando STARSWITH: ' + nome.startsWith('Vinicius'));

//---------------------------------------------------------------------------

//EndsWith termina com a determinada
//Retorna *Boolean(True ou false)*
console.log('Usando ENDSWITH: ' + nome.endsWith('Silva'));

//---------------------------------------------------------------------------

//Length determina o tamanho da nossa String
console.log('Usando LENGTH: ' + nome.length);

//---------------------------------------------------------------------------

//Number
const numeroDecimal = 3.14852415;

//toPrecision conta apartir do primeiro numero, e faz o arredondamento
console.log('Usando TOPRECISION: ' + numeroDecimal.toPrecision(3));

//---------------------------------------------------------------------------

//toFixed limita depois do ponto(Casas decimal)a quantidade de casas decimais e 
//faz o arredondamento
console.log('Usando TOFIXED: ' + numeroDecimal.toFixed(3));

//---------------------------------------------------------------------------       

//isNAN
//Retorna um Booleano(False quando é numero)
console.log('Usando ISNAN: ' + isNaN('Vinicius'));

//---------------------------------------------------------------------------

//Data No JavaScript
let date = new Date();
console.log('Usando DATA COMPLETA: ' + date);
console.log('Usando ANO: ' + date.getFullYear());
console.log('Usando MÊS: ' + date.getMonth());
console.log('Usando DATA: ' + date.getDate());
console.log('Usando DIA DA SEMANA: ' + date.getDay());
console.log('Usando HORAS: ' + date.getHours());
console.log('Usando MINUTOS: ' + date.getMinutes());
console.log('Usando SEGUNDOS: ' + date.getSeconds());

