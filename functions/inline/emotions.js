/*
 * Programming Quiz: Inline Functions (5-6)
 */

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  var ha = "ha";
  return ha.repeat(num) + "!";
});

/*
with for loop:
emotions(“happy”, function laugh(x) {
  var ha = "";
  for (var x = 0; x < num; x++) {
    ha += "ha";
  }
  return ha + "!";
});
*/
