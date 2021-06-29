document.querySelector('.nav__set').addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector('.menu').classList.add("menu_active")
})

document.querySelector('.menu__close').addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.menu').classList.remove("menu_active")
})