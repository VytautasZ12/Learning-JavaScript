// this exaple will show how to sort students grades.

let grades = [100, 50, 60, 90, 80, 70];

grades = grades.sort(descendingSort);

grades = grades.sort(ascendigSort);

grades.forEach(print);

function descendingSort(x, y) {
  return y - x;
}
function ascendigSort(x, y) {
  return x - y;
}
function print(element) {
  console.log(element);
}
