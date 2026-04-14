const precos = [49.90,120.00, 35.50, 200.00, 89.99]

const descont  = 0.15

const precosComDesconto = precos.map(preco => parseFloat((preco * (1 - descont)).toFixed(2)))

console.log(precosComDesconto)