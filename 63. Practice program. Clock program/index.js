const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    // invoking time formating function.
    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }
  // this function will add 0 before single number.
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
