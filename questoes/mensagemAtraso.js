
    function mostrarResposta(nome) {
        return `Olá, ${nome}! Aqui está a resposta para sua dúvida.`
    }

    function responderUsuario(nome, funcao) {
        console.log('Processando sua pergunta...')
        setTimeout(() => {
            console.log(funcao(nome))
        }, 3000)

    }

    responderUsuario("Camila", mostrarResposta);
