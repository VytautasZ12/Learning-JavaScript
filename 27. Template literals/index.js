// Template literals = delimited with (``)
//                      instead of double or single quotes
//                      allows embedded variables and expression.

let userName = "JavaScript";
let items = 3;
let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Total is $", total);

// another way using (``)

// console.log(`Hello ${userName}.`);
// console.log(`You have ${items} items in your cart.`);
// console.log(`Total is  ${total}$.`);

// another way using (``)

let text = `Hello ${userName}.<br>
You have ${items} items in your cart.<br>
Total is  ${total}$.`;

// console.log(text);
document.getElementById("myLabel").innerHTML = text;
