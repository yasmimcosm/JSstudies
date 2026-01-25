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