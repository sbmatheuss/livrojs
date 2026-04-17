let fases = []


function adicionarClube() {

    const clube = document.getElementById("input-clube").value
    
    if(clube == ""){
        document.getElementById("mensagem").innerHTML = "Erro, não é possível adicionar"
    } else {
        fases.push(clube)
        listarClubes()
        document.getElementById("input-clube").value = ""
        document.getElementById("mensagem").innerHTML = ""
    }
}

function listarClubes() {
    let lista = ""
    fases.forEach(function (time) {
        lista += "<li>" + time + "</li>"
    })

    document.getElementById("area-clubes").innerHTML = lista
}

function montarTabela() {
    if(fases.length % 2 != 0) {
        document.getElementById("area-jogos").innerHTML = "ERRO, TABELA indisponível!"
    } else {
        let tabela = ""
        for(let i = 0; i < fases.length / 2; i++) {
            let time1 = fases[i]
            let time2 = fases[fases.length - 1 - i]
            tabela += "<li>" + time1 + " x " + time2 + "</li>"
        }
        document.getElementById("area-jogos").innerHTML = tabela
    }
}

