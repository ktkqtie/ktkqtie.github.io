/*
Katie Lee
lee.katie@northeastern.edu
Prototyping with Code
Assignment 5
Screensaver Assignment
 */

let points = [];
let velocities   = [];
let numPoints = 6; // each line is 2 pts
let hueValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 255); // hue, saturation, brightness
  background(0);

  let speedScale = min(width, height) * 0.005;

  for (let i = 0; i < numPoints; i++) {
    points.push(createVector(random(width), random(height)));
    velocities.push(p5.Vector.random2D().mult(speedScale));
  }
}

function draw() {
  // fading trail effect
  noStroke();
  fill(0, 0, 0, 12); 
  rect(0, 0, width, height);

  hueValue = (hueValue + 0.5) % 360;

  for (let i = 0; i < numPoints; i++) {
    points[i].add(velocities[i]);
    bounce(points[i], velocities[i]); //bounce off edges
  }

  // lines connecting the points in a chain
  strokeWeight(2);
  for (let i = 0; i < numPoints - 1; i++) {
    // gradient
    let currentHue = (hueValue + i * 10) % 360;
    stroke(currentHue, 80, 100, 150);
    
    line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    
    // joints/dots
    noStroke();
    fill(currentHue, 80, 100, 255);
    circle(points[i].x, points[i].y, 5);
  }
  
  // last dot
  circle(points[numPoints-1].x, points[numPoints-1].y, 5);
}

function bounce(pos, vel) { //posiion
  if (pos.x < 0 || pos.x > width) vel.x *= -1;
  if (pos.y < 0 || pos.y > height) vel.y *= -1;
  pos.x = constrain(pos.x, 0, width);
  pos.y = constrain(pos.y, 0, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

