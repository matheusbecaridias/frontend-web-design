var xCarros = [720, 0, 720, 0, 720, 0]; 
var yCarros = [50, 120, 180, 260, 315, 380];
var velCarros = [12, -10, 8, -6, 4, -2];
var comCarros = 60;
var altCarros = 40;
var faixas = [50, 120, 180, 260, 315, 380]; // faixas originais de cada carro
var yAlvo = [50, 120, 180, 260, 315, 380];  // faixa de destino
var velMudanca = 1.5;                        // velocidade de transição
var tickMudanca = [0, 0, 0, 0, 0, 0];       // contador p/ decidir quando mudar


function mostraCarros(){
  for (var i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], comCarros, altCarros);
  }
}
function movCarros(){
  for (var i = 0; i < carros.length; i++){
    xCarros[i] -= velCarros[i];

    if (yCarros[i] < yAlvo[i]) {
      yCarros[i] = Math.min(yCarros[i] + velMudanca, yAlvo[i]);
    } else if (yCarros[i] > yAlvo[i]) {
      yCarros[i] = Math.max(yCarros[i] - velMudanca, yAlvo[i]);
    }

    tickMudanca[i]++;
    if (tickMudanca[i] % 180 === 0) {
      yAlvo[i] = sortearFaixa(i);
    }

    if (passouTodaATela(i)) {
      if (velCarros[i] > 0) {
        xCarros[i] = 720;
      } else {
        xCarros[i] = -comCarros;
      }
      tickMudanca[i] = 0;
      yAlvo[i] = sortearFaixa(i);
    }
  }
}

function passouTodaATela(i) {
  if (velCarros[i] > 0) {
    return xCarros[i] < -comCarros;
  } else {
    return xCarros[i] > 720;
  }

}

function sortearFaixa(i) {
  var opcoes = faixas.filter(function(f) { return f !== yAlvo[i]; });
  return opcoes[floor(random(opcoes.length))];
}