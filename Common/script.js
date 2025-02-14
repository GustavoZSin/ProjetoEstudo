document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".dropDownMenu")
    const header = document.querySelector("header")

    header.addEventListener("mouseenter", () => {
        menu.classList.add("show")
    })

    header.addEventListener("mouseleave", () => {
        menu.classList.remove("show")
    })
})