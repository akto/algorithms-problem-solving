
function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-zA-Z0-9]/g,'');
  str = str.toLowerCase();
  console.log(str);
  return str === str.split('').reverse().join('');
}



palindrome("eye");
