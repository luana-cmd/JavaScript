//getAttribute - obter o valor do atributo/elemento (valor da linha).

//setAttribute - definir ou modificar o valor.

function changeImage() {
    const img = document.getElementById("myImage");
    //aqui conseguimos armazenar o conteúdo da imagem

    const observerImage = img.getAttribute("src");
    //aqui pegamos o atributo SRC da imagem, que basicamente diz o caminho de origem da imagem.

    if (observerImage === "gitblack.jpg") {
        //se a origem natural da imagem for igual a "git.black"

        img.setAttribute("src", "gitpink.jpg"); //usando o setAtt
        img.setAttribute("alt", "imagem GitHub 2");

    }
    else { //caso contrário fazer o processo inverso.

    img.setAttribute("src", "gitblack.jpg");
    img.setAttribute("alt", "imagem GitHub 1");
    }
}
 