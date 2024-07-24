

const buttons = document.querySelector('.buttons');
const navlist = document.querySelector('.container ul.nav-list');

buttons.addEventListener('click', () => {
    buttons.classList.toggle('active');
    navlist.classList.toggle('active');
} )