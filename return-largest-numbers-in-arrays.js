function largestOfFour(arr) {
  // You can do this!
  var finalArray = [];
  for(var j=0; j < arr.length; j++){
    var big = arr[j][0];
    for( var i=1; i<arr[j].length;i++){
      big = arr[j][i] > big ? arr[j][i] : big; 
    }
    finalArray.push(big);
  }
  console.log(finalArray);
  return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
