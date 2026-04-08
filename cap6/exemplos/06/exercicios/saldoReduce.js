const transacoes = [
{ tipo: 'deposito', valor: 1000},
{ tipo: 'saque', valor: 200},
{ tipo: 'deposito', valor: 500},
{ tipo: 'saque', valor: 150},
{ tipo: 'deposito', valor: 300},
{ tipo: 'saque', valor: 450}    
]

const dinheiro = transacoes.reduce((acc, item) => {
    if(item.tipo == 'deposito') {
        return acc + item.valor
    }

    return acc - item.valor
}, 0)

console.log(dinheiro)