// swith = statment that examines a value
//          for match against many case clauses.
//          More efficieint that many "else if" statements.

// Example..

// let grade = "A";

// if (grade == "A") {
//   console.log("You did great!");
// }
// else if (grade == "B") {
//   console.log("You did good!");
// }
// else if (grade == "C") {
//   console.log("You did okay!");
// }
// else if (grade == "D") {
//   console.log("You passed...barely!");
// }
// else if (grade == "F") {
//   console.log("YOU FAILED!");
// }
// else {
//   console.log(grade, "is not a letter grade!");
// }

// Better way

// let grade = "A";

// switch (grade) {
//   case "A":
//     console.log("You did great!");
//     break;
//   case "B":
//     console.log("You did good!");
//     break;
//   case "C":
//     console.log("You did okay!");
//     break;
//   case "D":
//     console.log("You passed...barely!");
//     break;
//   case "F":
//     console.log("YOU FAILED!");
//     break;
//   default:
//     console.log(grade, "is not a letter!");
// }

// can be used with true.

let grade = 50;

switch (true) {
  case grade >= 90:
    console.log("You did great!");
    break;
  case grade >= 80:
    console.log("You did good!");
    break;
  case grade >= 70:
    console.log("You did okay!");
    break;
  case grade >= 60:
    console.log("You passed...barely!");
    break;
  case grade < 60:
    console.log("YOU FAILED!");
    break;
  default:
    console.log(grade, "is not a number!");
}
