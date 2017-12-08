function uniteUnique(arr) {
  var args = Array.apply(null, arguments);
  //console.log(args);
  var flatten = args.reduce(function(a,b){
    return a.concat(b);
  },[]);
  var flatter = flatten.map(function(e,i){
    //console.log( e+' in ('+i+'). '+' - '+flatten );
    while( flatten.includes( e, i+1 ) ){
      //console.log( e + ' has duplicates' );
      var nextPosition = flatten.indexOf( e, i+1);
      flatten.splice(nextPosition,1);
      //console.log( 'Next position of '+e+' :'+flatten.indexOf( e, i+1) );
      //console.log('Flatten after deletion: '+flatten);
    }
  });
  //console.log('After: '+ flatten);
  return flatten;
}
console.clear();
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
