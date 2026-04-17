const numeros = []

const inNumero = document.getElementById("inNumero")
const outLista = document.getElementById("outLista")
const btAdicionar = document.getElementById("btAdicionar")

function adicionarNumero() {
    
    const num = Number(inNumero.value)
    
    if(numeros.includes(num)) {
        outResposta.innerText = "ATENÇÃO... ESTE NÚMERO JA FOI ADICIONADO!"
        return
    } else {
        
    }

}
btAdicionar.addEventListener("click", adicionarNumero);