/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 2:
/*Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.*/

    let idade = parseInt(prompt("Digite a idade: "));
    if (idade < 12) {
        console.log("Criança.");
    } else if (idade >= 12 && idade < 18) {
        console.log("Adolescente.");
    } else if (idade >= 18 && idade < 60) {
        console.log("Adulto.");
    } else {
        console.log("Idoso.");
    }