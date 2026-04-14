const jogadores = [
{vencedor: 'Ana'},
{vencedor: 'Bruno'},
{vencedor: 'Ana'},
{vencedor: 'Carlos'},
{vencedor: 'Ana'},
{vencedor: 'Bruno'}    
]

const placar = jogadores.reduce((acc, partida) => {
    acc[partida.vencedor] = (acc[partida.vencedor] || 0) + 1
    return acc 
}, {})

console.log(placar)