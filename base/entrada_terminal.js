const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Qual é a sua idade?', (idade) => {
    if (idade > 18) {
        console.log('Uau! Você já pode tirar a sua CNH');
    } else {
        console.log('Você ainda não pode tirar a sua CNH!');
    }
    leitor.close();
});