// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function (){}

// if try reach (i) outside {} will show error 'as not difined' because (i) can be reached only inside {}
// because its decleared with let.

for (let i = 1; i <= 3; i += 1) {
  console.log(i);
}
// console.log(i); // can't be reached from here.

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// variable declared with var can escape set {}, but can't escape functions {}.
// if you declare global variable with a war it can mess with browser window properties.

// doSomething();

// function doSomething() {
//   for (var i = 1; i <= 3; i += 1) {}
// }
// console.log(i);

// better use let instead of var.
