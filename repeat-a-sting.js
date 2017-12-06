function repeatStringNumTimes(str, num) {
  // repeat after me
  var repatingStr = num < 0 ? '': str;
  for(var i = 1; i < num; i++){
    repatingStr += str;
  }
  return repatingStr;
}

repeatStringNumTimes("abc", 3);
