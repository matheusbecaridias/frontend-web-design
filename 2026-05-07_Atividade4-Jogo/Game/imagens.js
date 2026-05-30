let pista;
let ator;
let carros;

function preload(){
  pista = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  
  let carro1 = loadImage("imagens/carro-1.png");
  let carro2 = loadImage("imagens/carro-2.png");
  let carro3 = loadImage("imagens/carro-3.png");
  
  carros = [carro1, carro2, carro3, carro1, carro2, carro3];
}