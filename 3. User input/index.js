// How to accept user input

// Easy way with a window promt

// let username = window.prompt("Whats your name?");

// console.log(username);

// Difficult way HTML textbox

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
};
