    // const pessoa = {
    //     nome: 'Yasmim',
    //     idade: 18,
    //     temCNH: false
    // }

    // pessoa.sobrenome = "Cosme"

    // console.log('Nome:', pessoa.nome)
    // console.log('Sobrenome:', pessoa.sobrenome)

    const livro = {
        nome: 'A vida invisível de Addie Larue',
        autor: 'V. E. Schwab',
        paginas: 572
    }

    livro.publicado = true;
    livro.idiomas = [
        'Inglês', 'Espanhol', 'Português'
    ]

    livro.idiomas.push('Mandarim')
    livro.idiomas.push('Alemão')

    console.log('Livro antes:', livro)

    delete livro.paginas

    console.log('Livro depois:', livro)
    
    console.log('Autor do livro:', livro['autor'])

    const autor = {
        nome: 'V. E. Schwab',
        idade: 55,
        nacionalidade: 'Britânico',
        livros: [livro]
    }

    livro.autor = autor

    console.log(livro)