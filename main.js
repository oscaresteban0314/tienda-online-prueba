const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.menu_logo');
const nav_menu = document.querySelector('.mobile-menu');
const nav_carrito = document.querySelector('.navbar-shopping-cart');
const shoping_card_container = document.querySelector('.product-detail');
const cerrar_shoping_card_container =document.querySelector('.cerrar_shoping_card_container');
const product_detail_close =document.querySelector('.product-detail-info-close');
const cards_container = document.querySelector('.cards-container');
const product_detail_info=document.querySelector('.product-detail-info');
nav_email.addEventListener('click', toogledeskpotmenu);
shoping_card_container.addEventListener('click', toogleshoppingcart);
product_detail_info.addEventListener('click', Open_Product_detail_info);
product_detail_close.addEventListener('click', product_detail_close_function);
mobile_menu.addEventListener('click', toogledeskpotmenumobile);
nav_carrito.addEventListener('click', toogleshoppingcart);

function product_detail_close_function(){
    product_detail_info.classList.add('inactive');
}
function toogleproduct_card(){
    product_detail_info.classList.toggle('inactive');
    if (shoping_card_container.classList.contains('inactive')){
        return;
    }
    else{
        shoping_card_container.classList.add('inactive');
    }
}
function toogledeskpotmenu() {
    desktop_menu.classList.toggle('inactive');
    /* product_detail_info.classList.toggle('inactive'); */
    if (shoping_card_container.classList.contains('inactive') && product_detail_info.classList.contains('inactive')){
        return;
    }
    else{
        shoping_card_container.classList.add('inactive');
        product_detail_info.classList.add('inactive');
    }
}

function toogledeskpotmenumobile() {
    nav_menu.classList.toggle('inactive');
    if (shoping_card_container.classList.contains('inactive')&& product_detail_info.classList.contains('inactive')){
        return;
    }
    else{
        shoping_card_container.classList.add('inactive');
        
        product_detail_info.classList.add('inactive');
    }
}
function toogleshoppingcart() {
    shoping_card_container.classList.toggle('inactive');
    if (nav_menu.classList.contains('inactive') && product_detail_info.classList.contains('inactive') ){
        return;
    }
    else{
        nav_menu.classList.add('inactive');
        product_detail_info.classList.add('inactive');
    }
}
function Open_Product_detail_info(){
    product_detail_info.classList.remove('inactive');
    shoping_card_container.classList.add('inactive');
    nav_menu.classList.add('inactive');
    desktop_menu.classList.add('inactive');
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
    img_product.addEventListener('click',Open_Product_detail_info);
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
