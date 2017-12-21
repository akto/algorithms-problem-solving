function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.map(function( obj ){
    if((
      Object.keys( source ).every(function( key ){
        return (obj.hasOwnProperty( key ) && obj[key]  == source[key] ) ? true : false;
      }))){ arr.push(obj); }
    
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
