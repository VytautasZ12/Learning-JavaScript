// static = belongs to the class, not the object
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility functions

class Car {
  // static method at this point will show how many cars we have.
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  // by adding static we add same method to all.
  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();
