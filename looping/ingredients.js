const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let numIngredients = ingredients.length;
let i = 0;

while (i < numIngredients) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < numIngredients; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i = numIngredients - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
