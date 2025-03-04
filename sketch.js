var daytime, nighttime;

function preload()
{
  daytime = loadImage("one.gif");
  nighttime = loadImage("two.gif");
}

function setup() {
  fill (69, 83, 130)
  createCanvas(daytime.width, daytime.height);
}

function draw() {
  background(220);
  
  // var time = Date.now() / 1000;

  // // -1...+1
  // var a = sin(time);
  
  // // 0 ... +1
  // a = (a + 1) / 2;
  
  // var x = a * width;


// SEA
// fill(0, 95, 137);
// rect(0, windowHeight / 1.7, windowWidth, windowHeight - windowHeight / 1.7);


// NIGHT SAND
// fill(107, 89, 39)
// rect(0, windowHeight / 1.2, windowWidth, windowHeight - windowHeight / 1.2)


// SAND
fill(216, 178, 79)
rect(0, windowHeight, windowWidth, windowHeight - windowHeight / 0.2)


// NIGHT SEA
fill(64, 84, 135);

var seaHeight = max(mouseY - 635, 798 - 635);
rect(0, 600, windowWidth, seaHeight);

  var x = map(mouseY, 798, height, 0, 1);
  x = constrain(x, 0, 1);
  x *= width;

  image(daytime, 0, 0, x, height, 0, 0, x, height);
  
  image(nighttime, x, 0, width - x, height, x, 0, width - x, height);
  

  fill(255, 255, 255, 80);
  noStroke();
  
  
  beginShape();
  
  vertex(1490, 173);
  vertex(1490, 121)
  vertex(x, 0);
  vertex(x, height);
  
  endShape();
}
