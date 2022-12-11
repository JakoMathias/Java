// variaveis da raquete
deixe xRaquete = 5;
deixe yRaquete =150;
deixe raqueteComprimento = 10;
deixe altura = 90;
deixe colidiu = false;

//variáveis ​​do oponete
deixe xRaqueteOponente = 585;
deixe yRaqueteOponente = 150;
let speedYOponente;

//variáveis ​​da bolinha
deixe xBolinha = 300;
deixe yBolinha = 200;
deixe diâmetro = 13;
let raio = diametro / 2;

//velocidade da bolinha
deixa velocidadeXBolinha = 6;
deixe velocidadeYBolinha = 6;

// placa do jogo
deixe meusPontos = 0;
deixe pontosOponente =0;

//filhos do jogo
deixe raquetada;
deixe ponto;
deixe a trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

função configuração() {
  criarCanvas(600, 400);
  trilha.loop();
}
função desenhar() {
  fundo(0);
  mostraBolinha();
movimentaBolinha();
verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
  if (xBolinha + raio>largura ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> altura ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y){
  rect(x,y,raqueteComprimento,altura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete-=10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete+=10;
  }
}
função colisão(){
  if(xBolinha - raio < xRaquete + raqueteComprimento){
    velocidadeXBolinha *= -1;
  }
}
função verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, altura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function movimentaRaqueteOponente() {
  if (keyIsDown(87)){
    yRaqueteOponente-=10;
  }
    if (keyIsDown(83)){
    yRaqueteOponente+=10;
  }
    
}
  function incluiPlacar(){
    acidente vascular cerebral (255);
    textAlign(CENTER);
    textSize(16);
    fill(cor(255, 140, 0));
    rect(150, 10, 40, 20);
    preencher (255);
    text(meusPontos, 170, 26);
    fill(cor(255, 140, 0));
    rect (450, 10, 40, 20);
    preencher (255);
    text (pontosOponente, 470, 26)
  }

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1
    ponto.play();
  }
  if (xBolinha < 10 ){
    pontosOponente += 1;
    ponto.play();
  }
}