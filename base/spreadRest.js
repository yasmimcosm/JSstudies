    let yasmim1 = {
        nome: 'Yasmim',
        idade: 18,
        profissão: 'Desenvolvedora Web'
    }

    const yasmim2 = {...yasmim1}

    yasmim2.idade = 30

    console.log(yasmim1)
    console.log(yasmim2)

    yasmim1 = {
        ...yasmim2,
        profissão: 'Arquiteta'
    }

    console.log(yasmim1)

    const { nome, ...restante} = yasmim1
    console.log(nome)
    console.log(restante)