/*
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

var prompt = require('prompt-sync')()

let cod = prompt('Código do aluno: ')
let nota1 = Number(prompt('Primeira Nota: '))
let nota2 = Number(prompt('Segunda Nota: '))
let nota3 = Number(prompt('Terceira Nota: '))

let peso1 = 4
let peso2e3 = 3


let media = ((nota1 * peso1) + (nota2 * peso2e3) + (nota3 * peso2e3)) / (peso1 + peso2e3 + peso2e3)

if (media >= 5) {
    console.log(`Aluno ${cod} aprovado com ${media}`)
} else {
    console.log(`Aluno ${cod} reprovado com ${media}`)
}