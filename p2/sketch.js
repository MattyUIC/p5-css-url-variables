let num;
let ds;

//This is pulled directly from https://p5js.org/examples/dom-modifying-the-dom.html
class Dancer {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {
    this.x += random(-6, 6);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }
}

function setup() {
  let canvas = createCanvas(0.5*windowWidth, 0.5*windowWidth); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
   //get color value from URL
  let params = getParams();
  let clr = params.color; 
  num = params.num; 
  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, 'color', clr);
  a.href = href;
  p = createP(clr);
  p.style('font-size', '24px', 'color' , clr)
 ds = new Dancer(p, random(600), random(200));

  background(clr);
  fill('yellow');
  noStroke();
}

function draw() {
  ds.brownian();
  for(var i = 0; i < num; i++){
    ellipse(width/2, 50+i*30, 20);
  }
}
