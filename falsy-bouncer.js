// Don't show a false ID to this bouncer.
function bouncer( arr ) {
  return arr.filter( 
    item => Boolean( item ) ? true : false 
    );
}

bouncer([7, "ate", "", false, 9,null,-1, !true]); //-> [7,"ate",9,-1]
/* 
function bouncer( arr ) {
  // Don't show a false ID to this bouncer.
  return arr.filter( function( item ){ 
    return Boolean( item ) ? true : false;
  });
  
}

bouncer([7, "ate", "", false, 9]);
*/