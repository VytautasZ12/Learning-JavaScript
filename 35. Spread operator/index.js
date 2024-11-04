// spread operator = allows an iterable such as an
//     ...           array or strin to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(...numbers);
// console.log(maximum);

let class1 = ["Antanas", "Patrick", "Sandy"];
let class2 = ["Vardenis", "Pavardenis", "Nupustas"];

class1.push(...class2);
console.log(...class1);
