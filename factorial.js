function factorialize(num) {
  if( num !== 0){
    var n = num-1;
    if( n !== 0){
      num *= factorialize(n);
    }
  }else{ num = 1; }
  return num;
}

factorialize(5);
