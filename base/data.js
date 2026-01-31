    const agora = new Date()

    console.log(agora)

    console.log('Ano:', agora.getFullYear())
    console.log('Mês 0-11:', agora.getMonth())
    console.log('Dia do mês:', agora.getDate())
    console.log('Hora:', agora.getHours())
    console.log('Minutos:', agora.getMinutes())

    const nascimento = new Date('2007-02-12T02:00:00.000Z')

    console.log(nascimento)

    console.log('Nasceu:', nascimento.toLocaleDateString('pt-BR'))