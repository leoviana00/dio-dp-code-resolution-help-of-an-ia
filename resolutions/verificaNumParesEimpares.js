// Como entrada, receba um número inteiro e verifique se ele é par ou ímpar. Uma dica é: Utilize condicionais para realizar a verificação e, se possível, faça uso do Github Copilot(ou outra IA) para otimizar a estrutura do código.

const readline = require('readline');

   const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
   });

   rl.question("Digite um número inteiro: ", function(input) {
       let numero = parseInt(input);
       if (numero % 2 === 0) {
           console.log(`${numero} é um número par.`);
       } else {
           console.log(`${numero} é um número ímpar.`);
       }
       rl.close();
   });