    import { createInterface } from 'readline'

    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function iniciar() {
        leitor.question('Digite o número de questões:\n> ', (questoes) => {
            const total = Number(questoes);

            leitor.question('Digite o gabarito:\n> ', (gabarito) => {
                leitor.question('Digite as respostas do candidato:\n> ', (respostas) => {

                    if(gabarito.length !== total || respostas.length !== total){
                        console.log('Quantidade de alternativas inválida, tente novamente\n ')
                        iniciar();
                        return;
                    }

                    let acertos = 0;
                    for(let i = 0; i < total; i++){
                        if(gabarito[i] === respostas[i]){
                            acertos++;
                        }
                    }

                    console.log('O candidato obteve ', acertos, 'acertos')
                    leitor.close();
                });
            });
        });
    }

    iniciar();