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

    enviar.addEventListener("click", (e) => {

        e.preventDefault()

        const nome = frm.inName.value
        const email = frm.inEmail.value

        
        enviar.classList.toggle("loading");
        setTimeout(() => {
            

            if (nome || email) {
                // Exibir a mensagem
                enviar.classList.remove("loading")
                mensagemEmail.style.display = "flex";
                // Após 7 segundos, esconder a mensagem
                setTimeout(() => {
                    mensagemEmail.style.display = "none";
                }, 3000); // 7000 milissegundos = 7 segundos 
                
                
            }
            
        }, 2000)



        frm.inName.value = ""
        frm.inName.focus()
        frm.inEmail.value = ""


    })
})


