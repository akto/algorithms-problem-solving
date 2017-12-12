function mutation(arr) {
  var count = 0;
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
 for(var i = 0; i < second.length; i++){
   if( first.indexOf( second[i] ) !== -1 ){ count++; }
 }
 if( count === second.length ){ return true; }
 else{ return false; }
}

mutation(["hello", "hey"]);
