
let clr = 'red';
let clr_input;
let num_input; 


let img;

function preload(){
  img = loadImage("img/ticket.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //add clr_input to set color
  clr_input = createInput();
  clr_input.position(0, 150);
  clr_input.attribute('placeholder', 'type a color');

  //add num_input to set number
  num_input = createInput();
  num_input.position(0, 100);
  num_input.attribute('placeholder', 'type a number');

  //add submit button
  button = createButton('submit');
  button.position(clr_input.x + clr_input.width, clr_input.y);
}

function draw() {
  image(img, mouseX + width/15, mouseY + height/15, width, height)
  stroke('red');
  line(random(width), random(height), random(width), random(height));
  //on button press
  button.mousePressed(function(){
    clr = clr_input.value(); //get value from clr_input field
    num = num_input.value(); 
    var href = setParams('./p2', 'color', clr); //set URL navigation to include clr value
    href = setParams(href, 'num', num); //set URL navigation to include clr value
    window.location.href = href; //navigate to URL set above
  });

}

