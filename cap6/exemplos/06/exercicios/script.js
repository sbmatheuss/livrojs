const frm = document.querySelector("form")
const respo = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    inModelo.focus()

    frm.btListar.dispatch(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(carros.length == 0){
        alert("Não há carros na lista")
        return
    }

    const Lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
        respo.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${Lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if(maximo == 0 || isNaN(maximo)) {
        return
    }
    
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if(carrosFilter.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    
    let lista = ""
    for(const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    respo.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})


frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt ("Qual o percentual de desconto: "))
    if(desconto == 0 || isNaN(desconto)) {
        return
    }

    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))

    let lista = ""
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    respo.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})

