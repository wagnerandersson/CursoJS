/*
13) ​ Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

var prompt = require('prompt-sync')()
let dia = Number(prompt('Dia da semana: '))
switch (dia) {
    case 1:
        console.log(`Domingo - Fim de Semana`) 
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log(`Dia Util`)
        break;
    case 7:
        console.log(`Sabado - Fim de Semana`)
        break;
    default:
        console.log(`Dia Inválido`)
        
}
