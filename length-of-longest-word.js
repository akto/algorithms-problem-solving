function findLongestWord(str) {
  var newStrArr = str.split(" ");
  var theBiggest = 0;
  console.log(newStrArr);
  for(var i=0; i < newStrArr.length; i++){
    console.log(newStrArr[i].length);
    theBiggest = (newStrArr[i].length > theBiggest) ? newStrArr[i].length : theBiggest;
  }
  return theBiggest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
