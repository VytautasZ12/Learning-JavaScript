let prices = [5, 10, 15, 20, 25];

// standart for loop
// for (let i = 0; i < prices.length; i += 1) {
//   console.log(prices[i]);
// }

// standart for loop just backwords.
// for (let i = prices.length - 1; i >= 0; i -= 1) {
//   console.log(prices[i]);
// }
// also can iterate true array.
for (let price of prices) {
  console.log(price);
}
