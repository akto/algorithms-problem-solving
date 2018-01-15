console.clear();
function smallestCommons(arr) {
  var arr1 = arrayer( arr );
  var numbersNkeys = [];
  arr1.map(function(i){
    if( isPrime(i) ){ numbersNkeys.push( [i,1] ); numberNkey[i] = 1; }
    var l = numbersNkeys[numbersNkeys.length-1][0],
        j = 1;
    while( j <= l ){
        if( i%j == 0 ){ }
        j++;
    }
  });
  console.log(  );
  return arr;
}

var numberNkey = {
  1 : 1
}

function maxArray( arr ){
    return arr.reduce(function( a,b ){
        return Math.max(a,b);
    });
}

function isPrime( n ){
  if( !( n%2 == 0 ? true : false ) ){ 
    let nn = 3; // 3 because I want to elaminate 1 and self division
    while( nn < n ){
      if( n % nn == 0 ){ return false;}
      nn += 2;
    }
    return true;
  }else{
    return false;
  }
}


function arrayer( arr ){
    var newArr = [],
        small = smallest(arr),
        diff = Math.abs( arr[1] - arr[0]),
        i = 0;
    while( i <= diff ){
        newArr.push( small+i );
        i++;
    }
    //console.log( newArr );
    return newArr;
}

function smallest( arr ){
    return arr[0] < arr[1] ? arr[0] : arr[1];
}

console.time();
smallestCommons([1, 5]); //should return a number.
smallestCommons([1, 5]); //should return 60.
smallestCommons([5, 1]); //should return 60.
smallestCommons([1, 13]); //should return 360360.
smallestCommons([23, 18]); //should return 6056820.
console.timeEnd();
