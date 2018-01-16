/*
I get this solution from https://stackoverflow.com/a/38360866/2839009
It's very briliant solution. I firstly tried to count all divisions by an object. But this fits better.
*/

console.clear();
function smallestCommons(arr) {
  var arr1 = range( arr ),
      min = Math.min(...arr),
      scm = min;
  arr1.map(function( i ){
      scm = smallestMultiple( scm, i );
  });
  //console.log(scm);
  return scm;
}

function smallestMultiple( y, l ){
  return ( y*l )/divider( y, l );
}

function divider( y,l ){
    return !l ? y : divider( l, y%l );
}

function range( arr ){
    var nArr = [],
        smallest = arr[0] < arr[1] ? arr[0] : arr[1],
        diff = Math.abs( arr[1] - arr[0] ),
        i = 0;
    while( i <= diff ){
        nArr.push( smallest+i );
        i++;
    }
    return nArr;
}

console.time();
smallestCommons([1, 5]); //should return a number.
smallestCommons([1, 5]); //should return 60.
smallestCommons([5, 1]); //should return 60.
smallestCommons([1, 13]); //should return 360360.
smallestCommons([23, 18]); //should return 6056820.
console.timeEnd();
