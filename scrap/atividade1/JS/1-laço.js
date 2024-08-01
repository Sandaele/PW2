/*
1. faça um algoritmo javascript com um
laço de repetição for de 1 ate 100,
separe os números pares dos impares.
*/

let pares = [];
let impares = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        pares.push(i)
    } else {
        impares.push(i)
    }
}

console.log("números pares: ", pares)
console.log("números ímpares: ", impares)