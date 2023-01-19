const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.menu_logo');
const nav_menu = document.querySelector('.mobile-menu');
const nav_carrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cerrar_aside =document.querySelector('.cerrar_aside');
const product_detail =document.querySelector('.product-detail-info');
const product_detail_close =document.querySelector('.product-detail-info-close');
const cards_container = document.querySelector('.cards-container');
nav_email.addEventListener('click', toogledeskpotmenu);
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
const product_list=[];

for (var i = 0; i < 14; i++) {
    product_list.push({
        name:'bike'+ i,
        price:120 + i+5,
        Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    })
}

for (product of product_list) {
    const product_card_index= document.createElement("div");
    product_card_index.classList.add('product-card');
    const img_product = document.createElement("img");//okey
    img_product.setAttribute('src', product.Image);//okey
    const product_info = document.createElement("div");//okey
    product_info.classList.add('product-info');//okey
    const div_info = document.createElement("div");//okey
    const product_price = document.createElement("p");//OKEY    
    product_price.innerText="$" +product.price+",00" ;//OKEY
    const product_name = document.createElement("p");//OKEY
    product_name.innerText=product.name;//OKEY
    div_info.append(product_price,product_name);
    const img_add_cart_figure = document.createElement("figure"); //okey
    const img_add_cart = document.createElement("img");//okey
    img_add_cart.setAttribute('src', './icons/bt_add_to_cart.svg');//okey

    img_add_cart_figure.appendChild(img_add_cart);
    product_info.append(div_info,img_add_cart_figure);
    product_card_index.append(img_product, product_info);

    cards_container.appendChild(product_card_index);
}
