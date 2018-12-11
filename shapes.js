const Thing = require('./thing');

class twoDShape extends Thing {
    constructor() {
        super();
        this.depth = 0;
    }
}

class threeDShape extends Thing {

}

class Circle extends twoDShape {
    constructor(diameter, colour) {
        super();
        this.diameter = this.height = this.width = diameter;
        this.area = Math.PI * (diameter / 2) ** 2
        this.colour = colour;
    }
}

class Square extends twoDShape {
    constructor(side, colour) {
        super();
        this.height = this.width = side;
        this.area = side * side;
        this.colour = colour;
    }
}

class Globe extends threeDShape {
    constructor(diameter, colour) {
        super();
        this.diameter = this.height = this.width = this.depth = diameter;
        this.volume = Math.PI * (diameter / 2) ** 3
        this.colour = colour;
    }
}

class Cube extends threeDShape {
    constructor(side, colour) {
        super();
        this.height = this.width = this.depth = side;
        this.volume = side ** 3;
        this.colour = colour;
    }
}

module.exports = exports = { twoDShape, threeDShape, Circle, Square, Globe, Cube };
