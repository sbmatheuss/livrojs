const prompt = require("prompt-sync")()
const sal = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))
const quadrienio = Math.floor(tempo / 4)
const acrescimo = sal * quadrienio / 100

console.log(`Quadriênios: ${quadrienio}`)
console.log(`Salário Final R$: ${(sal+acrescimo).toFixed(2)}`)