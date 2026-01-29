// Script para o formulário de controle de contas a pagar

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


let resposta = "" // string com a resposta a ser exibida
let numContas = 0 // inicializa contador...
let valTotal = 0 // e acumulador (variáveis globais)

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const descricao = frm.inDescricao.value
  const valor = Number(frm.inValor.value)

  numContas++ // incrementa contador
  valTotal = valTotal + valor // acumula o valor
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
  resp1.innerText = `${resposta}\n------------------------`
  resp2.innerText = `Número de contas: ${numContas}\nValor total: R$ ${valTotal.toFixed(2)}`

  frm.inDescricao.value = ""
  frm.inValor.value = ""
  frm.inDescricao.focus()
})
