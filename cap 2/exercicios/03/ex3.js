const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const Produto = frm.inProduct.value
  const Preco = Number(frm.inPreco.value)

  const custo = Preco * 0.50
  const desc = (Preco * 3) - 3
  

  resp1.textContent = `${Produto} - Promoção Leve 3 por R$: ${desc.toFixed(2)}`

  resp2.textContent = `O terceiro produto custa apenas R$: ${custo.toFixed(2)}`
})