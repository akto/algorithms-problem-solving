function convertHTML(str) {
  var re = /[&<>"']/g;
  return str.replace(re,replacer);
}

function replacer( match, r1, r2, r3, r4, r5, offset, string ){
    //console.log('Matched substring: '+match+' - '+ characters[match]);
    return characters[match];
}

var characters = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "\"" : "&quot;",
    "\'" : "&apos;"
}

console.clear();
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Shindler's List");
convertHTML("<>");
convertHTML("abc");
