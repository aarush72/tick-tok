

var engine,world


function setup() {
  createCanvas(800,400);
  
 
}

function draw() {
  background("black"); 
  translate(200,200)
  rotate(-90)

  let sc = second();
  hr = hour();
  mn = minute();

   angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)


  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,100,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7);
  line(0,0,75,0)
  pop();


  push();
  rotate(hrAngle)
  stroke("cyan")
  strokeWeight(7);
  line(0,0,50,0)
  pop();

  stroke("white")
  point(0,0)

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle)

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle)

  stroke("cyan");
  arc(0,0,260,260,0,hrAngle)

  drawSprites();
}