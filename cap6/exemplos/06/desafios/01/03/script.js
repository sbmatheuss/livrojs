const candidatos = [];

document.getElementById('btn-add').addEventListener('click', () => {
    const nome = document.getElementById('inp-nome').value;
    const acertos = Number(document.getElementById('inp-acertos').value);

    candidatos.push({ nome, acertos });
    listarTodos();
});

function listarTodos() {
    const lista = document.getElementById('lista');
    lista.innerHTML = candidatos.map(c => `${c.nome} - ${c.acertos} acertos`).join('<br>');
}

document.getElementById('btn-listar').addEventListener('click', listarTodos);

document.getElementById('btn-fase2').addEventListener('click', () => {
    const num = Number(prompt("Mínimo de acertos:"));

    const aprovados = candidatos
        .filter(c => c.acertos >= num)
        .sort((a, b) => b.acertos - a.acertos);

    const lista = document.getElementById('lista');

    if (aprovados.length === 0) {
        lista.innerHTML = 'Nenhum candidato aprovado para a 2ª etapa.';
        return;
    }

    lista.innerHTML = aprovados.map(c => `${c.nome} - ${c.acertos} acertos`).join('<br>');
});