/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re = /[\s\_]/g;
  var reg = /[A-Z]/g;
  var son = /\--/g;
  var son1 = /^\-/g;
  return str.replace( reg, alphabet ).replace(re,replacer).replace( son, '-').replace( son1,'').toLowerCase();
}
function replacer( match,p1 ){
    if( match == ' '){ return '-'; }
    else{
        return '';
    }
    console.log('Matched Character: '+ match);
}

function alphabet( match ){
    if( match ){ return '-'+match; }
    else{
        return '-'+match;
    }
    console.log('Matched Character: '+ match);
}
spinalCase('This Is Spinal Tap');
