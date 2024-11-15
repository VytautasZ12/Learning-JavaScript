// The idea behind a module is that it's a file of reusable code.
// We can import sections of pre-written code to use whenever we want.
// Great for any general utility values and functions.
// Helps to make your code more reusable and maintanable.
// Think of modules as separate chapters of book.

import { PI, getCircumference, getArea } from "./math_util.js";

console.log(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);
