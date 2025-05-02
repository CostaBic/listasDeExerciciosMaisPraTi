/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 3:
/*Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/
let nota = parseInt(prompt("Digite a nota (0 a 10):"));

if (nota >= 7 && nota <= 10) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else if (nota >= 0 && nota < 5) {
    console.log("Reprovado");
} else {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
}
