//Função que alterna a cor de fundo e do texto para garantir contraste.

function trocarCor() {
 //Verifica a co atual de fundo
 if (document.body.style.backgroundColor === "black") {
    //Se estiver preto, muda para branco e altera o texto para preto.
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";

    //atualiza o texto do botão para indicar o "Modo Escuro"
    document.getElementById("toggleButton").textContent = "Modo Escuro";  
 } else 
 {
    //Se estiver branco, muda para preto e altera o texto para branco
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    //atualiza o texto do botão para indicar o "Modo Claro"
    document.getElementById("toggleButton"). textContent = "Modo Claro";
 }
}