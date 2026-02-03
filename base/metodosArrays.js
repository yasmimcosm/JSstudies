    
    //pop()
    //Para remover um elemento do último índice, usamos o método pop()
    const arrNumeros = [12, 23, 34, 45, 56];

    arrNumeros.pop();
    console.log(arrNumeros);
    // [ 12, 23, 34, 45, 56 ]


    ////////////////////////////////////////////////////////////////////////

    //indexOf()
    //verificar se um elemento existe no array


    const elem = arrNumeros.indexOf(12);
    console.log(elem);
    // 0

    ////////////////////////////////////////////////////////////////////////

    //forEach()
    const arrayNumeros = [12, 23, 34, 45, 56];

    arrayNumeros.forEach((num, i) => {
        console.log(`o número ${num} está no índice ${i}`);
    });

    // o número 12 está no índice 0
    // o número 23 está no índice 1
    // o número 34 está no índice 2
    // o número 45 está no índice 3
    // o número 56 está no índice 4

    ////////////////////////////////////////////////////////////////////////

    //slice()
    //pegar uma parte dele, como todos os elementos a partir de determinado índice, e criar um novo array
    const novoArr = arrNumeros.slice(2);
    console.log(novoArr);
    // [ 34, 45, 56 ]

    ////////////////////////////////////////////////////////////////////////

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log('Todos os números:', num, '\n')

    const numPares = num.filter((num) => {

        return num%2 === 0
    })

    console.log(numPares, '\n')

    ////////////////////////////////////////////////////////////////////////

    // map():  devolver um novo array com os valores alterados
    const numMultiplicado = num.map((num) => {
        return num * 2
    })

    console.log(numMultiplicado, '\n')

    ////////////////////////////////////////////////////////////////////////

    //SET: Para remover duplicatas de um array.
    let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5]; 

    let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]; 

    console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4, 5] 

    
    ////////////////////////////////////////////////////////////////////////
    //MAP: Um Map é uma estrutura que permite armazenar pares de chave e valor, semelhante a um objeto
    let mapa = new Map(); 

    mapa.set('nome', 'João'); 
    mapa.set('idade', 25); 

    console.log(mapa.get('nome')); // Resultado: João 

    console.log(mapa.get('idade')); // Resultado: 25 