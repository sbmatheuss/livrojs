// Cria uma referência ao form e aos elementos h3 (onde será exibida a resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {

  const medi = Number(frm.inMedi.value) // obtém conteúdo dos campos
  const preco = Number(frm.inPreco.value)

  const promo = 
  resp1.innerText = `Promoção ${promo}`


  e.preventDefault()
})