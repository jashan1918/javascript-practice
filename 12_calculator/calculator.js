const add = function(a,b) {

return a + b;
};

const subtract = function(a,b ) {

  return a - b;
};

const sum = function( array ) {

return array.reduce((total, current) => total + current , 0)
};

const multiply = function(array) {

  return array.reduce((total, current) => total * current, 1)
};

const power = function(a, power) {

  return Math.pow(a, power)

};

const factorial = function(a) {

 let product = 1;
 for(i = a; i > 1; i--){
  product = product * i;

 }
 return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
