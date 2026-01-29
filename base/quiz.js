const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vinda!')
console.log('Responda com a letra correta: a, b ou c')

let acertos = 0

rl.question('1) Quanto é 1+0?\n a)0\n b)1\n c)depende\n', (resposta1) => {
    if(resposta1 == 'c') {
        acertos++;
    }

    rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ', (resposta2) => {
        if (resposta2 == 'c') {
            acertos++;
        }


            rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ', (resposta3) => {
                if (resposta3 == 'b') {
                    acertos++;
                }


                if (acertos == 3) {
                    console.log('Parabéns, você gabaritou!');
                    
                } else if (acertos == 2) {
                        console.log('Muito bom, continue assim!');

                } else if (acertos == 1) {
                        console.log('Bom! Continue estudando');

                } else {
                    console.log('Continue praticando e tente novamente!');
                }

            rl.close();
        });
    });
});
