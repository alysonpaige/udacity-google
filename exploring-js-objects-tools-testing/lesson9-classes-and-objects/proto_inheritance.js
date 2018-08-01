// (A)
function Dalmatian (name) {
  this.name = name;

  this.bark = function() {
    console.log(`${this.name} barks!`);
  };
}

// (B)
function Dalmatian (name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};