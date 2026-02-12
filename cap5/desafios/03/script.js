const frm =  document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value)

    let soma = 0
    let divisores = []

    for(let i = 1; i <= numero / 2; i++) {
        if(numero % i === 0) {
            soma += i;
            divisores += i + ", ";
        }
    }

    if(soma == numero){
        resp1.innerText = `${divisores} ${soma}`
        resp2.innerText = `É um numero Perfeito`
    } else {
        resp1.innerText = `${divisores} ${soma}`
        resp2.innerText = `Não é um numero Perfeito`
    }

})