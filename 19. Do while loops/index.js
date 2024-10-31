// do while loop = do something,
//                  then check the condition,
//                  repeat if condition is true.

let userName;
do {
  userName = window.prompt("Enter your name"); // first checking condition than jumping in to while loop.
} while (userName == "");

console.log("Hello", userName);
