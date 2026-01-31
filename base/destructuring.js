    const pessoa = {
        nome: 'Yasmim',
        idade: 18,
        profissão: 'Estudante'
    }

    const {nome, idade} = pessoa

    console.log(nome)
    console.log(idade)

    function saudacao ({ nome, idade }) {
        console.log('Olá', nome)

        idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')
    }

    saudacao(pessoa)

    const frutas = ['Pera', 'Uva', 'Maçã']

    const [primeira, segunda] = frutas