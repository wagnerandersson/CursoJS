/*
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem 
que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

var prompt = require('prompt-sync')()

let num1 = Number(prompt('Primeiro Número: '))
let num2 = Number(prompt('Segundo Número: '))
let operacao = prompt('Qual tipo de operação matemática? ')

switch (num1, num2, operacao) {
    case '+':
        opr = num1 + num2
        console.log(`${opr}`)
        break;
    case '-':
        opr = num1 - num2
        console.log(`${opr}`)
        break;
    case '*':
        opr = num1 * num2
        console.log(`${opr}`)
        break;
    case '/':
        opr = num1 / num2
        console.log(`${opr}`)
        break;
    default:
        console.log(`Operação Inválida`)
}