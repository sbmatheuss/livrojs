const texto = "gato, gato, rato"
console.log(texto.replace("gato", "cachorro")) // só substitui o primeiro

// Para substituir todas as ocorrências, use uma expressão regular com a flag g (global)
const texto2 = "gato, gato, rato"
console.log(texto2.replace(/gato/g, "cachorro"))

// Usando expressões regulares 

// Substituir digitos por "#"
const cpf = "123.456.789-00"
const mascarado = cpf.replace(/\d/g, "#")

console.log(mascarado)

// Substituir multiplos espacos por um unico
const texto3 = "Ola mundo!"
const normalizado = texto3.replace(/\s+/g, " ")

console.log(normalizado)