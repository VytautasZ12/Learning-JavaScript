// promises = object that encapsulates the result of an asynchtonous operation
//            let asynchronous methods return values like synchronous methods
//            "I promise to return something in the future"

//            the STATE is "pending" then: "fulfilled" or "rejected"
//            the RESULT is what can be returned
//            2 parts producing and consuming

// One example.

// const promise = new Promise((resolve, reject) => {
//   let fileLoaded = false;
//   if (fileLoaded) {
//     resolve("File is loaded");
//   } else {
//     reject("File not loaded");
//   }
// });

// promise.then((value) => console.log(value)).catch((error) => console.log(error));

// Second example

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(3000).then(() => console.log("Thanks for waiting!"));
