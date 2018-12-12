const { twoDShape, threeDShape, Circle, Square, Globe, Cube } = require('./shapes');

let myCube = new Cube(3, 'red');
let myCircle = new Circle(3, 'orange');
let mySquare = new Square(3, 'yellow');
let myGlobe = new Globe(3, 'green');

console.log({ myCube, myCircle, mySquare, myGlobe});
