window.addEventListener("load", () => {
    const spinner = document.querySelector(".loader")
    const contentMain = document.querySelectorAll(".containerBlock")
    const hamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu');


    const enviar = document.querySelector("#btEnviar")
    const frm = document.querySelector("form")

    // Tempo de loading principal
    setTimeout(() => {
        spinner.style.display = "none"
        contentMain.forEach((e) => {
            e.style.display = "flex"
        })
    }, 3000)

    // Tempo para execução de animações AOS
    setTimeout(() => {
        AOS.init({
            duration: 400,
            offset: 120,
            easing: "ease",
        });
    }, 3500)

    // Atualização de carregamento
    AOS.refresh()

    // Menu mobile
    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('open'); // Alterna a classe do ícone
        menu.classList.toggle('open'); // Alterna a classe do menu
    });

    const mensagemSucesso = frm.querySelector("#menssagem .msg")

    mensagemSucesso.innerText = "Olá mundo"

    // Evento para envio de formularios
    enviar.addEventListener("click", () => {

        const nome = frm.inName.value
        const email = frm.inEmail.value


        // Tempo de loading no botão enviar.
        enviar.classList.toggle("loading");
        setTimeout(() => {
            if (nome || email) {
                // Exibir a mensagem
                enviar.classList.remove("loading")

                // Após 7 segundos, esconder a mensagem
                setTimeout(() => {
                    mensagemEmail.style.display = "none";
                }, 3000); // 7000 milissegundos = 7 segundos 
            } else {
                mensagemSucesso.textContent = "Preencha os campos do Formulario corretamente."
            }

        }, 2000)



        // Limpeza de formulario pós envio
        frm.inName.value = ""
        frm.inName.focus()
        frm.inEmail.value = ""


    })
})


