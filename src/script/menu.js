// for create humburger menu
const hamburgerIcon = document.getElementById('hamburger-menu');
const menuList = document.getElementById('menu-list')

function toogleMenu(){
    menuList.classList.toggle('hidden')
}
hamburgerIcon.addEventListener('click', toogleMenu);