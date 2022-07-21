const range = (start, end, step) => {
  let array = [];
  if (step === 0) {
    console.log("Please use a step value that isn't equal to 0.");
    return;
  } else if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(30, 10, -5));
console.log(range(30, 10, 0));
