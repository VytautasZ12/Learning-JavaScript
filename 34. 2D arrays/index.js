// 2Dd array = An array of arrays.
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];
// its like columns and rows so [][] writing index of item that we wanna replace.
groceryList[2][2] = "steak"; // replacing apples.

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}
