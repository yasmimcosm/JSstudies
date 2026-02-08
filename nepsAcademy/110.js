    import { createInterface } from 'readline';

    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question('Quantos números você quer digitar?\n> ', (n) => {

        const quantidade = Number(n);
        let lista = [];
        let i = 0;

        function perguntarNumero() {

            if (i >= quantidade) {

                let atual = 1;
                let max = 1;
                let numeroMaisRepetido = lista[0];

                for (let j = 1; j < quantidade; j++) {
                    if (lista[j] === lista[j - 1]) {
                        atual++;
                    } else {
                        atual = 1;
                    }

                    if (atual > max) {
                        max = atual;
                        numeroMaisRepetido = lista[j];
                    }
                }

                console.log(`Número mais repetido consecutivamente: ${numeroMaisRepetido}`);
                console.log(`Quantidade de repetições: ${max}`);

                leitor.close();
                return;
            }



            
            leitor.question(`Digite o número ${i + 1}: `, (resposta) => {
                lista.push(Number(resposta));
                i++;
                perguntarNumero();
            });
        }




        perguntarNumero();
    });
