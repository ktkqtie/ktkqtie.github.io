/*
Katie Lee
lee.katie@northeastern.edu
Prototyping with Code
lab #1
Assignment[3]
*/


// background 

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(215, 243, 247);

  let cx = width / 2;
  let cy = height / 2;  
  //min of the width and height, so scale is 1/600th of pixels on page
  let scaleFactor = min(width, height) / 600;
  
//hair
  fill(77, 56, 56);
  noStroke();
  rectMode(CENTER);
  rect(cx, cy + (50), 300, 450, 80 );  
  ellipse(cx-20, cy+170, 300)
  ellipse(cx+20, cy+170, 300)

  
// head 
  fill(245, 215, 195);
  noStroke();
  rectMode(CENTER)
  rect(cx, cy, 250 ,290 ,220)
  
  fill(77, 56, 56);
  noStroke();
  arc(cx-50,cy-150, 120, 130, 0, PI); 
   arc(cx+50,cy-150, 120, 130, 0, PI); 

// neck
  fill(245, 215, 195);
  noStroke();
  rect(cx, cy + 150, 90, 90);

// body
  fill(170);
  rect(cx, cy+265, 290, 200, 50);
  
//eyes
  fill(30, 20, 20)
  ellipse(cx-60, cy-30, 40, 40)
  ellipse(cx+60, cy-30, 40, 40)
  
//pupils
  fill(255)
  ellipse(cx-60, cy-35, 15, 15)
  ellipse(cx+60, cy-35, 15, 15)
  
//cheeks
  fill(255, 181, 181)
  noStroke();
  ellipse(cx-75, cy+15, 65, 25)
  ellipse(cx+75, cy+15, 65, 25)
  
//nose
  fill(215, 175, 155)
  noStroke();
  ellipse(cx, cy+30, 20)
  
//mouth
  fill(230, 138, 138)
  noStroke();
  arc(cx,cy+45, 120, 130, 0, PI);

//teeth
  fill(255)
  noStroke();
  rect(cx-30, cy+56, 20, 20, 15, 10, 5);
  rect(cx, cy+56, 20, 20, 15, 10, 5);
  rect(cx+30, cy+56, 20, 20, 15, 10, 5);

  /*
  
  // was experimenting with teeth this was not it lol
  rect(cx-45, cy+55, 15, 20, 10)
  rect(cx-25, cy+55, 15, 20, 10 )
  rect(cx-5, cy+55, 15, 20, 10 )
  rect(cx+15, cy+55, 15, 20, 10 )
  rect(cx+35, cy+55, 15, 20, 10 )
  rect(cx+35, cy+55, 15, 20, 10 ) */

textSize(24)
  fill (100)
text('Katie Lee', width - 130, height - 50);

} 
  

