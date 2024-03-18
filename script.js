const theme = document.querySelector(".theme");
const main = document.querySelector("main");

theme.addEventListener('click', () => {
    main.classList.toggle('dark')
});