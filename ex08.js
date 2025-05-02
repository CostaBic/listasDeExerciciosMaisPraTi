/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 08:
/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/
let primeiroV = parseFloat(prompt("Digite o primeiro valor: "));
let segundoV = parseFloat(prompt("Digite o segundo valor: "));
if (primeiroV < segundoV) {
    console.log(primeiroV + ", " + segundoV);
} else {
    console.log(segundoV + ", " + primeiroV);
}