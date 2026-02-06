const frm = document.querySelector('form');
const resp1 = document.getElementById('outResp1');
const resp2 = document.getElementById('outResp2');
const resp3 = document.getElementById('outResp3');
const resp4 = document.getElementById('outResp4');
const resp5 = document.getElementById('outResp5');
const resp6 = document.getElementById('outResp6');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const chinchilas = Number(frm.inChinchilas.value);
  const anos = Number(frm.inAnos.value);

  if(chinchilas < 2 || isNaN(chinchilas)) {
    alert('Número de chinchilas inválido!');
    frm.inChinchilas.value = '';
    frm.inChinchilas.focus();
    return;
  }

  let resultado = ""
  
  let totalChinchilas = chinchilas;

  for(let i = 1; i <= anos; i++) {
    
    if(i > 1) {
      totalChinchilas *= 3;
      
    }

    resultado += `${i}º Ano: ${totalChinchilas} Chinchilas\n`;
  }

  

    console.log("Resultado final:", resultado); // Adicione isso aqui
    resp2.innerText = `Resultado detalhado:\n${resultado}`;
});
  
