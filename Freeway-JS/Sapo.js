//Coordenadas sapo
let xSapo = 10;
let ySapo = 375;
let comprimentoSapo = 10
let alturaSapo = 10
let colisao = false;

//Pontuação
let pontuacao = 0

//Movimento do sapo
function movimentoDoSapo()
{
  if(keyIsDown(UP_ARROW))
  ySapo -= 2;
  if(keyIsDown(DOWN_ARROW))
  ySapo += 2;
  if(keyIsDown(LEFT_ARROW))
  xSapo -= 2;
  if(keyIsDown(RIGHT_ARROW))
  xSapo +=2;
}

//Nao deixa sapo fora da tela
function travaSapo(){
  if(xSapo < 5){
    xSapo = 5;
  }
  if(xSapo > 375){
    xSapo = 375
  }  
  if(ySapo > 375){
    ySapo = 375
  }
}
//Verifica as colisões do sapo com os carros
function verificaColisao(){
  
  //collideRectRect(200, 200, 100, 150, xCarros[i], yCarros[i], 50, 75);
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectRect(xCarros [i], yCarros [i], comprimentoCarro, alturaCarro, xSapo, ySapo, comprimentoSapo, alturaSapo);
 // if(colisao){
  if(colisao){
    xSapo = 10, ySapo = 375, pontuacao = 0 //, play(morte);
      }
    }
  }

function mostraPonto(){
  fill(255)
  textSize(30);
  text(pontuacao, 300, 27);
}

function marcaPonto(){
if(ySapo < 25){
  pontuacao += 1;
  xSapo = 10;
  ySapo = 375;
  }
}