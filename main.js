const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.menu_logo');
const nav_menu = document.querySelector('.mobile-menu');
const nav_carrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cerrar_aside =document.querySelector('.cerrar_aside');
const product_card=document.querySelector('.product-card');
const product_detail =document.querySelector('.product-detail-info');
const product_detail_close =document.querySelector('.product-detail-info-close');
nav_email.addEventListener('click', toogledeskpotmenu);
product_card.addEventListener('click', toogleproduct_card);
product_detail_close.addEventListener('click', toogleproduct_card);
cerrar_aside.addEventListener('click', toogglecloseaside);
mobile_menu.addEventListener('click', toogledeskpotmenumobile);
nav_carrito.addEventListener('click', toogleshoppingcart);

function toogleproduct_card(){
    console.log('holi');
    product_detail.classList.toggle('inactive');
    if (aside.classList.contains('inactive')){
        return;
    }
    else{
        aside.classList.add('inactive');
    }
}
function toogledeskpotmenu() {
    desktop_menu.classList.toggle('inactive');
    if (aside.classList.contains('inactive')){
        return;
    }
    else{
        aside.classList.add('inactive');
    }
}

function toogglecloseaside() {
    aside.classList.toggle('inactive');
    
}
function toogledeskpotmenumobile() {
    nav_menu.classList.toggle('inactive');
    if (aside.classList.contains('inactive')){
        return;
    }
    else{
        aside.classList.add('inactive');
    }
}
function toogleshoppingcart() {
    console.log('holi');
    aside.classList.toggle('inactive');
    if (nav_menu.classList.contains('inactive') && product_detail.classList.contains('inactive') ){
        return;
    }
    else{
        nav_menu.classList.add('inactive');
        product_detail.classList.add('inactive');
    }
}