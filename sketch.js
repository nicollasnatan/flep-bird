let birdImage;
let fundo;
let pipeImage;
let tema;

let bird;
let pipes = [];

async function setup() {
  createCanvas(600, 500);
  birdImage = await loadImage('bird.png');
  pipeImage = await loadImage('pipe.png');
  tema = await loadSound('tema.mp3')
  fundo =await loadImage('fundo.jpg')
  
  bird = new Bird(25,width/2,birdImage);
  pipes.push(new Pipe(width,pipeImage));
  tema.play()
}

function draw() {
  background(fundo);
  bird.exibir();
  bird.update();

  if (frameCount % 200 === 0) {
  pipes.push(new Pipe(width, pipeImage));
}

  for(let pipe of pipes){
    pipe.exibir();
    pipe.update();

    if(bird.colidiu(pipe)){
      
      noLoop();
    }
  }
}

function keyPressed(){
  if(key === ' '){
    
    bird.up();
  }
}