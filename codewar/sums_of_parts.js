/*
  Comments:
    the solution with Array.pop() and Array.unshift() takes more than 12000 ms
    but the solution without built in classes in js takes only 2035 ms "Completed in 2035ms"
    I need to check all the solutions with and without native classes.
    Performance could be lay in the plain old js.
*/
function partsSums(ls) {
  let finalNumber = 0,newArray = [0],
      lengthArr = ls.length;
  for(let i = lengthArr-1; i >= 0;i--){
    finalNumber += ls[i];
    ls[i] = finalNumber;
  }
  ls.push(0);
  /*while( ls.length  > 0 ){
      finalNumber += ls.pop();
      newArray.unshift(finalNumber);
  }*/
  return ls;
}
