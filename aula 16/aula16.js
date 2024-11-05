// iniciando o efeito Scrollreveal na primeira seção (#section1)
ScrollReveal().reveal('#section1', {
duration: 1000, // duração do efeito (em milissegundos), define a velocidade da transição.
origin: 'bottom', // origem de efeito: o conteúdo virá de baixo para cima.
distance: '50px', // distância que o elemento "viaja" antes de aparecer.
});

// comfigurando o efeito ScrollReveal na segunda seção (#section2).
ScrollReveal().reveal('#section2', {
duration: 1000, // duração do efeito revelação.
origin: 'right', // origem do efeito: o conteudo vira da direita para a esquerda.
distance: '50px' // distancia do movimento antes do elemento se revelar.
});

