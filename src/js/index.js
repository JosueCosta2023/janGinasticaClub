window.addEventListener("load", () => {
    const spinner = document.querySelector(".spinner")
    const contentMain = document.querySelectorAll(".containerBlock")


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
})


