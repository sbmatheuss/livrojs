const prompt = require("prompt-sync")() // adiciona pacote prompt-sync
const valor = Number(prompt("Valor da compra R$: ")) // le valor da compra
const aux = Math.floor(valor / 20) // aux = numero de parcelas sem condicoes
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // operador ternario
const valorParcela = valor / parcelas // calculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)

