
/* 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */


var prompt = require('prompt-sync')()

var lado1 = Number(prompt('Valor lado 1: '))
var lado2 = Number(prompt('Valor Lado 2: '))
var lado3 = Number(prompt('Valor Lado 3: '))

if (lado1 == lado2 && lado1 == lado3) {
    console.log('Triângulo Equilátero')
} else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1) {
    console.log('Triângulo Isóceles')
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3 ){
    console.log('Triângulo Escaleno')
} else {
    console.log('Os valores não formam um triângulo')
}