/*

Use arrow function syntax to compute the square of only 
the positive integers (decimal numbers are not integers) 
in the array realNumberArray and store the new array 
in the variable squaredIntegers.

*/
console.clear();
var realNumbers = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2, 44.5,-4.5,333,444];
var acc = [];
var squaredIntegers = realNumbers.filter( (num) => (num > 0) && num == parseInt(num) ? true : false ).map( n => n*n );

console.log(squaredIntegers);
