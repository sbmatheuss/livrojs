const numeros = []

const inNumero = document.getElementById("inNumero")
const outLista = document.getElementById("outLista")
const btAdicionar = document.getElementById("btAdicionar")
const VerificarOrdem = document.getElementById("btVerificar")

function adicionarNumero() {
    
    const num = Number(inNumero.value)
    
    if(numeros.includes(num)) {
        outResposta.innerText = "ATENÇÃO... ESTE NÚMERO JA FOI ADICIONADO!"
        return
    } else {
        numeros.push(num)
        outLista.innerText = "Números: " + numeros.join(", ");
    }

    

}


function btVerificar() {
    for(let i = 0; i < numeros.length - 1; i++) {
        if(numeros[i] > numeros[i+1]){
            outResposta.innerText = "NÃO ESTÁ EM ORDEM CRESCENTE"
            return
        }
    }

    outResposta.innerText = "ESTÁ EM ORDEM CRESCENTE"
}

btAdicionar.addEventListener("click", adicionarNumero);
VerificarOrdem.addEventListener("click", btVerificar)