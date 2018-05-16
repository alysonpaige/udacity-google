/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

// conditional ? (if condition is true) : (if condition is false)
var category = (eatsPlants && eatsAnimals ? "omnivore" : eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined);

console.log(category);

////////////////////////////////
// example as if/else statement
if (eatsPlants) {
    if (eatsAnimals) {
        category = "omnivore";
    } else {
        category = "herbivore";
    }
} else {
    if (eatsAnimals) {
        category = "carnivore";
    } else {
        category = undefined;
    }
}
