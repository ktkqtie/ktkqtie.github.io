/*
  Name: Katie Lee
  Email: lee.katie@northeastern.edu
  Class: Prototyping with Code
  Assignment: #4
  Title: "decorative pattern"
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50); 

  let xSpacing = 50; 
  let ySpacing = 80; 

  //row
  for (let y = 0; y <= height; y += ySpacing) {
    
    if (y < height * 0.20) {
      fill(220, 20, 60); 
    } else if (y < height * 0.5) {
      fill(255, 150, 200); 
    } else {
      fill(255, 255, 255); 
    }
    
    noStroke();

    // column
    for (let x = 0; x <= width; x += xSpacing) {
      push();
      let stepIndex = x / xSpacing;
      translate(x, y);

    //alternate btween heart and diamond
      // even = hearts , odd = diamond
      if (stepIndex % 2 === 0) {
        drawHeart(30, 30, 50); 
      } else {
        drawDiamond(30, 75, 25);
      }
      pop();
    }
  }
}


function keyPressed() {
  if (key == 'S' || key == 's') {
    saveCanvas("assignment4_pattern_lee_katie", "png");
  }
}

// Shape 1: Custom Heart
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

// Shape 2: Custom Diamond
function drawDiamond(x, y, size) {
  beginShape();
  vertex(x, y - size * 1.5);
  vertex(x + size, y);
  vertex(x, y + size * 1.5);
  vertex(x - size, y);
  endShape(CLOSE);
}
