// constructor = a special method of a class,
//               accepts arguments and assigns properties.

class Student {
  // to create object in this example is Student we can assign some properties(name, age, gpa).
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(this.name, "is studying");
  }
}
const student1 = new Student("JavaScript", 30, 3.2);
const student2 = new Student("JavaScript2", 35, 1.2);

console.log("Name:", student1.name, "Age:", student1.age, "Gpa:", student1.gpa);
student1.study();

console.log("Name:", student2.name, "Age:", student2.age, "Gpa:", student2.gpa);
student2.study();
