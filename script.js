console.log('Olá mundo!')

var num = 39 //var

let valor = 10 //let

const idades = 30 //const

console.log(typeof idade) //diz o tipo da variável

let anoAtual = 2026

let anoNascimento = 2007

console.log('Você tem ', anoAtual - anoNascimento, ' anos')

//Symbol em JavaScript é um tipo de dado primitivo usado justamente para criar valores únicos, mesmo que tenham a mesma descrição.
const user = {
name: "Yasmim"
};

const id = Symbol("id");

user[id] = 123;

console.log(user);
// { name: 'Yasmim', [Symbol(id)]: 123 }


const saoIguais = idadeVinny == minhaIdade;
console.log('São iguais? ', saoIguais);

const comparacaoEstrita = minhaIdade === idadeVinny;
console.log('São estritamente iguais?', comparacaoEstrita);

const comparacaoEstrita2 = minhaIdade !== idadeVinny;
console.log('São estritamente diferentes?', comparacaoEstrita);



const idade = 15;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;
const podeDirigir = maiorDeIdade && possuiCNH; // AND
const podeViajarSozinha = maiorDeIdade || possuiCNH; // OR
const precisaDeAcompanhante = !maiorDeIdade; // NOT
console.log('Pode dirigir?', podeDirigir);