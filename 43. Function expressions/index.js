// function expression = function without a name (anonymus function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it.

// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

// // another way to write using function expression:

// const greeting = function () {
//   console.log("Hello");
// };

// greeting();

// assigning names to functions.

// let count = 0;

// function increaseCount() {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// }
// function decreaseCount() {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// example using function expression

let count = 0;

document.getElementById("increaseButton").onclick = function () {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
};

document.getElementById("decreaseButton").onclick = function () {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};
