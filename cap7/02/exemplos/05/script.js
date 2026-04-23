/**
 * Exercício sobre Object.freeze() em JavaScript
 *
 * Object.freeze() torna um objeto imutável:
 * - Não permite adicionar novas propriedades
 * - Não permite remover propriedades existentes
 * - Não permite modificar valores de propriedades existentes
 */

// Objeto original
const usuario = {
    nome: "João",
    email: "joao@exemplo.com",
    ativo: true
};

// Congelando o objeto
Object.freeze(usuario);

// Teste 1: Tentando modificar uma propriedade existente
try {
    usuario.nome = "Maria";
    document.getElementById("teste1").innerHTML = `
        <span class="erro">✗ Falhou:</span> nome foi alterado para "${usuario.nome}"
        <br><small>Em strict mode, isso lançaria um TypeError</small>
    `;
} catch (e) {
    document.getElementById("teste1").innerHTML = `
        <span class="sucesso">✓ Sucesso:</span> Não foi possível modificar
        <br><small>${e.message}</small>
    `;
}

// Teste 2: Verificando se o objeto está congelado
const estaCongelado = Object.isFrozen(usuario);
document.getElementById("teste2").innerHTML = `
    <span class="sucesso">✓ ${estaCongelado ? 'Objeto está congelado' : 'Objeto NÃO está congelado'}</span>
    <br><small>Object.isFrozen(usuario) = ${estaCongelado}</small>
`;

// Teste 3: Tentando adicionar uma nova propriedade
try {
    usuario.telefone = "(11) 99999-9999";
    document.getElementById("teste3").innerHTML = `
        <span class="erro">✗ Falhou:</span> nova propriedade foi adicionada: ${usuario.telefone}
    `;
} catch (e) {
    document.getElementById("teste3").innerHTML = `
        <span class="sucesso">✓ Sucesso:</span> Não foi possível adicionar propriedade
        <br><small>${e.message}</small>
    `;
}

// Teste 4: Tentando deletar uma propriedade
try {
    delete usuario.email;
    document.getElementById("teste4").innerHTML = `
        <span class="erro">✗ Falhou:</span> propriedade foi deletada. email = ${usuario.email}
    `;
} catch (e) {
    document.getElementById("teste4").innerHTML = `
        <span class="sucesso">✓ Sucesso:</span> Não foi possível deletar propriedade
        <br><small>${e.message}</small>
    `;
}

// Exibindo estado final do objeto
console.log("Estado final do objeto:", usuario);
console.log("Objeto está congelado?", Object.isFrozen(usuario));
