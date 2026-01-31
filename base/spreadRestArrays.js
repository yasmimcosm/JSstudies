    const frutas = ['Pera', 'Uva', 'Maçã']

    const maisfrutas = ['Banana', 'Mirtilo', 'Manga']

    const  clone = [...frutas]

    const todasfrutas = [...frutas, ...maisfrutas]

    frutas.push('Pitaya')

    console.log(frutas)
    console.log(maisfrutas)
    console.log(clone)
    console.log(todasfrutas)

    const [primeira, segunda, ...restante] = todasfrutas
    console.log(primeira)
    console.log(segunda)
    console.log(restante)