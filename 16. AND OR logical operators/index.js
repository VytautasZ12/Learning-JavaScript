// Gives us the ability to check more than 1 condition cocurrently
// && AND (BOTH CONDITIONS MUST BE TRUE)
// || OR (Either condition must be true)

// && operator.

// let temp = 5;

// if (temp > 0 && temp < 30) {
//   console.log("The wearher is good!");
// }
// else {
//   console.log("The weather is bad!");
// }

// || operator.

let temp = 19;
if (temp <= 0 || temp >= 30) {
  console.log("Ther weather is bad!");
} else {
  console.log("The weather is good!");
}
