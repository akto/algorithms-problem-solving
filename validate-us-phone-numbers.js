function telephoneCheck(str) {
  var regTest = /\d{3}\-?\s?\d{3}\-?\s?\d{4}/g,      
      regTestMatch = str.match( regTest ),
      regTestMaster = /(\((?=\d{3}\))|\d{3})\-?\s?\d{3}\-?\s?\d{4}/g,
      regTestMasterMatch = str.match( regTestMaster ),
      regTestCase = /\((?=\d{3}\))/g,
      regTestCaseMatch = str.match( regTestCase );
      regNum = /-?\d/g,
      regNumMatch = str.match( regNum ),
      regNumMatchState = regNumMatch.length == 11 ? ( regNumMatch[0] == 1 ? true : false) : (regNumMatch.length == 10 ? true : false);
      // first the number of the digits must pass
      // If there is 11 digits starting with 1 or 10 digits
      if( regNumMatchState ){ 
        console.log( '(\''+str+'\') - '+regTestMasterMatch + ' ; '+regTestCaseMatch );
      }
      

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
