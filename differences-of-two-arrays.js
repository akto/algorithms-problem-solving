function diffArray(arr1, arr2) {
  var newArr1 = [],
      newArr2 = [];
  newArr1 = arr1.filter(function(e){ return !arr2.includes(e); });
  newArr2 = arr2.filter(function(e){ return !arr1.includes(e); });
  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
