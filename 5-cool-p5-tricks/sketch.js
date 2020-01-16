function setup() {
  // put setup code here
  let weirdbackground = createCanvas(800,500);
  weirdbackground.position(0,0);
  weirdbackground.style('z-index', '-1');

  frameRate(1)

}

function draw() {
  // put drawing code here
  background("pink")
  noStroke();
  fill(random(0,255),random(0,255),random(0,255),100)
  ellipse(random(0,width),random(0,height),100,100)
}
