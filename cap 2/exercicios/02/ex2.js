const frm = document.querySelector("form");
const h3 = document.querySelector("#resp");


frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTime.value);

  const blocos = Math.ceil(tempo / 15);
  const total = valor * blocos;

  

  h3.textContent = `Valor a Pagar R$: ${total.toFixed(2)}`;
})