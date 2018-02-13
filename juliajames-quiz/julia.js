/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    if (x % 5 === 0 && x % 3 === 0) {
        // print Julia, James, or JuliaJames
        console.log("JuliaJames");
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James");
    } else {
        console.log(x);
    }
    x++;
}

// solution with ternary operators
var x = 1;
while (x <= 20) {
    console.log(
        (x % 3 === 0) ? (x % 5 === 0 ? "JuliaJames" : "Julia") : (x % 5 === 0 ? "James" : x)
    );
    x++;
}
