//código do carro

let xCarros = [600,600,600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [8, 10, 8.6, 9, 11, 9];
let comprimentoCarro = 50;
let alturaCarro = 40;

//carro 1
let xCarro = 600;
let velocidadeCarro1 = 2;

//carro 2
let xCarro2 = 600;

//carro 3
let xCarro3 = 600;
 
function mostraCarro(){
 for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
 }
}
  
  

function movimentaCarro(){
  for (let i = 0; i< imagemCarros.length; i++){
   xCarros[i] -= velocidadeCarros[i];  
  }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
  return xCarro < -50
}