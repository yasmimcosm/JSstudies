//“Buscar dados do usuário no servidor”
// Isso demora → precisa ser assíncrono. Soluções:

//Promise (organizado)
    function buscarUsuario() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve("Yasmim");
            }, 1000);
        });
        }

        console.log("Início");

        buscarUsuario()
        .then((usuario) => {
            console.log(usuario);
        })
        .catch((erro) => {
            console.log(erro);
        });

    console.log("Fim");

//Async / Await (jeito moderno)
function buscarUsuario() {

    //Promise representa algo que vai acontecer no futuro
    return new Promise((resolve) => { //resolve é a função que finaliza a promessa com sucesso

        setTimeout(() => { //Simula uma tarefa demorada (tipo buscar dados na internet)
        resolve("Yasmim");
        }, 1000); //espera 1 segundo, depois chama resolve("Yasmim")
    });
    }

async function mostrarUsuario() { //“Essa função trabalha com coisas assíncronas”
    console.log("Início");

    const usuario = await buscarUsuario();
    console.log(usuario);

    console.log("Fim");
}

mostrarUsuario();

