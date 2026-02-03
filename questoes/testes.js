
    function contagemRegressiva (num){
        if(num === 0){
            console.log('Lançamento!');
        } else {
            console.log(num);
            num = num - 1;
            contagemRegressiva(num);
        }
    }

    let number = 5;
    contagemRegressiva(number);