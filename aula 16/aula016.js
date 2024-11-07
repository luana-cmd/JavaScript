// iniciando o efeito Scrollreveal na primeira seção (#section1)
ScrollReveal().reveal('#sessão-1', {
    duration: 1000, // duração do efeito (em milissegundos), define a velocidade da transição.
    origin: 'bottom', // origem de efeito: o conteúdo virá de baixo para cima.
    distance: '50px', // distância que o elemento "viaja" antes de aparecer.
    });
    
    // comfigurando o efeito ScrollReveal na segunda seção (#section2).
    ScrollReveal().reveal('#sessão-2', {
    duration: 1000, // duração do efeito revelação.
    origin: 'right', // origem do efeito: o conteudo vira da direita para a esquerda.
    distance: '50px' // distancia do movimento antes do elemento se revelar.
    });



    const typed = new Typed('#Typed-text', {
        strings: ['Grupo Blessed', 'Mecânica Automotiva'],
        typedSpeend: 50, //velocidade que será digitado nosso text
        backSpeed: 25, //velocidade de retorno do text 
        loop: true, //faz com que o texto fique em execução infinita
        showCursor: false, //aqui estamos removendo o cursos padrão do HTML
        fadeOut: true, //aqui adiciona uma transição (opional)
    });
    



    $(document).ready(function() {
        $('.blessed').slick({

            slidesToShow: 3,
    
            slidesToScroll: 1,

            infinite: true, 
    
            dots:true, 

            arrows: true 
        });
    });