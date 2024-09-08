/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1, c = 0;
    
    if (num === a || num === b) return true;
    
    while (c < num) {
        c = a + b;
        a = b;
        b = c;
        if (c === num) return true;
    }
    
    return false;
}

rl.question('Digite um número: ', (input) => {
    let number = parseInt(input);

    console.log(isFibonacci(number) ? "O número pertence à sequência de Fibonacci." : "O número não pertence à sequência de Fibonacci.");

    rl.close();
});
