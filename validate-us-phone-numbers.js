function telephoneCheck(str) {
  var regDash = /\-/g,
      regTest = /^1?\s?\(\d{1,3}\)\s?\d{1,3}\-?\d{1,4}/g,
      regTestCase1 = /\d{1,3}\-|\s\d{1,3}\-|\s\d{1,4}/g,
      regTestMaster = /\1?\s?{\d{3}\-|\(\d{3}\)}?\-?\s?\d{3}\-?\s?\d{4}/g,
      regNum = /-?\d/g,
      regDashMatch = str.match( regDash ),
      regTestMatch = str.match( regTest ),
      regTestCase1Match = str.match( regTestCase1 ),
      regTestMasterMatch = str.match( regTestMaster ),
      regNumMatch = str.match( regNum ),
      regNumMatchState = regNumMatch.length == 11 ? ( regNumMatch[0] == 1 ? true : false) : (regNumMatch.length == 10 ? true : false);  
      
      console.log( '(\''+str+'\') - '+regTestMasterMatch);

      //console.log( '('+str+') - '+regNumMatchState + ' :: ' + regTestMatch +' ::: '+regTestCase1Match );
      /*
      if( regNumMatchState ){
        ( regTestMatch != null ? true : false )
        console.log( '('+str+') - '+regNumMatch + ' :: ' + regNumMatchState );
      }else{ 
        console.log( '('+str+') - '+ false ); return false;
      }
      */
      //console.log( '('+str+') - '+ regTestMatch );
      //console.log( '('+str+')'+regDashMatch+' : '+regNumMatch + ' :: ' + regNumMatchState );

  return true;
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