    
    
    function sorteio(){
        const num = Math.floor(Math.random() * participantes.length);

        return num;
    }

    function pontuacao(participantes) {
        let num = sorteio();
        let sorteado = participantes[num];

        console.log(`Participante sorteado: ${sorteado.nome}`);
        console.log(`Pontuação ${sorteado.pontuacao}`);

        if(sorteado.pontuacao > 80){
            console.log('Parabéns, você foi premiado!')
        } else if (sorteado.pontuacao > 50){
            console.log('Você quase conseguiu! Fique de olho nos próximos sorteios.')
        } else {
            console.log('Infelizmente, não foi dessa vez.')
        }
    }

    function atraso(participantes){
        console.log('Sorteando...')
        setTimeout(() => {
            pontuacao(participantes);
        }, 3000)
    }

    function realizarSorteio(participantes){
        atraso(participantes);

    }

    const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
    ];
    
    realizarSorteio(participantes);