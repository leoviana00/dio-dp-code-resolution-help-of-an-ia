// Vamos testar se uma palavra é um palíndromo?! Uma dica é: Utilize conceitos de manipulação de strings para inverter a palavra e comparar com a original.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma palavra: ", function(palavra) {
    // Remover espaços e converter para minúsculas para uma comparação mais precisa
    palavra = palavra.replace(/\s+/g, '').toLowerCase();

    // Inverter a palavra
    let palavraInvertida = palavra.split('').reverse().join('');

    // Verificar se a palavra original é igual à palavra invertida
    if (palavra === palavraInvertida) {
        console.log(`A palavra '${palavra}' é um palíndromo.`);
    } else {
        console.log(`A palavra '${palavra}' não é um palíndromo.`);
    }
    rl.close();
});