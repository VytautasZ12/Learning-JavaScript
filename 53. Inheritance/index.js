// inheritance = a child class can inherit all the
//               methods and properties from another class.

class Animal {
  // all code is for other classes that they have in common.
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
// instead of reapeting same code in all classes we can create one class that will take
// all properties and methods that they have in common and we can put in parent class.
class Rabbit extends Animal {
  // alive = true;
  name = "rabbit";

  // eat() {
  //   console.log("This", this.name, "is eating");
  // }
  // sleep() {
  //   console.log(`This ${this.name} is sleeping`);
  // }
  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  // alive = true;
  name = "fish";

  // eat() {
  //   console.log(`This ${this.name} is eating`);
  // }
  // sleep() {
  //   console.log(`This ${this.name} is sleeping`);
  // }
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  // alive = true;
  name = "hawk";

  // eat() {
  //   console.log(`This ${this.name} is eating`);
  // }
  // sleep() {
  //   console.log(`This ${this.name} is sleeping`);
  // }
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
