    const pessoa = {
        nome: 'Yasmim',
        idade: 18,
        pets: ['Kaio'],
        nacionalidade: 'Brasileira'
    }

    for (const chave in pessoa) {
        console.log('Chave:', chave)
        console.log('Valor:', pessoa[chave])
    }

    const chaves = Object.keys(pessoa)
    const valores = Object.values(pessoa)

    const entradas = Object.entries(pessoa)

    console.log('Chaves:', chaves)
    console.log('Valores:', valores)
    console.log('Entradas:', entradas)