/*
largestPalindrome( firstNumber, SecondNumber, initialValueFor1stNumber, initialValueFor2ndNumber)
to check the largest palindrome number between firstNumber and secondNumber 
need to specify initial values for both numbers
if these initial values is close to number then it takes less execution time

#TO DO: make i and j automatically adjust the number (I am using now 100 as an indicator to adjust the execution time)

*/
function largestPalindrome( b,c ){
    var i,
        j,
        largest = 0;
    for( i = b - 100 ; i <= b; i++ ){
        for( j = c - 100 ; j <= c; j++){
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
console.log( largestPalindrome( 999, 999 ) );
console.timeEnd();