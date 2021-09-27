// function  - são utilizadas para criarmos uma seuencia de operações a serem executadas.

let olaMundo = function (){
    console.log ("Olá!");
    console.log ("Oi!");
    console.log ("Hello!");
}
//function declaration 

function returnHi(){
    return 'Hi!'
}
const greeting = returnHi()
console.log (greeting)
console.log (returnHi())

//Function Expression - Uma função pode também ser criada usando uma expressão
(function (a,b,c){
    return a+b+c
})

var sum = function (a,b){
    return a+b
}

sum (7,59)
console.log (sum)

//função arrow As arrow functions permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return. O conceito de funcionamento do this pode variar dependendo do contexto e do modo como o JavaScript esta sendo usado (modo strict ou não).
const increment1 = function (n){
    return n+1
}
const increment2 = function (n){
    return n+1
}
console.log (increment1(1)) // resulta 2
console.log (increment2(5)) // resulta 6

const increment2 = (n) => {
    return n+1
}
// uma function arrow tbm pode ser escrita assim:

const increment4 = n=> n+1 // não é necessário colocar return pois obrigatoriamente já esta implicito o retorno da function

const sum = (a,b)=> a+b

// Params - parametros
function logParams (a,b,c){
    console.log (a,b,c)
}

logParams (1,2,3,4,5)
//se vc passa parametros a mais a função retorna corretamente, quando passa parametros a menos ele retorna UNDEFINED
//tbm é possivel definir um parametro para a variavel sendo: (a=1,b=5,c=10)

//Quantidade flexivel de parametros
function logNums (...nums){
    console.log (nums)
}
logNums (1,2,3,4,5,6)

function sumAll (...nums){
    let total = 0
    for (let n of nums){
        total += n
    }
}
return total

//arrow function
const boaNoite=()=> console.log('Boa noite e boa sorte!!')
//acima temos uma função anonima no formato arrow


//callback - função Map

const nums = [1,2,3,4,5]
const dobro = n => n*2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia','Rafa']
const primeiraLetra = texto =>texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes,letras)

const carrinho = [
    {nome:'Caneta', qtde: 10, preco:7.99},
    {nome:'Impressora', qtde: 0, preco:649.50},
    {nome:'Caderno', qtde: 4, preco:27.99},
    {nome:'Lapis', qtde: 3, preco:5.82},
    {nome:'Tesoura', qtde: 1, preco:19.20},
]
// criar 2 funções de mapeamento - microdesafio

const getNome = item => item.nome
console.log (carrinho.map(getNome))

const getTotalValorPorItem = item => item.qtde * item.preco
const total = carrinho.map(getTotalValorPorItem)
console.log(getTotalValorPorItem);

//função Map implementada
Array.prototype.meuMap = function(fn){
    const mapped = []
    for (let i=0; i< this.length; i++){
        const resultado =fn(this[i],i,this)
        novoArray.push(resultado)
    }
    return novoArray
}
const getNome = item => item.nome
console.log (carrinho.meuMap(getNome))

const getTotalValorPorItem = item => item.qtde * item.preco
const total = carrinho.meuMap(getTotalValorPorItem)
console.log(getTotalValorPorItem);

//20/09/2021
// DESAFIO #1

// FAZER UM PROGRAMA COM UMA FUNÇÃO PARA SOMAR 
//somar (3)(4)(5)

function somar(a){
    return function(b){
        return function (c){
            return a+b+c
        }
    }
}
const somarAB = somar (3)(4)
console.log(somarAB(13))
console.log (somar(13)(21)(50))

// SEGUNDA PARTE DO DESAFIO - CALCULAR
//fn ->3*7
//fn ->3+7
//fn ->3-7
// calcular (3)(7)(fn)

function calcular(x){
    return function (y){
        return function (fn){
            return fn (x,y)
        }
   }
}
function subtrair (a,b){
    return a-b
}

function multiplicar (a,b){
    return a*b
}
const resultado1 = calcular(10)(5)(subtrair)
console.log (resultado1)
const resultado2 = calcular(10)(5)(multiplicar)
console.log (resultado2)
// aula27/09

//Conceito função FILTER
//SINTAXE = array.filter(fn)

//CallBack #4

const carrinho = [
    {nome:'Caneta', qtde: 10, preco:7.99},
    {nome:'Impressora', qtde: 0, preco:649.50},
    {nome:'Caderno', qtde: 4, preco:27.99},
    {nome:'Lapis', qtde: 3, preco:5.82},
    {nome:'Tesoura', qtde: 1, preco:19.20},
]

const qtdeMaiorQueZero = item => item.qtde > 0

const itensValidos = carrinho.filter(qtdeMaiorQueZero)

console.log (itensValidos)

//associando Map e Filter

const nomeItensValidos = carrinho
.filter(qtdeMaiorQueZero)
.map(getNome)

console.log(nomeItensValidos)