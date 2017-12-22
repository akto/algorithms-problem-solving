function myReplace(str, before, after) {
  var firstLetterofBefore = before.slice(0,1);
  if( firstLetterofBefore === makeIt( before,'up' ) ){
    after = makeIt( after, 'up' ).concat(after.slice(1));
  }
  if( firstLetterofBefore === makeIt( before,'down' ) ){
     after = makeIt( after, 'down' ).concat(after.slice(1));
  }
  
  return str.replace(before,after);
}
function makeIt( s , direction ){
  return direction === 'up' ? s.slice(0,1).toUpperCase() : s.slice(0,1).toLowerCase();
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
