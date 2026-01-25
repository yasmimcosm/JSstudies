function saudacao() {
    console.log('Olá!')
}

setTimeout(saudacao, 1000)

let contador = 0

const id = setInterval(() => {
    contador++
    console.log(contador)
    if(contador == 10){
        clearInterval(id)
    }

}, 1000)