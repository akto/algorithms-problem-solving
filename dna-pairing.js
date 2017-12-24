function pairElement(str) {
  var afterPairing = [];
  //splitting the string into each character and mapping through them
  str.split('').map(function( e ){
    var pairs = [];
    //need to push first the current character and then its pair
    pairs.push( e );
    pairs.push( pairing(e) );
    //global array
    afterPairing.push( pairs );
  });
  return afterPairing;
}

function pairing( el ){
  return el == 'A' ? 'T' : (el == 'T' ? 'A' : ( el == 'C' ? 'G' : 'C'));
}

pairElement("GCG");