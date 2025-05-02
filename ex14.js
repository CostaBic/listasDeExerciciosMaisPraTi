/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 14:
/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/
let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("O fatorial de " + numero + " é " + fatorial);

/*Agora uma versão com while:
let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
let fatorial = 1;
let i = 1;

while (i <= numero) {
    fatorial *= i;
    i++;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
*/