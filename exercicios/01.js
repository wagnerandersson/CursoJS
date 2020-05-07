/* 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */


var prompt = require('prompt-sync')()
var val1 = Number(prompt('Primeiro Número: '))
var val2 = Number(prompt('Segundo Número: '))


console.log(`Soma ${val1+val2} subtração ${val1-val2} multiplicação ${val1*val2} duvisão ${val1/val2}`)