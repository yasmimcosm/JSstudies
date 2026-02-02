    import { createInterface} from 'readline'

    const leitor = createInterface ({
        input: process.stdin,
        output: process.stdout
    });

    function risos () {
        leitor.question('Escreva sua risada:\n>', (risos) => {
            let vogais = '';
            let vogaisInvertidas = '';
            const letrasVogais = 'aeiou';

            for(let j = 0; j < risos.length; j++){
                if(letrasVogais.includes(risos[j])){
                    vogais += risos[j];
                }
            }

            for(let i = vogais.length - 1; i >= 0 ; i--){
                vogaisInvertidas += vogais[i];
            }

            (vogais == vogaisInvertidas) ? console.log('S') : console.log('N');

            leitor.close();
        });
    }

    risos();