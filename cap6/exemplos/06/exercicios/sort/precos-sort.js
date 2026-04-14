const precos = [299.90, 49.90, 15.00, 199.00, 349.90, 89.00];

const decrescente = [...precos].sort((a, b) => b - a)

console.log(decrescente)