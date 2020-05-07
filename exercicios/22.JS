/*
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

var prompt = require('prompt-sync')()


let mes = Number(prompt('Número do mês a pagar: '))
let valorAnuidade = Number(prompt('Valor da anuidade, R$: '))
let percentualJuros = 5 / 100
let atraso = mes -1
jurosComposto = (valorAnuidade , percentualJuros, atraso) => `R$ ${(valorAnuidade * (Math.pow((1 + percentualJuros) , atraso))).toFixed(2).toString().replace(".", ",")}`


console.log(`Juros Compostos ${jurosComposto(valorAnuidade, percentualJuros, atraso)}`)


