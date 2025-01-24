window.addEventListener("load", () => {
    const spinner = document.querySelector(".loader")
    const contentMain = document.querySelectorAll(".containerBlock")
    const hamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu');
    const enviar = document.querySelector("#btEnviar")
    const mensagemEmail = document.querySelector("#menssagem")
    const frm = document.querySelector("form")



    setTimeout(() => {
        spinner.style.display = "none"
        contentMain.forEach((e) => {
            e.style.display = "flex"
        })
    }, 3000)

    setTimeout(() => {
        AOS.init({
            duration: 400,
            offset: 120,
            easing: "ease",
        });
    }, 3500)

    AOS.refresh()


    // Adicionar evento de clique
    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('open'); // Alterna a classe do ícone
        menu.classList.toggle('open'); // Alterna a classe do menu
    });

    enviar.addEventListener("click", () => {

        const nome = frm.inName.value
        const email = frm.inEmail.value

        if (nome || email) {
            // Exibir a mensagem
            mensagemEmail.style.display = "block";

            // Após 7 segundos, esconder a mensagem
            setTimeout(() => {
                mensagemEmail.style.display = "none";
            }, 3000); // 7000 milissegundos = 7 segundos 
        }

        frm.inName.value = ""
        frm.inName.focus()
        frm.inEmail.value = ""


    })
})


