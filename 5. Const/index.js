// const = a variable that can't be changed.

const PI = 3.14159; // from let changed to const so data can't be changed.
let radius;
let circumference;

radius = window.prompt("Enter the radies of a circle");
radius = Number(radius);

// PI = 420.69; // line for testing that pi will change.

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);
