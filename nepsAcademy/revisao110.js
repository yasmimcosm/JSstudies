    import { createInterface } from 'readline'

    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question('Escreve ae:\n > ', (quantidade) => {
        const quant = Number(quantidade);
        let i = 0;
        let lista = [];

        function contarNum () {
            if(i >= quant) {
                let blocos = 1;

                for(let i = 1; i < quant; i++){
                    if(lista[i] != lista[i-1]){
                        blocos++;
                    }
                }

                console.log(blocos);
                leitor.close();
                return
            }

            leitor.question(`escreva o num da vez (${i+1}):`, (num) => {
                lista.push(num);
                i++;
                contarNum();
            })
        }

        contarNum()
    })