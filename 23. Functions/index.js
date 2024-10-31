// function = Define code once, and use it many times.
//            To perform some code, call the function name.

// instead of repeating all that code use function.

// console.log("Happy birthday to you!");
// console.log("Happy birthday to you!");
// console.log("Happy birthday dear ______");
// console.log("Happy birthday to you!");
// console.log("You are ___ years old!");

// console.log("Happy birthday to you!");
// console.log("Happy birthday to you!");
// console.log("Happy birthday dear ______");
// console.log("Happy birthday to you!");
// console.log("You are ___ years old!");

// console.log("Happy birthday to you!");
// console.log("Happy birthday to you!");
// console.log("Happy birthday dear ______");
// console.log("Happy birthday to you!");
// console.log("You are ___ years old!");

// this how it looks when using function.
// by calling function more times it will repeat same code as many times as you want.

startProgram();

function startProgram() {
  let userName = "JavaScript";
  let age = 21;

  happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName);
  console.log("Happy birthday to you!");
  console.log("You are", age, "years old!");
}
