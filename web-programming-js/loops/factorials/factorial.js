/*
 * Programming Quiz: Factorials (4-7)
 */

// Write a for loop that prints out the factorial of the number 12
var solution = 12;
for (var x = solution - 1; x >= 1; x--) {
  solution *= x;
}
console.log(solution);
