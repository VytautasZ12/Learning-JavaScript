// Map = object that holds key-value pairs of any data type.

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);
// get method.

// let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear");
// console.log(shoppingCart);

// set method will add item to the list.
// store.set("hat", 40);

// delete method will delete item from the list.
// store.delete("socks", 10);

// cheks if there is key in our map, shows boolean value.
// console.log(store.has("underwear"));

// size property shows amount of pair in map
console.log(store.size);

store.forEach((value, key) => console.log(`${key} ${value}$`));
