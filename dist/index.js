var penwidth = 1;
var pen = 1;
var r = 0,
  g = 0,
  b = 0;
let timer = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomWord();
}

function draw() {
  fill(255);
  noStroke();
  rect(width - 50, 0, 22, 20);
  time();
  fill(255, 0, 0); //red
  ellipse(20, 180, 20, 20);
  fill(255, 128, 0); //orange
  ellipse(20, 210, 20, 20);
  fill(255, 255, 0); //yellow
  ellipse(20, 240, 20, 20);
  fill(0, 255, 0); //green
  ellipse(20, 270, 20, 20);
  fill(0, 255, 255); //blue
  ellipse(20, 300, 20, 20);
  fill(0, 64, 128); //indigo
  ellipse(20, 330, 20, 20);
  fill(128, 0, 128); //purple
  ellipse(20, 360, 20, 20);
  fill(0, 0, 0);
  ellipse(20, 390, 20, 20);

  if (mouseIsPressed) {
    var px = pmouseX,
      py = pmouseY,
      x = mouseX,
      y = mouseY;
    if (x < 20) {
      if (y > 530 && y < 550) penwidth = 1;
      else if (y > 550 && y < 570) penwidth = 3;
      else if (y > 570 && y < 590) penwidth = 5;
      else if (y > 160 && y < 200) {
        r = 255;
        g = 0;
        b = 0; //red
      } else if (y > 190 && y < 230) {
        r = 255;
        g = 128;
        b = 0; //orange
      } else if (y > 220 && y < 260) {
        r = 255;
        g = 255;
        b = 0; //yellow
      } else if (y > 250 && y < 290) {
        r = 0;
        g = 255;
        b = 0; //green
      } else if (y > 280 && y < 320) {
        r = 0;
        g = 255;
        b = 255; //blue
      } else if (y > 310 && y < 350) {
        r = 0;
        g = 64;
        b = 128;
      } //indigo
      else if (y > 340 && y < 380) {
        r = 128;
        g = 0;
        b = 128;
      } //purple
      else if (y > 370 && y < 410) {
        r = 0;
        g = 0;
        b = 0;
      } //black
    } else {
      if (pen == 1) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        line(px, py, x, y);
      }
    }
  }

  if (keyIsPressed)
    if (keyCode == BACKSPACE) {
      fill(255);
      noStroke();
      rect(0, 50, windowWidth, windowHeight);
    }
  textSize(20);
}

function time() {
  fill(0);
  textSize(20);
  text(timer, windowWidth - 50, 20);
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
 if (timer == 0) {
   textAlign(CENTER, CENTER);
   text("DRAWING OVER! Press s to save your image.", width/2, height/2);
 }
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('photo', 'png');
  }
}

function randomWord() {
  var theWord = [
    'Superman with a banana',
    'Goose with a hat',
    'Dog with a blog',
    'Man wearing a watch',
    'Licking Chicken',
    'Fruit with a foot',
  ];

  var wordNum = Math.floor(Math.random() * theWord.length);

  textSize(20);
  text("Word: " + theWord[wordNum], windowWidth/2 - 80, 20);
}
