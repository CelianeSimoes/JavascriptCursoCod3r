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
