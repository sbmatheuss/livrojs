const frm = document.querySelector("form")
const n = document.querySelector("input#inP")
const h3 = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const num = Number(n.value)
  const tot = num % 2

  if(tot == 0 ) {
    h3.innerText = `${num} e Par`
  } else {
    h3.innerText = `${num} e Impar`
  }
})