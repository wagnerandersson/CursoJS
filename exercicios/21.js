/*
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

var prompt = require('prompt-sync')()


let idade = Number(prompt('Idade: '))
let padrao = 100
let menor10 = 80
let entre10e30 = 50
let entre30e60 = 95
let mais60 = 130

if (idade >= 0 & idade < 10) {
    valor = padrao + menor10
    console.log(`Valor do Plano R$: ${valor}`)

} else if (idade > 10 && idade <= 30) {
    valor = padrao + entre10e30
    console.log(`Valor do Plano R$: ${valor}`)
} else if (idade > 30 && idade <= 60) {
    valor = padrao + entre30e60
    console.log(`Valor do Plano R$: ${valor}`)
} else {
    valor = padrao + mais60
    console.log(`Valor do Plano R$: ${valor}`)
}