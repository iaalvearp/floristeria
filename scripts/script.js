const btn_Menu = document.getElementById('nav__mobile_img');
const links_menu = document.getElementById('nav')

const show_menu = () => {
    links_menu.style.top = '0';
    btn_Menu.style.display = 'none'
};

const hide_menu = () => {
    links_menu.style.top = '-70rem';
    btn_Menu.style.display = 'block'
}

document.getElementById('nav__mobile_img').addEventListener('click', show_menu);
document.getElementById('nav').addEventListener('click', hide_menu);