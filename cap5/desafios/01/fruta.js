const frm = document.querySelector('form')
const resp = document.getElementById('outResp')

frm.addEventListener('submit', e => {
  e.preventDefault()

  const fruta = frm.fruta.value
  const num = Number(frm.numero.value)
  let mensagem = ''

  if (!fruta || !num || num <= 0) {
    resp.textContent = 'Por favor, insira uma fruta e um número válido!'
    resp.style.color = 'red'
    return
  }

  for (let i = 0; i < num; i++) {
    mensagem += fruta + ' * '
  }

  resp.textContent = mensagem
  resp.style.color = 'green'
  frm.fruta.value = ''
  frm.numero.value = ''
  frm.fruta.focus()
})
