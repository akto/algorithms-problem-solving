function sumAll(arr) {
  var mx = Math.max.apply(null,arr),
      mn = Math.min.apply(null,arr),
      na = [];
  
  for(var i = mn; i <= mx; i++){
    na.push(i);
  }
  return na.reduce(function(sum,val){
    return sum+val;
  });
}

sumAll([1, 4]);
