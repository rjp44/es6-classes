const Thing = require( './thing' );

class twoDShape extends Thing {
  constructor() {
    super();
    this.depth = 0;
  }
}

class threeDShape extends Thing {

}

class Circle extends twoDShape {
  constructor( diameter, colour ) {
    super();
    this.diameter = this.height = this.width = diameter;
    this.colour = colour;
  }
  get area() {
    return Math.PI * ( this.diameter / 2 ) ** 2;
  }
}

class Square extends twoDShape {
  constructor( side, colour ) {
    super();
    this.height = this.width = side;
    this.colour = colour;
  }
  get area() {
    return this.height * this.width;
  }
}

class Globe extends threeDShape {
  constructor( diameter, colour ) {
    super();
    this.diameter = this.height = this.width = this.depth = diameter;
    this.colour = colour;
  }
  get volume() {
    return Math.PI * ( this.diameter / 2 ) ** 3;
  }
}

class Cube extends threeDShape {
  constructor( side, colour ) {
    super();
    this.height = this.width = this.depth = side;
    this.colour = colour;
  }
  get volume() {
    return this.height * this.width * this.depth;
  }
}

module.exports = exports = { twoDShape, threeDShape, Circle, Square, Globe, Cube };
