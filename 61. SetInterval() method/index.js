// setInterval() = invokes a function repeatedly after a number of miliseconds
//                 asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("Count up to what number?");
ma = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
