/*
3. apresente os divisores inteiros do número 120,
faça o código no caderno primeiro.
*/

let divisores = []

for (let i = 1; i <= 120; i++) {
    if (120 % i == 0) {
        divisores.push(i);
    }
}

console.log("os divisores de 120 são: ", divisores)