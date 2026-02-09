    import { createInterface } from 'readline'

    const leitor = createInterface ({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question('digita ae:', (numero) => {
        const quantidade = Number(numero);
        let i = 0;
        let lista = [];

        function perguntarNumero() {

            if (i >= quantidade) {
                let j = 1;
                let atual = 1;
                let max = 1;
                let numMax = 0;

                for (j = 1; j < quantidade; j++){
                    if (lista[j] === lista[j-1]){
                        atual++;
                    }

                    if(atual > max) {
                        max = atual;
                        numMax = lista[j];
                    }

                    if(lista[j] != lista[j-1]){
                        atual = 1;
                    }
                }

                console.log(max);
                console.log(numMax);
                leitor.close();
                return

            }

            leitor.question(`Digite o numero da vez (${i+1}):\n> `, (num) => {
                lista.push(Number(num));
                i++;
                perguntarNumero();

            })
        }

        perguntarNumero();
    })