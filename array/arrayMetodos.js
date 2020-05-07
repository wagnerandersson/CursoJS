const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //massa saiu -- remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstaooen') // adiciona elemento no array na ultima posição
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento no inicipo do array
console.log(pilotos)


// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1,) //removeu massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  //não entra o indice 4
console.log(algunsPilotos2)