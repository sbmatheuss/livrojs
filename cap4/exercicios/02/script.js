const frm = document.querySelector("form")
const vel1 = document.querySelector("input#inVel1")
const vel2 = document.querySelector("input#inVel2")
const h3 = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const velPermitda = Number(vel1.value)
  const velCondutor = Number(vel2.value)
  const limiteLeve = velPermitda * 1.2
  
  if(velCondutor <= velPermitda){
    h3.innerHTML = `Sem Multa`
  } else if (velCondutor <= limiteLeve) {
    h3.innerHTML = `Multa Leve`
  } else {
    h3.innerHTML = `Multa G`
  }
  
})