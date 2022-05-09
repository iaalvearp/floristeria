const btn_Menu = document.getElementById('nav__mobile_img');
const links_menu = document.getElementById('nav')

const show_menu = () => {
    links_menu.style.top = '0';
};

const hide_menu = () => {
    links_menu.style.top = '-70rem';
}

document.getElementById('nav__mobile_img').addEventListener('click', show_menu);
document.getElementById('nav').addEventListener('click', hide_menu);