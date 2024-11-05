// objects = A group of properties and methods
//           properties = what an object has
//           methods = what an object can do
//           use . to access properties/methods.

// const car is object
const car = {
  // here 3 properties what object has.
  model: "Mustang",
  color: "red",
  year: 2023,
  // here are 2 methods what object can do
  drive: function () {
    console.log("You driving Mustang.");
  },
  brake: function () {
    console.log("You step on the brakes.");
  },
};
// const car2 is object
const car2 = {
  // here 3 properties what object has.
  model: "Ferrari",
  color: "black",
  year: 2024,
  // here are 2 methods what object can do
  drive: function () {
    console.log("You driving Ferrari.");
  },
  brake: function () {
    console.log("You step on the brakes.");
  },
};
// to access properties/methos we use . fallowing the object name.
console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();
