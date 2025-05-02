/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 1:
/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

let numero = parseInt(prompt("Digite um número inteiro: "));
if(numero % 2 == 0){
    console.log("Este número é par.");
}
else{
    console.log("Este número é ímpar");
}
