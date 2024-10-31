// nested loop = a loop inside of anotherr loop

// in first for i <= 2 will show how many times loop will be repeated.

// for (let i = 1; i <= 2; i += 1) {
//   for (let j = 1; j <= 3; j += 1) {
//     console.log(j);
//   }
// }

// this will create Rectangle

let symbol = window.prompt("Enter simbol to use");
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");

for (let i = 1; i <= rows; i += 1) {
  for (let j = 1; j <= columns; j += 1) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
