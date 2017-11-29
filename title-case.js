
function titleCase(str) {
  var nAr = str.toLowerCase().split(' ');
  var nStr = '';
  for( var i=0; i < nAr.length; i++){
    nAr[i] = nAr[i][0].toUpperCase() + nAr[i].slice(1);
  }
  nStr = nAr.toString().replace(/,/g,' ');
  return nStr;
}

titleCase("I'm a little tea pot");
