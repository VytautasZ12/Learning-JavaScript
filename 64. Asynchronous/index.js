// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Access a database
//                     Fetch file
//                     Tasks that take time
//                     (start now, finish sometime later)

// synchronous code example. Will do everything step by step without skiping anything.s
console.log("Start now");
console.log("This is synchronous code");
console.log("End");

// asynchronous code example.

console.log("Start now");
setTimeout(() => console.log("This is asynchronous"), 5000); // in this exxample step 2 will work in background and
// will be finished sometime later.
console.log("End");
