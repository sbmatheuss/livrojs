const produtos = [
 {nome: 'Camista', preco: 49.90, emEstoque: true},    
 {nome: 'Tênis', preco: 199.99, emEstoque: false},
 {nome: 'Boné', preco: 35.00, emEstoque: true},
 {nome: 'Jaqueta', preco: 289.90, emEstoque: true},   
 {nome: 'Meia', preco: 19.90, emEstoque: false}

]

const total = produtos.reduce((acc, item) => {
    if(item.emEstoque == true) {
        return acc + item.preco
    }

    return acc 
}, 0)

console.log(total.toFixed(2))

