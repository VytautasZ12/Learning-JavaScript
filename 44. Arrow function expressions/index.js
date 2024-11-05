// arrow function = compact alternative to a traditional function expression.
// =>

// simple function.
// const greeting = function (userName) {
//   console.log("Hello", userName);
// };

// greeting("Vytas");

// using arrow function
// don't need use curly braces{} if function uses only 1 statment.
// do need curly braces {} if function uses more than 1 statment.

// const greeting = (userName) => console.log("Hello", userName);

// greeting("JavaScript");

// simple function
// const percent = function (x, y) {
//   return (x / y) * 100;
// };
// console.log(`${percent(80, 150)}%`);

// ussing arrow function

// const percent = (x, y) => (x / y) * 100;
// console.log(`${percent(80, 100)}%`);

// normal function
// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x, y) {
//   return y - x;
// }
// function print(element) {
//   console.log(element);
// }

// using arrow function

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
