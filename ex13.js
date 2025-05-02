/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 13:
/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

let numero;
let contador = 0;
let soma = 0;

do {
    numero = parseFloat(prompt("Digite um número decimal ou 0 para encerrar: "));
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    console.log("A média aritmética dos números digitados é: " + (soma / contador).toFixed(2));
} else {
    console.log("Nenhum número válido foi digitado.");
}

/*Temos que validar que o zero não será contabilizado pelo contador quando digitado para encerrar. Do contrário ele calculará a média errado pois ao invés de dividir pelo número de números digitados ele vai dividir contando com o zero.*/