function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr;
  if(num >= str.length){
    newStr = str;
  }else if(num >= 3){
    newStr = str.slice(0,num-3);  
    newStr += '...';
  }else{
    newStr = str.slice(0,num);
    newStr += '...';
  }
  
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
