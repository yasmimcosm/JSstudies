    import { createInterface } from 'readline'

    const leitor = createInterface ({
        input: process.stdin,
        output: process.stdout
    });
            
    function receita () {
        leitor.question ('Digite o nome da fruta que deseja acrescentar na receita:\n>', (fruta) => {

            fruta = fruta.toLowerCase();

            const frutasPermitidas = ['laranja', 'abacaxi'];

            if (!frutasPermitidas.includes(fruta)) {
                console.log('Fruta incompatível para a receita. Tente novamente.\n');
                receita();
                return;
            }

            console.log('Fruta compatível para a receita!\n');
            leitor.close();

        });
    }

    receita();