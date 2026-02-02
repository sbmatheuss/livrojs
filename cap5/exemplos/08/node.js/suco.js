const prompt = require('prompt-sync')();
const produto = prompt("Produto: ")
const num = Number(prompt("N de Etiquetas:"))

// Cria um laco de repeticao ate num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
    // Imprime o produto duas vezes por linha
    console.log(`${produto.padEnd(30)}  ${produto.padEnd(30)}`);
}

if (num % 2 == 1) {
    console.log(produto);
}