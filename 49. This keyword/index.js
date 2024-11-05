// this = reference to a particular object
//        the object depends on the imediate context.

const car = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive: function () {
    // console.log("You driving Mustang");
    console.log("You driving", this.model); // replacing key word this with name of object
  },
};

const car2 = {
  model: "Ferrari",
  color: "black",
  year: 2024,

  drive: function () {
    // console.log("You driving Ferrari");
    console.log("You driving", this.model); // replacing key word this with name of object
  },
};
car.drive();
car2.drive();
