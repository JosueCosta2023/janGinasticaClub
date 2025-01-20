window.addEventListener("load", () => {
    const spinner = document.querySelector(".spinner")
    const contentMain = document.querySelectorAll(".containerBlock")


    setTimeout(() => {
        spinner.style.display = "none"
        contentMain.forEach((e) => {
            e.style.display = "flex"
        })
    }, 1000)
})


