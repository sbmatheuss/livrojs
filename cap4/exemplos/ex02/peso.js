// cria referencia ao form e elemento onde sera exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form

  const nome = frm.inNome.value // obtem valores do form
  const masculino = frm.inMasculino.checked
  const altura = Number(frm.inAltura.value)

  let peso // declara a varia peso
  if (masculino) { // se masculino (ou, if masculino == true)
    peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
  } else {
    peso = 21 * Math.pow(altura, 2)
  }

  // altera a resposta (altera o conteudo do elemento h3 da pagina)
  resp.innerText = `${nome}: Seu peso ideal ${peso.toFixed(3)} Kg`
})

frm.addEventListener("reset", (r) => {
  resp.innerText = "" // limpa o conteudo do elemento h3 que exibe a resposta
})