/*Escreva um programa que inverta os caracteres de um string.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

rl.question('Digite uma string: ', (input) => {
    let string = input;
    console.log('String invertida:', inverterString(string));
    rl.close();
});
