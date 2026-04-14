// Usando o método spread [...], os arrays originais continuam intactos

const anos = [2020, 1994, 2001, 2013, 1983]

const crescente = [...anos].sort((a, b) => a -b) // método spread [...] + .sort

console.log(crescente)