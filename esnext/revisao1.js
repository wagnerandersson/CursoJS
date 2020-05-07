// let e const (define variáveis e constante)
// let tem escopo de bloco (herda o escopo de função do var)
// var tem um escopo de função
{
    var a = 2
    let b = 3
    console.log(b)

}

console.log(a)


// template string

const produto = 'Ipad'
console.log(`${produto} 
é 
Caro`)


// Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome)