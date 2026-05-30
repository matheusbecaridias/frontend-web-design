function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(pista);
  mostraAtor();
  movAtor();
  mostraCarros();
  movCarros();
  verificaColisao();
  pontos();
  vidas();
}