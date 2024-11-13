// console.time() = Starts a timer you can use to
//                  track how long an operation takes
//                  Give each timer a unique name.

// start
console.time("Response time");

alert("CLICK THE BUTTON!"); // timer will track only how long synchronous operations takes.

// setTimeout(() => console.log("Hello!"), 5000); // here time will be given but response will show later.

// end
console.timeEnd("Response time");
