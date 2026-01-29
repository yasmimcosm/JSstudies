    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log('Todos os números:', num, '\n')

    const numPares = num.filter((num) => {

        return num%2 === 0
    })

    console.log(numPares, '\n')

    const numMultiplicado = num.map((num) => {
        return num * 2
    })

    console.log(numMultiplicado, '\n')

    //SET: Para remover duplicatas de um array.
    let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5]; 

    let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]; 

    console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4, 5] 


    //MAP: Um Map é uma estrutura que permite armazenar pares de chave e valor, semelhante a um objeto
    let mapa = new Map(); 

    mapa.set('nome', 'João'); 
    mapa.set('idade', 25); 

    console.log(mapa.get('nome')); // Resultado: João 

    console.log(mapa.get('idade')); // Resultado: 25 