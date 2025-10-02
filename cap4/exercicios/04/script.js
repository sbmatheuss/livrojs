const frm = document.querySelector("form")
const ladoA = document.querySelector("input#inA")
const ladoB = document.querySelector("input#inB")
const ladoC = document.querySelector("input#inC")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const ladoA = Number(inA.value)
  const ladoB = Number(inB.value)
  const ladoC = Number(inC.value)


  if(podeFormar(ladoA, ladoB, ladoC)) {
    const tipo = tipoDeTriangulo(ladoA, ladoB, ladoC)
    resp1.innerHTML = `Os Lados podem formar um triangulo`
    resp2.innerHTML = `Tipo: ${tipo}`
  } else if (podeFormar(ladoA, ladoB, ladoC)) {
    const tipo = tipoDeTriangulo(ladoA, ladoB, ladoC)
    resp1.innerHTML = `Os Lados podem formar um retangulo`
    resp2.innerHTML = `Tipo: ${tipo}`
  } else {
    resp1.innerHTML = `Os Lados Nao Podem formar um triangulo`
    resp2.innerHTML = `Tipo: Escaleno`
  }




})


 // Função para verificar se os lados formam um Isosceles
    function podeFormar(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}


// Função para identificar o tipo de triângulo
function tipoDeTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}


