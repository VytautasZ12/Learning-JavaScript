// super = Refers to the parent class.
//         Commonly used to invoke constructor of parent class.

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
// in each of constructor of children classes we reapet some code,
// w can leave only unique code for each class.
// so better to create constructor in parent class and call that constructor using super()
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    // this.name = name;
    // this.age = age;
    super(name, age)
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    // this.name = name;
    // this.age = age;
    super(name, age)
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    // this.name = name;
    // this.age = age;
    super(name, age)
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 8, 40, "km/h");
const fish = new Fish("fish", 2, 50);
const hawk = new Hawk("hawk", 3, 200);

console.log("Name:",rabbit.name,"Age:",rabbit.age,"Run speed:",rabbit.runSpeed);
console.log("Name:",fish.name,"Age:",fish.age,"Swim speed:",fish.swimSpeed);
console.log("Name:",hawk.name,"Age:",hawk.age,"Run speed:",hawk.flySpeed);
