/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 10:
/*Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
let numero = parseInt(prompt("Escreva um número inteiro: "));
for(i=1; i < 11; i++){
    console.log(i + " - " + numero);
}