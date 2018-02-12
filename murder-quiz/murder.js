/*
 * Programming Quiz: Murder Mystery (3-4)
 */

var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === 'ballroom' && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
} else if (/* your conditional goes here */) {

} else if (/* your conditional goes here */) {

} else {

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
