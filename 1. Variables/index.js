// A variable is container for storing data.
// A variable behaves as if it was the value that it contains.

// Two steps:
// 1. Declaration (var, let, const).
// 2. Assignment (= assignment operator).

const firstName = "Rokas"; //srings
let age = 32; //number
let student = true; //boolean

age = age + 1;

console.log("Hello", firstName);
console.log(age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
