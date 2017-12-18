function rot13(str) { // LBH QVQ VG!
  str = str.toUpperCase();
  var i = 0;
  var newStr ='';
  while( i < str.length){
    //console.log(str.charCodeAt(i));
    newStr += String.fromCharCode( changer( str.charCodeAt( i ) ) );
    i++;
  }
  console.log(newStr);
  return newStr;
}
function changer(ch){
  var nch;
  if( ch >= 65 && ch <= 90 ){
    if(ch >= 78){ nch = 64 + ( 13 - ( 90-ch ) ); }
    else{ nch = ch+13; }
    //console.log(ch+' için --> '+nch);
  }else{ nch = ch; }
  
  return nch;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
