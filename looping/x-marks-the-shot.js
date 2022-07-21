const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = (moves) => {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    switch (move) {
      case "north":
        y += 1;
        break;
      case "south":
        y -= 1;
        break;
      case "east":
        x += 1;
        break;
      case "west":
        x -= 1;
        break;
    }
  }
  return [x, y];
};

console.log(finalPosition(moves));
