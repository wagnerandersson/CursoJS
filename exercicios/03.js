//03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.



var prompt = require('prompt-sync')()

var base = Number(prompt('Digite o valor do numero Base: '))
var exp = Number(prompt('Digite o valor do Expoente: '))

var elevada = Math.pow(base , exp)

console.log(`${elevada}`)
