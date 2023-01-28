//MENU LATERAL
const botaoMenu = document.querySelector('.cabecalho_menu_hamburguer');
const menu = document.querySelector('.lista_menu');
const paginacao = document.querySelector('.swiper-pagination')

botaoMenu.addEventListener('click', ()=> {
    menu.classList.toggle('lista_menu_ativo');
    botaoMenu.classList.toggle('cabecalho_menu_hamburguer_ativo')
    paginacao.classList.toggle('swiper-pagination_menu_ativo')
});

//SWIPER
const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });