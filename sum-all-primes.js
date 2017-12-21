/* 
Note to self: I used let for variable declarations because I want to use them
in local scope. This can cause syntax error in older browser.
Change let to var in older browsers.
*/

function sumPrimes(num) {
  let a = 0,
      sum = 1; // because I start the control of primes from 3
  while( a <= num ){
      if( isPrime( a ) ){ sum += a; }      
      a++;
  }
  return sum;
}

function isPrime( n ){
  if( !isEven( n ) ){ 
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

function isEven( n ){ return ( n%2 == 0 ); }

console.clear();
console.time();
//console.log( isPrime(12) ); works
console.log( sumPrimes(10) );
//console.log( sumPrimes(50) );
console.log( sumPrimes(977) );
//console.log( isEven( 13 ) ); works
console.timeEnd();
