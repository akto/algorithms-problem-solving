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

const factorial = n => n == 1 ? n : n*fact(n-1);
