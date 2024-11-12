// The Date object is used to work with dates and times.

let date = new Date();
// let date = new Date(0);
// let date = new Date(2023, 10, 12, 5);
// let date = new Date("November 12, 2024, 00:00:00");

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// also can be used set method

// date.setFullYear(2024);
// date.setMonth(8);
// date.setDate(30);

// date = date.toLocaleString();

// date formating function
document.getElementById("myLabel").innerHTML =
  formatDate(date) + formatTime(date);

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}/${month}/${day}`;
}

// time formating function
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return ` -${hours}:${minutes}:${seconds} ${amOrPm}.`;
}
