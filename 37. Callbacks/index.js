// callback = a function passed as an argument
//            to another function.

//  Ensures that a function is not going to run before a task is completed.
// Helps us develope asynchronimous code.
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems.
// Ex. Wait for a file to load.

// let total = sum(2, 3);
// displayDom(total);

// function sum(x, y) {
//   let result = x + y;
//   return result;
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDom(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// Another way using callback.

sum(2, 3, displayDom);

function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDom(output) {
  document.getElementById("myLabel").innerHTML = output;
}
