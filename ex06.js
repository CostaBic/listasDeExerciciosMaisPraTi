/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 06:
/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

let A = parseFloat(prompt("Digite o lado A:"));
let B = parseFloat(prompt("Digite o lado B:"));
let C = parseFloat(prompt("Digite o lado C:"));

// Verifica se os lados formam realmente um triângulo:
if (A < B + C && B < A + C && C < A + B) {
    console.log("Os lados formam um triângulo do tipo:");

    if (A === B && B === C) {
        console.log("Equilátero.");
    } else if (A === B || A === C || B === C) {
        console.log("Isósceles.");
    } else {
        console.log("Escaleno.");
    }

} else {
    console.log("A figura não é um triângulo.");
}

/*Valores que não formam um triângulo são aqueles que não obedecem a "desigualdade triangular":
Um lado nunca pode ser maior ou igual à soma dos outros dois.*/