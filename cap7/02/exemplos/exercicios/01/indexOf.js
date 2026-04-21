const prompt = require("prompt-sync")()

const frase = prompt("Digite uma frase: ").toLowerCase()

const pos1 = frase.lastIndexOf("a")
const pos2 = frase.lastIndexOf("e")
const pos3 = frase.lastIndexOf("i")
const pos4 = frase.lastIndexOf("o")
const pos5 = frase.lastIndexOf("u")

const posicoes = [pos1, pos2, pos3, pos4, pos5]
const vogais = ["a", "e", "i", "o", "u"]

let maiorPos = -1
let ultimaVogal = ""

for (let i = 0; i < posicoes.length; i++) {
    if (posicoes[i] > maiorPos) {
        maiorPos = posicoes[i]
        ultimaVogal = vogais[i]
    }
}

if (maiorPos === -1) {
    console.log("Nenhuma vogal encontrada na frase.")
} else {
    console.log(`A última vogal é "${ultimaVogal}" na posição ${maiorPos}`)
}