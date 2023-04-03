const toggler = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.nav-menu');

toggler.addEventListener('click', () => {
    nav.classList.toggle('collapse');
})