const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
nav_email.addEventListener('click', toogledeskpotmenu);

function toogledeskpotmenu() {
    /* if (desktop_menu.classList.contains('active')) {
        desktop_menu.classList.remove('active');
        desktop_menu.classList.add('inactive');
    } else {
        desktop_menu.classList.add('active');
} */
desktop_menu.classList.toggle('inactive');
}