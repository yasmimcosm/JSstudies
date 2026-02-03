
    function calcularConsumo(potencia, horasPorDia) {
        let consumo = (potencia * horasPorDia * 30) / 1000;

        return consumo;
    }

    function classificarConsumo(consumo) {
        if(consumo > 200){
            return `Alto consumo`;
        } else if (consumo > 50) {
            return `Consumo moderado`;
        } else {
            return `Baixo consumo`;
        }
    } 

    function exibirResumo(nomeAparelho, consumo, classificacao){
        console.log(`${nomeAparelho} tem consumo ${consumo} kWh/mês e é classificada como ${classificacao}.`);
        //Geladeira tem consumo de 18 kWh/mês e é classificada como Baixo consumo.
    }

    const nomeAparelho = "Geladeira";
    const consumo = calcularConsumo(150, 4);
    const classificacao = classificarConsumo(consumo);
    exibirResumo(nomeAparelho, consumo, classificacao);