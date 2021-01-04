class Square {
  constructor(x, y, alpha, color) {
    this.x = x;
    this.y = y;
    this.alpha = alpha;
    this.color = color;
  }
}

class Reactor {
  constructor(config) {
    this.config = config;
  }

  createSquares() {
    const config = this.config;
    this.squares = [];
    let alpha = color = 0;

    for (let i = 0; i < config.n; i++) {
      let x = ((2 * config.a) + cos(alpha) * (config.r1 + config.r2)) / 2;
      let y = ((2 * config.b) + sin(alpha) * (config.r1 + config.r2)) / 2;
      this.squares.push(new Square(x, y, alpha, color));
      alpha += 2 / config.n * PI;
      color += 255 / config.n;
    }
  }

  drawSquares() {
    const config = this.config;
    rectMode(CENTER);

    for (let i = 0; i < this.squares.length; i++) {
      if (!config.isReverse && this.squares[i].color >= 255) {
        this.squares[i].color = 0;
      }

      if (config.isReverse && this.squares[i].color <= 0) {
        this.squares[i].color = 255;
      }

      if (!config.isReverse) {
        fill(this.squares[i].color += 255 / (this.squares.length * 5));
      } else {
        fill(this.squares[i].color -= 255 / (this.squares.length * 5));
      }

      push();
      translate(this.squares[i].x, this.squares[i].y);
      rotate(this.squares[i].alpha);
      square(0, 0, config.s);
      pop();
    }
  }
}