/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

var prompt = require('prompt-sync')()

let num = Number(prompt('Número a fatorar: '))
let fator = num


for (i = 1; i <= num; i = i -1) {
    let fator = fator *  i

    console.log(`${fator}`)
}