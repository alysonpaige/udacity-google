/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// sum of numbers divided by their length

function average(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  var average = total / nums.length;
  if (nums.length === 0) {
    average = 0;
  }
  return average;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
