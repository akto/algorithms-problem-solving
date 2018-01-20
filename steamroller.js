var newArray = [];

function steamrollArray(arr) {
// Mostly newArray has latest array from recursion
// so I need to reset it
  if( newArray.length > 0 ){ newArray = []; }
  recursive( arr );
// newArray shouldn't return anything in recursive func
  console.log(newArray);
  return newArray;
}
function recursive( arr ){
  arr.map( function( i,e ){
      if( Array.isArray( i ) ){ recursive(i); }
      else{ newArray.push(i); }
  });
}
console.clear();
console.time();
steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4]
console.timeEnd();