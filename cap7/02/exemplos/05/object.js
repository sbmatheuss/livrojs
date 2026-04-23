// Object.freeze() - Torna um objeto imutável
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo"
};

// congelando o objeto
Object.freeze(pessoa);

// Tentando modificar (não funciona em propriedades diretas)
pessoa.nome = "Maria";
pessoa.idade = 30;
pessoa.pais = "Brasil";

console.log(pessoa);

console.log(Object.isFrozen(pessoa))

