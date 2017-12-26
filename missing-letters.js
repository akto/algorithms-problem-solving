function fearNotLetter(str) {
  var firstLetter = str.charCodeAt(0),
      newStr = '';
  for(var i = 0; i < str.length; i++){
    if( !str.includes(String.fromCharCode(firstLetter+i))){
      newStr = String.fromCharCode(firstLetter+i);
      break;
    }else{ newStr = undefined; }
    
  }
  return newStr;
}
