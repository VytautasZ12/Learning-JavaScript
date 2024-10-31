// ternary operator = Shortcut for and 'if/else statment'
//                    Takes 3 operands

//                    1. A condition with ?
//                    2. Expression if True.
//                    3. Expression if False.

// condition ? exprIfTrue : exprIfFalse

// without ? operator:

// let adult = checkAge(21);

// console.log(adult);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// with ? operator:

let adult = checkAge(21);

console.log(adult);

function checkAge(age) {
  // 1. A condition with ? 2. Expression if True : 3. Expression if False.
  return age >= 18 ? true : false;
}

// for checking boolean only

// checkWinner(true);

// function checkWinner(win) {
//   win ? console.log("You win!") : console.log("You lose!");
// }
