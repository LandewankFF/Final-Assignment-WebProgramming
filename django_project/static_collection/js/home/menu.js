// for create humburger menu
const hamburgerIcon = document.getElementById('hamburger-menu');
const menuList = document.getElementById('menu-list')

hamburgerIcon.addEventListener('click', () => {
    menuList.classList.toggle('active');
});
