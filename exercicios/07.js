/* 
07) ​ Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. 
*/


var prompt = require('prompt-sync')()


let a = Number(prompt('Valor de A: '))
let b = Number(prompt('Valor de B: '))
let c = Number(prompt('Valor de C: '))

// bhaskara 

x1 = (a , b , c ) => { 
    let bhaskara = (-b + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a)
    return bhaskara
    
}
x2 = (a , b , c ) => { 
    let bhaskara2 = (-b - (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a)
    return bhaskara2
    
}

if (x1 < 0){
    x1 = "Delta é negativo"
} else if (x2 < 0){
    x2 = "Delta é negativo"
}

console.log(`X1 = ${x1(a, b , c)}`)
console.log(`X2 = ${x2(a, b , c)}`)

