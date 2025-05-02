/*ATENÇÃO! É necessário rodar npm install para garantir que as dependências sejam carregadas.*/

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

//Exercício 04:
/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
let escolha = prompt("Digite uma das 3 opções: Vermelho, Verde ou Azul: ");
switch (escolha){
    case "Vermelho":
        console.log("Você escolheu Vermelho.");
        break;
    case "Verde":
        console.log("Você escolheu Verde.");
        break;
    case "Azul":
        console.log("Você escolheu Azul.");
        break;
    default:
        console.log("Escolha inválida. Tente novamente.")
}
