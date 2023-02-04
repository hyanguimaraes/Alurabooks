//JAVASCRIPT PARA MENUS

//MENU LATERAL
const botaoMenu = document.querySelector('.cabecalho_menu_hamburguer');
const menu = document.querySelector('.lista_menu');
const paginacao = document.querySelector('.swiper-pagination')

botaoMenu.addEventListener('click', ()=> {
    menu.classList.toggle('lista_menu_ativo');
    botaoMenu.classList.toggle('cabecalho_menu_hamburguer_ativo')
    paginacao.classList.toggle('swiper-pagination_menu_ativo')
});

//MENU CATEGORIAS
const botaoCategorias = document.querySelector('.cabecalho_opcoes_botao')

botaoCategorias.addEventListener('click', ()=>{
    menu.classList.toggle('lista_menu_ativo');
    botaoCategorias.classList.toggle('cabecalho_opcoes_botao_ativo');
})