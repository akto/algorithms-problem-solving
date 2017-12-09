function chunkArrayInGroups(arr, size) {
  // Break it up.
  /* to use only slice() and push() 
  var i = 0,
      first = 0,
      end = size,
      result = [],
      len = Math.ceil(arr.length / size);
  while( i < len ){
    result.push( arr.slice(first,end) );
    first = end;
    end += size;
    i++;
  }*/
  var result = [];
  while( arr.length > 0 ){ result.push( arr.splice( 0,size ) ); }
  return result;
}
