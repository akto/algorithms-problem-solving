function translatePigLatin(str) {
  var firstLetters = str.split(/[aeiou]/,1);
  //console.log(firstLetters);
  if( firstLetters != '' ){
    //console.log(firstLetters.toString());
    //console.log(firstLetters.toString().length);
    str = str.substr(firstLetters.toString().length).concat(firstLetters.toString()+'ay');
  }else{
    str = str+'way';
  }
  
  return str;
}

//translatePigLatin("consonant");