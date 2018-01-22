function addTogether(  ) {
    //console.log( arguments[0]+' - '+( typeof arguments[0] == 'number' )+ ' - ' +arguments[1]+' - '+ (typeof arguments[1] == 'number') );
    if( arguments[1] !== undefined ){
        if( (typeof arguments[0] == 'number') && (typeof arguments[1] == 'number') ){ 
            return arguments[0] + arguments[1];
        }else{
            return undefined;
        }
    }else if( typeof arguments[0] != 'number' ){ return undefined; }
    else{
        //console.log( 'argument is 2 in here '+arguments[0] +' ; ' + arguments[1] );
         return function( j ){
            //I dont understand why argument increase in here
            //console.log( 'argument is 3 in here '+arguments[0] +' ; ' + j );
            //console.log( (typeof j == 'number' ? arguments[0]-1+j : undefined) );
            return typeof j == 'number' ? arguments[0]+j : undefined;
        }
    }
   
}

console.clear();
console.time();
addTogether(2, 3); //should return 5.
addTogether(2)(3); //should return 5.
addTogether("http://bit.ly/IqT6zt"); //should return undefined.
addTogether(2, "3"); //should return undefined.
addTogether(2)([3]); //should return undefined.
console.timeEnd();
