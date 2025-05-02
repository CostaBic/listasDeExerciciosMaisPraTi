/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 11:
/*Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/
let numero;
let total = 0;
/*Porque iniciar a variável total enquanto a numero não?
Se total não tiver um valor inicial, ela será undefined, e somar qualquer número com undefined resulta em NaN (Not a Number).*/

for(i=1; i<6; i++){
    numero = parseFloat(prompt("Digite um número pela " + i + " vez: "));
    total += numero;
}

console.log("Total dos números somados = " + total);