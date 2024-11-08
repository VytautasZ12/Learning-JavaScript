// how to pass object to a function as an argument example.

class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Ferrari", 2024, "yellow");
const car3 = new Car("Bmw", 2022, "blue");

changeColor(car1, "green");
changeColor(car2, "blue");
changeColor(car3, "bright blue");

displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

function displayInfo(car) {
  console.log(car.model, car.year, car.color);
}

function changeColor(car, color) {
  car.color = color;
}
