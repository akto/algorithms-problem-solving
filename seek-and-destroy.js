function destroyer(arr) {
  // Remove all the values
  var firstArg = [...arguments].shift();
  var otherArg = [...arguments].slice(1);
  return firstArg.filter(function( e ){
    return !otherArg.find( function( el ){ return el === e ; });
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
