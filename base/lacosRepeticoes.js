    for(let contador = 1; contador <=5; contador++) {
        console.log('Número atual: ', contador)
    }

    for(let i = 0; i <= 10; i++){
        if(i%2 == 0){
            console.log('O número', i, 'é par')
        } else {
            console.log('O número', i, 'é ímpar')
        }
    }   

    for (let contador = 1; contador <= 50; contador++) {
        const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        if (numero === 15) {
            console.log(`${numero} em ${contador} tentativas`);
            break;
        }
    }

    //O continue pula para a próxima iteração e desconsidera o restante do bloco atual.
    let contador = 0;

    for (let i = 1; i <= 20; i++) {
        const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        if (numero % 5 === 0) {
            continue;
        }
        contador++;
    }


    console.log('contador', contador);

    const palavra = 'Yasmim'

    for(let j = 0; j < palavra.length; j++){
        console.log(palavra[j])
    }


    let cont = 1

    while(cont <= 10){
        console.log('Número atual:', cont)
        cont++
    }

    const numero = 1

    do {
        console.log(numero)
        numero++
    } while(numero <=10)    