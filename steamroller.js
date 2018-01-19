var newArray = newArray.length > 0 ? [] : newArray;
function steamrollArray(arr) {
  // I'm a steamroller, baby
  recursive( arr );
}

function recursive(arr){
  arr.map( function( i ){
    if( Array.isArray( i ) ){ steamrollArray(i); }
    else{ newArray.push(i); }
  });
  console.log(newArray);
  return newArray;
}

console.clear();
console.time();

steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4]
//newArray = [];
console.timeEnd();
