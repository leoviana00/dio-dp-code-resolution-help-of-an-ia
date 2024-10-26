// Agora vamos calcular a média de três notas fornecidas na entrada do usuário. Uma dica é: Utilize operadores aritméticos para realizar o cálculo da média.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a primeira nota: ", function(nota1) {
    rl.question("Digite a segunda nota: ", function(nota2) {
        rl.question("Digite a terceira nota: ", function(nota3) {
            // Converter as notas para números
            nota1 = parseFloat(nota1);
            nota2 = parseFloat(nota2);
            nota3 = parseFloat(nota3);

            // Calcular a média
            let media = (nota1 + nota2 + nota3) / 3;

            // Exibir o resultado
            console.log(`A média das notas é: ${media}`);
            rl.close();
        });
    });
});