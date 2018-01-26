function telephoneCheck(str) {
  var regDash = /\-/g,
      regTest = /^1?\(\d{1,3}\)\-?/g,
      regNum = /-?\d/g,
      regDashMatch = str.match( regDash ),
      regTestMatch = str.match( regTest ),
      regNumMatch = str.match( regNum ),
      regNumMatchState = regNumMatch.length == 11 ? ( regNumMatch[0] == 1 ? true : false) : (regNumMatch.length == 10 ? true : false);  
      console.log( '('+str+') - '+ regTestMatch );
      //console.log( '('+str+')'+regDashMatch+' : '+regNumMatch + ' :: ' + regNumMatchState );

  return true;
}

/*
regTest = /^1?\(\d{1,3}\)\-?/g --> Using \(\d{1,3}\) match (555) but not (6505552368). It means 3 numbers in the paranthesis (x,y,z).
*/
console.clear();
console.time();

telephoneCheck("555-555-5555"); //should return a boolean.
telephoneCheck("1 555-555-5555"); //should return true.
telephoneCheck("1 (555) 555-5555"); //should return true.
telephoneCheck("5555555555"); //should return true.
telephoneCheck("555-555-5555"); //should return true.
telephoneCheck("(555)555-5555"); //should return true.
telephoneCheck("1(555)555-5555"); //should return true.
telephoneCheck("555-5555"); //should return false.
telephoneCheck("5555555"); //should return false.
telephoneCheck("1 555)555-5555"); //should return false.
telephoneCheck("1 555 555 5555"); //should return true.
telephoneCheck("1 456 789 4444"); //should return true.
telephoneCheck("123**&!!asdf#"); //should return false.
telephoneCheck("55555555"); //should return false.
telephoneCheck("(6505552368)"); //should return false
telephoneCheck("2 (757) 622-7382"); //should return false.
telephoneCheck("0 (757) 622-7382"); //should return false.
telephoneCheck("-1 (757) 622-7382"); //should return false
telephoneCheck("2 757 622-7382"); //should return false.
telephoneCheck("10 (757) 622-7382"); //should return false.
telephoneCheck("27576227382"); //should return false.
telephoneCheck("(275)76227382"); //should return false.
telephoneCheck("2(757)6227382"); //should return false.
telephoneCheck("2(757)622-7382"); //should return false.
telephoneCheck("555)-555-5555"); //should return false.
telephoneCheck("(555-555-5555"); //should return false.
telephoneCheck("(555)5(55?)-5555"); //should return false.

console.timeEnd();