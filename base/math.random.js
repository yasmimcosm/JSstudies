    //fórmula padrão: Math.random() * (max - min + 1) + min

    // Tamanho do intervalo → (max - min + 1)
    // Ponto de partida → + min
    
    for (let contador = 1; contador <= 30; contador++) {
        const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        if (numero === 15) {
            console.log(`${numero} em ${contador} tentativas`);
            break;
        }
    }

    // O método Math.random() gera um número aleatório entre 0 e 1, 
    // e ao multiplicá-lo por 50 e somar 1, obtemos um número entre 1 e 50. 
    // Englobamos esse código com o método Math.floor() da mesma biblioteca. 
    // Esse método arredonda o número para baixo, retirando as casas decimais zz
    // e garantindo que seja um inteiro.