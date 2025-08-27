// Cria uma referência ao form e aos elementos h3 (onde será exibida a resposta)

const frm = document.querySelector("form")
const resp2 = document.querySelector("#resp2")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const qtd = Number(frm.inQtd.value) // obtém conteúdo dos campos
  const preco = Number(frm.inPreco.value)

  let total = 0;
  let msg = " ";

  if (qtd >= 2) {
    const precoDesc = Math.floor(preco);
    total = precoDesc * qtd;

    msg = `Leve 2 por apenas R$: ${total.toFixed(2)}`;
    
  } else {

    total = preco * qtd;
    msg = `Total a pagar R$: ${total.toFixed(2)}`
  }


  resp2.textContent = msg
  
})