function handleMenu() {
    const button = document.querySelector(".menu__button");
    const menu = document.querySelector(".nav__menu");

    button.addEventListener("click", function() {
        button.childNodes[1].classList.toggle("hamburger");
        button.childNodes[1].classList.toggle("x-button");
        menu.classList.toggle("nav__menu--open");
    });
};



handleMenu();