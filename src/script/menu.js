// for create humburger menu
const hamburgerIcon = document.getElementById('hamburger-menu');
const menuList = document.getElementById('menu-list')
hamburgerIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden')
})


// for put on search bar on navigation
const searchNav = document.getElementById('search-nav')
const wrappNav  = document.querySelector('.wrap-nav')