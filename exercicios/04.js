/*04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

var prompt = require('prompt-sync')()

var dividendo = Number(prompt('Valor do Dividendo: '))
var divisor = Number(prompt('Valor do Divisor: '))

console.log(`${dividendo} / ${divisor} = ${(dividendo/divisor).toFixed(2)} Resto ${dividendo%divisor}`)