/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 12:
/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

let numero = parseInt(prompt("Digite um número inteiro para fazer a tabuada: "));
for(let i = 1; i<11; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}