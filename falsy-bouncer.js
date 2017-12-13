function bouncer( arr ) {
  // Don't show a false ID to this bouncer.
  return arr.filter( function( item ){ 
    return Boolean( item ) ? true : false;
  });
  
}

bouncer([7, "ate", "", false, 9]);
