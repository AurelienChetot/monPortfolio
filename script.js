const theme = document.querySelector(".theme");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const info = document.querySelector(".info");
const title1 = document.querySelector(".title1");
const p1 = document.querySelector(".imgdev-container");

theme.addEventListener('click', () => {
    header.classList.toggle('lightheader');
    footer.classList.toggle('lightheader');

});

theme.addEventListener('click', () => {
    info.classList.toggle('lightinfo');
});

theme.addEventListener('click', () => {
    title1.classList.toggle('lighttitle');
});

theme.addEventListener('click', () => {
    p1.classList.toggle('lightp');
});
