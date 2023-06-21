const menu_button = document.querySelector("#menu-button");
const menu_mobile = document.querySelector("#mobile-menu");

menu_button.addEventListener('click', ()=>{
    menu_mobile.classList.toggle("hidden");
})