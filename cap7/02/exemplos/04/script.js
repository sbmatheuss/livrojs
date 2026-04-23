const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const senha = frm.inSenha.value
  const erros = []

  // Verifica se o tamanho da senha e valido
  if(senha.length < 8 || senha.length > 15){
    erros.push("possuir entre 8 e 15 caracteres")
  }

  // Verifica se nao possui numeros
  if(senha.match(/[0-9]/g) == null) {
    erros.push("possuir numeros (no minimo, 1)")
  }

  // Verifica se nao possui letras minusculas
  if(!senha.match(/[a-z]/g)) {
    erros.push("possuir letras mainusculas (no minimo, 1)")
  }

  // Verifica se nao letras maiusculas ou se possui apenas 1
  if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("possuir letras maiusculas (no minimo, 2)")
  }

  // Verifica se nao possui simbolos ou "_"
  if(!senha.match(/[\W|_]/g)) {
      erros.push("possuir simbolos (no minimo, 1)")
    }

  if(erros.length == 0){
    resp.innerText = "Ok! Senha Valida"
  } else {
    resp.innerText = `Erro... A senha deve ${erros.join(", ")}`
  }
})
