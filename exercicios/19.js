/*
19) ​ O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço

100  Cachorro Quente         R$ 3,00
200  Hambúrguer Simples      R$ 4,00
300  Cheeseburguer           R$ 5,50
400  Bauru                   R$ 7,50
500  Refrigerante            R$ 3,50
600  Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

var prompt = require('prompt-sync')()

let cod = Number(prompt('Código do produto: '))
let qtd = Number(prompt('Quantidade: '))

switch (cod) {
    case 100:
        valor = qtd * 3.00
        console.log(`R$: ${(valor).toFixed(2).toString().replace("." , ",")}`)
        break;
    case 200:
        valor = qtd * 4.00
        console.log(`R$: ${(valor).toFixed(2).toString().replace("." , ",")}`)
        break;
    case 300:
        valor = qtd * 5.50
        console.log(`R$: ${(valor).toFixed(2).toString().replace("." , ",")}`)
        break;
    case 400:
        valor = qtd * 7.50
        console.log(`R$: ${(valor).toFixed(2).toString().replace("." , ",")}`)
        break;
    case 500:
        valor = qtd * 3.50
        console.log(`R$: ${(valor).toFixed(2).toString().replace("." , ",")}`)
        break;
    case 600:
        valor = qtd * 2.80
        console.log(`R$: ${(valor).toFixed(2).toString().replace("." , ",")}`)
        break;
        default:
            console.log(`Produto não existente. `)

}

