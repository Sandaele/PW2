/*
2. faça um algoritmo com vetor de 10
posições númericas, separe os valores do vetor
em pares e impares (com seus próprios vetores),
some esses valores de cada vetor separadamente.
pares com pares e impares com impares, e no final
mostre os resultados e compare para ver qual é o maior.
*/

let vetor = [];
let pares = [];
let impares = [];
let somaPares, somaImpares;

for (let i = 0; i < 10; i++) {
    vetor.push(i)
}

for (let i = 0; i <= vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        pares.push(vetor[i])
    } else {
        impares.push(vetor[i])
    }
}

for (let i = 0; i < pares.length; i++) {
    somaPares = somaPares + pares[i]
}

for (let i = 0; i < impares.length; i++) {
    somaImpares = somaImpares + impares[i]
}

if (somaPares > somaImpares) {
    console.log("o maior resultado é: ", somaPares)
} else if (somaImpares > somaPares) {
    console.log("o maior resultado é: ", somaImpares)
} else {
    console.log("os resultados são iguais")
}

console.log("soma dos números pares: ", somaPares)
console.log("soma dos números ímpares: ", somaImpares)