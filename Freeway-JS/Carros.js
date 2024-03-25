let yCarros = [176, 246, 317, 34, 105, 200];
let xCarros = [400, 400, 400, 400, 400, 400];
let velocidadeCarros = [1, 2.5, 3.5, 3, 2.9, 3.7];
let comprimentoCarro = 40;
let alturaCarro = 25;

//Movimento dos carros
function movimentoCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
xCarros[i] -= velocidadeCarros[i];
}
}

//Retornar carro ao inicio
function retornoInicioCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  if(xCarros[i] < -30){
    xCarros[i] = 400;
    }
  }
}