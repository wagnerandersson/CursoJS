/*
10) ​ Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/
var prompt = require('prompt-sync')()


let num = Number(prompt('Digite um Número: '))

function verificaNum (num) {
if (num % 3 == 0) {
    return true
} else {
    return false
}
}

console.log(`${verificaNum(num)}`)
