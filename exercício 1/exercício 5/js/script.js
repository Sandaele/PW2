/**
 * exercício 5: comparação de desempénho entre atletas (da lista de exercícios 1)
 * autor: João Rissi
 * data: 06-08-2024
 */

// criando as variaveis
let AtletaA
let AtletaB
let distancia
let tempo

// função que calcula a distancia
function funcDistancia (a,b,c) {
    tempo = - (b / (2 * a))
    distancia = a * tempo ** 2 + b * tempo + c
    return distancia
}

// inserindo as informações e calculando
AtletaA = funcDistancia(-1, 6, 10)
AtletaB = funcDistancia(-0.5, 4, 12)

// o resultado: distancia maxima de cada atrleta
console.log(AtletaA) // 19 metros
console.log(AtletaB) // 20 metros
// atleta B antige a maior distancia com 20 metros