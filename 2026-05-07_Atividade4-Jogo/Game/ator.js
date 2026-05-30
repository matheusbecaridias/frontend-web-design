var xAtor = 350; // Começar no meio horizontal
var yAtor = 445; // Começar no chão
var colisao = false;
var meusPontos = 0;
var minhasVidas = 15;

function mostraAtor(){
  image(ator, xAtor, yAtor, 35, 35);
}

function movAtor(){
  if (minhasVidas > 0) {
    if (keyIsDown(UP_ARROW)) { yAtor -= 6; }
    if (keyIsDown(DOWN_ARROW)) { 
      if (yAtor < 445) { yAtor += 6; } // Limite para não descer demais
    }
    if (keyIsDown(LEFT_ARROW)) { 
      if (xAtor > 0) { xAtor -= 6; }
    }
    if (keyIsDown(RIGHT_ARROW)) { 
      if (xAtor < 690) { xAtor += 6; }
    }
  }
}

function verificaColisao(){
  for (var i = 0; i < carros.length; i++){
    // Ajustado para colisão retangular mais precisa
    colisao = collideRectRect(xCarros[i], yCarros[i], comCarros, altCarros, xAtor, yAtor, 25, 25);
    if (colisao){
      voltaAtorParaPosicaoInicial();
      if (minhasVidas > 0) {
        minhasVidas -= 1; // Corrigido: antes estava apenas "minhasVidas-1"
      }
    }
  } 
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 445;
}

function pontos(){
  textSize(25);
  fill(255, 240, 0);
  text(meusPontos, width / 4, 27);
  if (yAtor < 15){
    meusPontos++;
    voltaAtorParaPosicaoInicial();
  }
}

function vidas(){
  textSize(25);
  fill(255, 0, 0);
  text("Vidas: " + minhasVidas, 500, 30);
  if (minhasVidas === 0){
    // Para o jogo ou reseta
    fill(255, 0, 0);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}