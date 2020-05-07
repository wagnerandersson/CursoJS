/*
26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

var prompt = require('prompt-sync')()


let pares = 1

if ((pares / 2) != 0) { pares++ }

while (pares <= 100) {

    console.log(`${pares}`)
    pares =  pares + 2
}




