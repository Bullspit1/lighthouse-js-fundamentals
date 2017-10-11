var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
// Write a while loop that prints out the contents of ingredients:
while(repeat < 8){
  console.log(ingredients[repeat]);
  repeat++
}


// Write a for loop that prints out the contents of ingredients:
for (var r = 0; r < 8; r++){
console.log(ingredients[r]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var backwards = ingredients.length -1;
while(backwards >= 0){
  // console.log(backwards);
  console.log(ingredients[backwards]);
  backwards--
}
// console.log(backwards);

for (var i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i]);
}
// console.log(ingredients.length);