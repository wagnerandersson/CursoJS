/* 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


var prompt = require('prompt-sync')()

let capitalInicial = Number(prompt('Capital Inicial: '))
let taxaJuros = Number(prompt('Taxa de Juros: '))
let tempoAplicacao = Number(prompt('Tempo de Aplicação (Meses): '))

let percentualJuros = taxaJuros / 100

// Retorna montante sobre Juros Simples

jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => `R$: ${(capitalInicial * (1 + (taxaJuros / 100) * tempoAplicacao)).toFixed(2).toString().replace(".", ",")}`

// Retorna montante sobre Juros Compostos

jurosComposto = (capitalInicial , percentualJuros, tempoAplicacao) => `R$ ${(capitalInicial * (Math.pow((1 + percentualJuros) , tempoAplicacao))).toFixed(2).toString().replace(".", ",")}`


console.log(`Juros Simples ${jurosSimples(capitalInicial, taxaJuros, tempoAplicacao)}`)
console.log(`Juros Compostos ${jurosComposto(capitalInicial, percentualJuros, tempoAplicacao)}`)
