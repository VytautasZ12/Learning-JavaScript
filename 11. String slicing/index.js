/*slice() extracts a sction of a string
and returns it as a new string without modifying original string.
*/

let fullName = "Learning JavaScript";
let firstName;
let lastName;

// firstName = fullName.slice(0, 9);
// lastName = fullName.slice(9);

firstName = fullName.slice(0, fullName.indexOf(" ")); // starting from index 0 and stoping at "space" index.
lastName = fullName.slice(fullName.indexOf(" ") + 1); // + 1 added to remove space showing in console.

console.log(firstName);
