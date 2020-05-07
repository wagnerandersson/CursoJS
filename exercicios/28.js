/*
28) ​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

var prompt = require('prompt-sync')()


let pares = 0
let impar = 0

let vetor = 0

 function parOuImpar (vetor) {
    if(vetor % 2 == 0){
        pares = pares +1
    } else {
        impar = impar +1
    }
    return pares, impar
 }



console.log(`Pares: ${parOuImpar(1, 3, 10, 12, 50, 42, 88)}`)
