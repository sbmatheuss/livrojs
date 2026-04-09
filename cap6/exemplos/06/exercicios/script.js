const frm = document.querySelector("form")
const respo = document.querySelector("pre")
const carros = {}

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