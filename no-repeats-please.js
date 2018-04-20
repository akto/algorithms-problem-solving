console.clear();
function permAlone(str) {
  var splittedStr = str.split('');
  var temp,res = [];
  splittedStr.map(function( el ){
    if( temp.length === 0 ){ temp.push( new Array(el) ); }
    else{
      var i = 0;
      while( i == temp.length ){
        temp.push( new Array(el) );
        i++;
      }
      console.log( temp );
    }
  });
  console.log( temp );
}

function isNextSame( str ){
  let splitted = str.split(''),
      result = false;
  splitted.map(function(e,i){ if( e == splitted[i+1] ){ result = true; } });
  return result;
}

function factorial(num) {
  if( num !== 0){
    var n = num-1;
    if( n !== 0){
      num *= factorial(n);
    }
  }else{ num = 1; }
  return num;
}


function test( func,expected ){
  let output = func,
      result = false;
  if( expected == 'number' ){ result = typeof output == 'number' ? true : false; }
  else if( expected == 'string' ){ result = typeof output == 'string' ? true : false; }
  else if( expected == 'array' ){ result = Array.isArray( output );}
  else if( expected == 'object' ){ result = typeof output == 'object' ? true : false; }
  else{ result = (output == expected) ;}
  console.log('\n ---Start---');
  console.time('---End---: ');
  func;
  console.log( 'Output is: '+output + ' and Expected: ' + expected + ' so Result is: '+ result);
  console.timeEnd('---End---: ');
  
}


test( factorial(6),720 );

test( permAlone('aab'), 2 );

test( permAlone("aab") , 'number'); //should return a number.

test( permAlone("aab"),2 ); //should return 2.

test( permAlone("aaa"),0 ); //should return 0.

test( permAlone("aabb"),8 ); //hould return 8.

test( permAlone("abcdefa"),3600 ); //hould return 3600.

test( permAlone("abfdefa"),2640 ); //hould return 2640.

test( permAlone("zzzzzzzz"),0 ); //hould return 0.

test( permAlone("a"),1 ); //hould return 1.

test( permAlone("aaab"),0 ); //hould return 0.

test( permAlone("aaabb"),12 ); //hould return 12.
