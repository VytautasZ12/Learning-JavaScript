// Can select elements by title.

let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

// Can select elements by name.

let fruits = document.getElementsByName("fruits");

fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});

// Can select elements by TagName.

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightblue";
vegetables[1].style.backgroundColor = "orange";
vegetables[2].style.backgroundColor = "yellow";

// Can select elements by ClassName.

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "red";
desserts[1].style.backgroundColor = "blue";
desserts[2].style.backgroundColor = "lightgreen";

// Selecting element by querySelector.
// It selects first element of any group.
// by ID:
let element1 = document.querySelector("#myTitle");
element1.style.backgroundColor = "purple";
// by CLASS NAME:
let desserts2 = document.querySelector(".desserts");
desserts2.style.backgroundColor = "orange";
//by LIST ITEM:
let vegetables1 = document.querySelector("li");
vegetables1.style.backgroundColor = "green";
