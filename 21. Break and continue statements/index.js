// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// this example will break loop at number 13.

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    break;
  }
  console.log(i);
}

// this example will skip 13 and will continue loop.

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    continue;
  }
  console.log(i);
}
