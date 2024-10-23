// useful string properties and methods
let userName = "User user";
let phoneNumber = "123/456/7890";
// console.log(userName.length); // shows length of string.
// console.log(userName.charAt(0)); // shows 1 character in string.
// console.log(userName.indexOf("e")); // shows index in string
// userName = userName.trim(); // this method will remove any spaces befor and after any other characters.
// userName = userName.toUpperCase(); // makes all characters upper case.
// userName = userName.toLowerCase(); // change all characters to lower case.
phoneNumber = phoneNumber.replaceAll("/", "-"); // replace characters with other character in this case / replaced to -.

console.log(phoneNumber);
