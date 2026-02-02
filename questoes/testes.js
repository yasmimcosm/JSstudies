
    const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
    let processadas = 1;

    while(processadas <= 4) {
        for(let i = 0; i < caixas.length; i++){

            if(caixas[i] >= 0){
                console.log('Caixa processada:', caixas[i]);
                processadas++;

            } else {
                console.log('Caixa danificada, ignorada.');
            }
        }
    }
    console.log('Limite de caixas processadas atingido!')