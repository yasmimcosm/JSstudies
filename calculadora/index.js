// const readline = require('readline');
import { createInterface } from 'readline'
import {soma, sub, multi, div} from './operacoes.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o primeiro número 1:\n>', (numero1) => {
    
    leitor.question('Digite a operação:\n>', (operacao) => {

        leitor.question('Digite o segundo número:\n>', (numero2) => {

            let num1 = Number(numero1)
            let num2 = Number(numero2)

            let resultado = null

            resultado =
                operacao === '+' ? soma(num1, num2)
                : operacao === '-' ? sub(num1, num2)
                : operacao === '*' ? multi(num1, num2)
                : operacao === '/' ? div(num1, num2)
                : null


            
            if (resultado !== null) {
                console.log('O resultado da operação é:', resultado)
            } else {
                console.log('Operação inválida, tente novamente')
            }

            leitor.close()
        });
    });
});