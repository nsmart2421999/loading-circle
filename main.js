let circle1, circle2;

function setup() {
  createCanvas(500, 500);

  circle1 = new Reactor({
    a: width / 2,
    b: height / 2,
    r1: 75,
    r2: 65,
    n: 10,
    s: 20
  });

  circle2 = new Reactor({
    a: width / 2,
    b: height / 2,
    r1: 37.5,
    r2: 32.5,
    n: 10,
    s: 10,
    isReverse: true
  });

  circle1.createSquares();
  circle2.createSquares();
}

function draw() {
  background(0);

  circle1.drawSquares();
  circle2.drawSquares();
}

