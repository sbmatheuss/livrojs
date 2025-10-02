const frm = document.querySelector("form")
const preco = document.querySelector("input#inPreco")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const valor = Number(preco.value)
  const valor1 = 1
  const valor2 = 1.75
  const valor3 = 3
  if (valor >= valor1 && valor < valor2) {
    const tempo = 30
    const troco = valor - valor1
    resp1.innerHTML = `Tempo: ${tempo} min`
    resp2.innerHTML = `Troco R$: ${troco}`
  } else if (valor >= valor2 && valor < valor3) {
    const tempo = 60
    const troco = valor - valor2
    resp1.innerHTML = `Tempo: ${tempo} min`
    resp2.innerHTML = `Troco R$: ${troco}`
  } else {
    const tempo = 120
    const troco = valor - valor3
    resp1.innerHTML = `Tempo: ${tempo} min`
    resp2.innerHTML = `Troco R$: ${troco}`
  }
})