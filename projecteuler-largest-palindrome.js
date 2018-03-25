/*
largestPalindrome( firstNumber, SecondNumber, initialValueFor1stNumber, initialValueFor2ndNumber)
to check the largest palindrome number between firstNumber and secondNumber 
need to specify initial values for both numbers
if these initial values is close to number then it takes less execution time

#you can give initial values by yourself. NO NEED of initial values.

*/
function largestPalindrome( b,c,k,l ){
    var i,j,
        largest = 0;
    for( i = k; i <= b; i++ ){
        for( j = l; j <= c; j++){
            var bc = i*j,
                bstring = bc.toString();
            if( isPalindrome( bstring ) ){ 
              largest = largest > bc ? largest : bc;              
            }
        }
    }
    return largest;
}

function isPalindrome(str){
  return str === str.split('').reverse().join('');
}

console.clear();
console.time();
console.log( largestPalindrome( 999, 999, 900, 900 ) );
console.timeEnd();