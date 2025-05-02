/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 05:
/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/
let peso = parseFloat(prompt("Digite seu peso: "));
let altura = parseFloat(prompt("Digite sua altura: "));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2)); //o toFixed(2) é para limitar a resposta a 2 casas decimais.

if (imc < 18.5) {
    console.log("Você está classificado como: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Você está classificado como: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Você está classificado como: Sobrepeso");
} else {
    console.log("Você está classificado como: Obesidade");
}