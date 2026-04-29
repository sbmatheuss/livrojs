// Data atual
const agora = new Date()

// Data especifica (ano, mês-1, dia, hora, min, seg)
const natal = new Date(2026, 11, 25) // mês começa em 0

// A partir de uma string
const data = new Date("2026-06-15")

// A partir de timestamp (milissegundos desde 01/01/1970)
const ts = new Date(1700000000000)


console.log(agora)
console.log(natal)
console.log(data)

console.log(ts)

// ATENÇÃO: OS MESES VÃO DE 0(JANEIRO) A 11(DEZEMBRO)

