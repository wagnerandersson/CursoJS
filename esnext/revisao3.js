// ES8: Objecto.values / Object.entries

const obj = {a: 1, b: 2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias no notação literal
const nome = 'Carla'
const pessoa = {
    nome, 
    ola() {
        return 'Oi Gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }

}

console.log(new Cachorro().falar())