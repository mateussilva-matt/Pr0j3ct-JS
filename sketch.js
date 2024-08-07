function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("white");
    fill("white");
  
     //console.log(mouseIsPressed);
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 10, 15);
    }
  }