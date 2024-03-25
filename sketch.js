//Funcao que cria o cenario
function setup() {
  createCanvas(400, 400);
}

//Funcao que desenha o que esta acontecendo na tela
function draw() {
  background(estrada);
  image(sapo , xSapo , ySapo);
  
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
  movimentoDoSapo();
  travaSapo();
  movimentoCarros();
  retornoInicioCarros();
  collideRectRect();
  verificaColisao();
  marcaPonto();
  mostraPonto();
}