// method chaining = calling one method after another in one continuous line of code.

let userName = "bro";
/*
let letter = userName.charAt(0); this example show how to change first letter in to upper case letter with 2 lines of code.
letter = letter.toUpperCase();
*/

let letter = userName.charAt(0).toUpperCase(); // this is how it looks using method chaining.

console.log(letter);
