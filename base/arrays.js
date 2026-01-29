    let frutas = ['Pera', 'Uva', 'Maçã', 'Banana']

    console.log(frutas)

    console.log('Primeira fruta:', frutas[0])
    console.log('Última fruta:', frutas[3])

    console.log('Total de frutas:', frutas.length)

    frutas.push('Manga')

    console.log(frutas)

    frutas.splice(2, 1)

    console.log(frutas)

    for(let i = 0; i < frutas.length; i++){
        console.log(frutas[i]);
    }

    console.log('Usando o forEach')

    frutas.forEach((valor, indice) => {
        console.log('Índice:', indice, valor)
    })

    console.log('Usando o for-of')

    for(const fruta of frutas){
        console.log('Fruta da vez:', fruta)
    }