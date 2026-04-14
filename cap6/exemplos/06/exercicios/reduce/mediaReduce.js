const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0]

const total = notas.reduce((acc, item) => {
    return acc + item
}, 0)

const media = total / notas.length

console.log(media.toFixed(2))