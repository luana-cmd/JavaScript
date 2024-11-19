// Seleciona o elemento que contém todas as imagens do carrossel
const track = document.getElementById('carouselTrack');

// Contém o número de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // Índice que rastreia a imagem atual

// Função que move o carrossel para a próxima imagem
function moveCarousel() {
    // Incrementa o índice para avançar uma imagem
    index++;

    // Verifica se o índice chegou à última imagem 
    if (index >= items.length - 1) {
        // Pequeno atraso para permitir que a transição termine
        ///define um atraso de 500 milisegundos antes de executar a função de retorno ao iniciar
        setTimeout(() => {  //setTimeou: está trabalhando com o tema de alguma coisa
            //remove a transição para que o retorno...    
            track.style.transition = 'none'; // Remove a animação

            //reseta o indice para 0, que representa a primeira imagem
            index = 0; // Volta ao início (primeira imagem)

            //move o carrossel de volta para a primeira imagem (poisição inicial)
            track.style.transform = `translateX(0)`; // Move para a primeira imagem

        }, 500); // Tempo suficiente para completar a transição visível
    } else {

        //caso o indice ainda não tenha atingido o final, move o carrossel para a primeira imagem

        //adiciona uma transição suave de 0.3 segundos para o movimento do carrossel

        // Move o carrossel para a próxima imagem
        //move o carrossel para a esquerda, usando o indice geral para calcular o deslocamento
        //ex: se index = 1, desloca -100%, se index = 2, desloca -200%, etc.
        track.style.transition = 'transform 0.5s ease'; // Adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; // Desloca o carrossel
    }
}

// Define um intervalo para mover o carrossel automaticamente a cada 3 segundos
setInterval(moveCarousel, 1000); // Corrigido o intervalo para 3000ms (3 segundos)