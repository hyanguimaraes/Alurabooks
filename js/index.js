const botaoMenu = document.querySelector('.cabecalho_menu_hamburguer');
const menu = document.querySelector('.lista_menu');

botaoMenu.addEventListener('click', ()=> {
    menu.classList.toggle('lista_menu_ativo');
    botaoMenu.classList.toggle('cabecalho_menu_hamburguer_ativo')
});