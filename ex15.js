/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 15:
/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/
let anterior = 0;
let atual = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");

for (let contador = 0; contador < 10; contador++) {
    console.log(anterior);
    let proximoNumero = anterior + atual;
    anterior = atual;
    atual = proximoNumero;
}