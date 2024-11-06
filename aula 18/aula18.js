// $ (document).ready: função que garante que o codigo dentro dela execute 
// somente após o HTML completo da página estar carregado.
$(document).ready(function() {
    // seleciona o container .carousel e aplica a função slick()
    // que ativa o carrosel com as configurações abaixo
    $('.carousel').slick({
        //slidesToShow: número de cards exibidos ao mesmo tempo no carrosel 
        slidesToShow: 3, // exibe 3 cards ao mesmo tempo

        //slidesTosxroll: define quantos cards serão deslizados ao mover o carrosel
        slidesToScroll: 1, // move 1 card por vez ao deslizar 

        //infinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: true, // mantem o carrossel em rotação continua

        //dots: quando true, ativa os pontos de navegação abaixo do carrossel
        dots:true, //adiciona pontos de navegação para os usuários

        //arrows: exibe setas de navegação nas laterais do carrossel 
        arrows: true // ativa as setas para navegar entre os cards
    });
});