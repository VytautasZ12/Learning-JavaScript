// array of objects example.
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`You drive the ${this.model}`);
  }
}

const car1 = new Car("Mustang", 2023, "black");
const car2 = new Car("Ferrari", 2024, "red");
const car3 = new Car("Bmw", 2023, "blue");

const cars = [car1, car2, car3];

// console.log(cars[0].model);
// console.log(cars[0].year);
// console.log(cars[0].color);
// to use method in array
// cars[0].drive();

startRace(cars);

function startRace(cars) {
  for (const car of cars) {
    car.drive();
  }
}
