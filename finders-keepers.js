/*
Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument).
*/
function findElement(arr, func) {
  var num = arr.filter(function( i ){
      return func( i ) ? true : false;
  });
  // avoid empty arrays
  if( num == [] ){ num = undefined; }
  return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }); // should return [2,4]
