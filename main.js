const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.menu_logo');
const nav_menu = document.querySelector('.mobile-menu')
nav_email.addEventListener('click', toogledeskpotmenu);
mobile_menu.addEventListener('click', toogledeskpotmenumobile);

function toogledeskpotmenu() {
    desktop_menu.classList.toggle('inactive');
}
function toogledeskpotmenumobile() {
    nav_menu.classList.toggle('inactive');
}