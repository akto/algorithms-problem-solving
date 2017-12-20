function sumFibs(num) {
 var fibs = fibonacciToNum( num );
 return fibs.reduce(function(acc, v, i){
     return !isEven( v ) ? acc + v : acc ;
   
 });
}

function isEven( n ){ return ( n%2 == 0 ); }
function fibonacciToNum( num ){
  var sum = [1,1],
      n = 2;
  while( n <= num ){
    if( sum[n-1] <= num ){ 
      sum.push(sum[n-1]+sum[n-2]);
    }
    n++;
  }
  sum.pop();
  return sum;
}

console.clear();
//console.log( fibonacciToNum(22) );
//console.log( sumFibs(22) );
console.time();
console.log( sumFibs(1000) ); //should return 1785.
console.timeEnd();
console.time();
console.log( sumFibs(4000000) ); //should return 4613732.
console.timeEnd();
console.time();
console.log( sumFibs(4) ); //should return 5.
console.timeEnd();
console.time();
console.log( sumFibs(75024) ); //should return 60696.
console.timeEnd();
console.time();
console.log( sumFibs(75025) ); //should return 135721
console.timeEnd();
