// anonymous
const myFunction = function () {
  return 'Hello!';
};

// named
const myFunction = function returnHello() {
  return 'Hello!';
};

// IIFE
(function sayHi(){
  alert('Hi there!');
}
)();

// alt syntax
(function sayHi(){
  alert('Hi there!');
}());
