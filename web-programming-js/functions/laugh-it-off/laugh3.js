/*
 * Programming Quiz: Laugh (5-4)
 */

 /*
 Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */

var laugh = function(num) {
  var ha = "";
  for (var x = 0; x < num; x++) {
    ha += "ha";
  }
  return ha + "!";
}

console.log(laugh(10));
