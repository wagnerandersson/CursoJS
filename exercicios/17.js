/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

var prompt = require('prompt-sync')()

let plano = prompt('Qual o plano de trabalho? ')
let salario = Number(prompt('Salário atual: '))

switch (plano) {
    case 'A':
        novoSalario = (salario * (10 / 100)) + salario
        break;
    case 'B':
        novoSalario = (salario * (15 / 100)) + salario
        break;
    case 'C':
        novoSalario = (salario * (20 / 100)) + salario
        break
    default:
        novoSalario = 'Plano Inválido'
        
}

console.log(`${novoSalario}`)