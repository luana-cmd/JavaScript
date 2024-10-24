let matrizVendas = [
    [100, 200, 300], //loja A - índice 0
    [400, 500, 50], //loja B - índice 1
    [700, 400, 450], //loja C - índice 2
]

// console.log(matrizVendas);
console.log(matrizVendas[0]);

matrizVendas[0][1] = 800; //indo do índice 0 (loja A) e buscando o índice interno do elemento.
console.log(matrizVendas[0]); //fazendo a impressão da loja A no terminal 



console.log(matrizVendas[1]);

matrizVendas[1][2] = 700; //indo do índice 0 (loja A) e buscando o índice interno do elemento.
console.log(matrizVendas[1]); //fazendo a impressão da loja A no terminal 



console.log(matrizVendas[2]);

matrizVendas[2][0] = 250; //indo do índice 0 (loja A) e buscando o índice interno do elemento.
console.log(matrizVendas[2]); //fazendo a impressão da loja A no terminal 



let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);