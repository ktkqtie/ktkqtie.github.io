/*
Katie Lee
lee.katie@northeastern.edu
Prototyping with Code 
Assignment 6
Drawing Assignment
 */

let colorPicker;
let weightSlider;
let clearBut;
let eraserBut;
let isErasing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //color picker setup
  colorPicker = createColorPicker('#000000');// setting default color to black
  colorPicker.position(10, 40);

  //creating the slider for stroke size 
  weightSlider = createSlider(1, 50, 5); //min, max , where it is
  weightSlider.position(70, 40);
  
  //creating button for eraser
  eraserBut = createButton('toggle eraser');
  eraserBut.position(220, 40);
  eraserBut.mousePressed(toggleEraser);

  //creating button for clearing canvas
  clearBut = createButton('clear canvas');
  clearBut.position(330, 40);
  clearBut.mousePressed(clearCanvas);
}

function draw() {
  if (mouseIsPressed && mouseY > 80) { 
    //only draw if mouse is pressed and below gray area
    if (isErasing) {
      stroke(255); //erase with white
    } else {
      stroke(colorPicker.color());
    }
    
    strokeWeight(weightSlider.value());
    line(pmouseX, pmouseY, mouseX, mouseY);
    //drawing from where you are holding the mouse
  }
  
  drawControls();
}

function drawControls() {
  noStroke(); //no borders for shapes created
  fill(240); //gray
  rect(0, 0, width, 80);
  
  fill(0); //black text
  textSize(16);
  text('pick a color & size! then draw below this gray bar! press "S" to save.', 10, 25);
  
  if (isErasing) {
    fill(255, 0, 0); //text will be red
    text('Mode: ERASER', 440, 55);
  } else {
    fill(0, 150, 0); //text will be green
    text('Mode: DRAWING', 440, 55);
  }
}

function toggleEraser() {
  isErasing = !isErasing; //flips the switch for toggling eraser
}

function clearCanvas() { //clearing canvas, fully white
  background(255);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myDrawing', 'png');
  }
}
