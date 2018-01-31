function telephoneCheck(str) {
  // Very Brute Force
  /* regNegationPar = regex for finding if there is a match starts with ( but after 3 digit not closed with ) */
  var regNegationPar = /\((?!\d{3}\))/g,      
      regNegationParMatch = str.match( regNegationPar ),
      regNegationParMatchState = regNegationParMatch == null ? true : false,
      /* regMaster is to find if regular 11 or 10 character numbers and in suiable form mostly, its not pass every test */
      regMaster = /[1]?\s?(\(\d{3}\)|\d{3})\-?\s?\d{3}\-?\s?\d{4}/g,
      regMasterMatch = str.match( regMaster ),
      regMasterMatchState = regMasterMatch == null ? false : true,
      /* regNum is to count all digits and test whether it starts with only 1 if its 11 digits and it is only 10 digits */
      regNum = /-?\d/g,
      regNumMatch = str.match( regNum ),
      regNumMatchState = regNumMatch.length == 11 ? ( regNumMatch[0] == 1 ? true : false) : (regNumMatch.length == 10 ? true : false);
      
      if( regNumMatchState && regMasterMatchState && regNegationParMatchState){ 
        //console.log( '(\''+str+'\') - '+regMasterMatch + ' ; '+ regNegationParMatch );
        return true;
      }

  return false;
}

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
