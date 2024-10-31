// return = returns a value back to the place where you invoked a function.

let area;
let width;
let heigth;

width = window.prompt("Enter width");
heigth = window.prompt("Enter heigth");

area = getArea(width, heigth);

console.log("The area is:", area);

function getArea(width, heigth) {
  return width * heigth;
}
