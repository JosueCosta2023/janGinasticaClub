window.addEventListener("load", () => {
    const spinner = document.querySelector(".loader")
    const contentMain = document.querySelectorAll(".containerBlock")
    const hamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu');


    const enviar = document.querySelector("#btEnviar")
    const frm = document.querySelector("form")
    const mensagemContent = frm.querySelector("#mensagem")
    const mensagemSucesso = frm.querySelector(".msg")

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


    const exibirMensagem  = (mensagem, tipo = "success") => {
        mensagemContent.style.display = "flex";
        mensagemContent.classList.add(tipo)
        mensagemSucesso.textContent = mensagem
        
        setTimeout(() => {
            mensagemContent.style.display = "none"
            mensagemContent.classList.remove(tipo)
            frm.inName.focus();
        }, 5000)
    }

    const limparFormulario = () => {
        frm.inName.value = "";
        frm.inEmail.value = "";
        frm.inName.focus();
    }


    // Evento para envio de formularios
    enviar.addEventListener("click", (e) => {

        e.preventDefault()

        const nome = frm.inName.value.trim()
        const email = frm.inEmail.value.trim()

        if(!nome | !email){
            exibirMensagem("Atenção, é obrigatorio preencher todos os campos do formulário.", "error")
            return
        }

        enviar.classList.add("loading")

        setTimeout(() => {
            enviar.classList.remove("loading")
            exibirMensagem("Mensagem Enviada com Sucesso!", "success")

            limparFormulario()
        }, 2000)


    })
})


