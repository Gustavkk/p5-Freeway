//Imagens
let sapo;
let carroAzul;
let carroVerde;
let carroRosa;
let estrada;

//Sons
let morte;
let trilha;
let ponto;


let imagemCarros = [carroAzul, carroVerde, carroRosa, carroAzul, carroVerde, carroRosa]

//Funcao que pre-carrega os itens
function preload(){
  estrada = loadImage("Imagens/Estrada.jpg")
  sapo = loadImage("Imagens/Sapo.png")
  imagemCarros[0] = loadImage("Imagens/Carro azul.png")
  imagemCarros[1] = loadImage("Imagens/Carro Verde.png")
  imagemCarros[2] = loadImage("Imagens/Carro Rosa.png")
  imagemCarros[3] = loadImage("Imagens/Carro azul.png")
  imagemCarros[4] = loadImage("Imagens/Carro Verde.png")
  imagemCarros[5] = loadImage("Imagens/Carro Rosa.png")
  
  //tilha = loadSound("Sons/Video Game 2.wav");
  //morte = loadSound("Sons/Toy Honk.wav");
  //ponto = loadSound("Sons/Wand.wav");
}