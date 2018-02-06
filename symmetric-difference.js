function sym(args) {
  var argss = Array.prototype.slice.call( arguments );
  var flatten = argss.reduce(function( acc,cur ){
      //console.log( 'Acc: ' + acc );
      if( acc == '' ){
        acc = cur;
        uniteUnique( acc );
        return acc;
      }else{
        uniteUnique( cur );
        var newCur = cur.map( function(i){ 
          var b = acc.indexOf( i );
          if( b == -1 ){
            acc.push( i ); 
            console.log('After add: '+acc);
          }else{
            console.log('Need to extract: '+i);
            acc.splice( b,1 );
            console.log('after Extraction: '+acc);
          }
          //console.log( 'Sorted Result: '+acc.sort() );
          
        });
        console.log( typeof acc );
        return acc.sort();    
      }
  },[]);
  console.log('Result: ' + flatten );
  return flatten;
}
function uniteUnique( arr ){
  /* https://github.com/akto/algorithms-problem-solving/blob/master/unite-unique.js */
  return arr.map(function(e,i){          
    while( arr.includes( e, i+1 ) ){          
      var nextPosition = arr.indexOf( e, i+1);
      arr.splice(nextPosition,1);      
    }
  });
}

console.clear();
console.time();

sym([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].
console.log('---------------------');
sym([1, 2, 3], [5, 2, 1, 4]); //should contain only three elements.
console.log('---------------------');
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should return [1, 4, 5]
console.log('---------------------');
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should contain only three elements.
console.log('---------------------');
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should return [1, 4, 5].
console.log('---------------------');
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should contain only three elements.
console.log('---------------------');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7].
console.log('---------------------');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should contain only five elements.
console.log('---------------------');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9].
console.log('---------------------');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should contain only eight elements.
console.log('---------------------');
console.timeEnd();
