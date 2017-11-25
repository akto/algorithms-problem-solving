var Level = function(i,j,k){
    this.first = i;
    this.second = j;
    this.third = k;
};
var converting = function(num){
  this.num = num;
  this.final = '';
  this.level = this.num.toString().length-1;
  this.levels = [new Level("I","V","X"), 
                 new Level("X","L","C"), 
                 new Level("C","D","M"), 
                 new Level("M","V_","X_") ];
  this.levelWriting = function(order,l){
    var text = "";
    switch(order){
      case 1:
        text = this.levels[l].first;
        break;
      case 2:
        text = this.levels[l].first+this.levels[l].first;
        break;
      case 3:
        text = this.levels[l].first+this.levels[l].first+this.levels[l].first;
        break;
      case 4:
        text = this.levels[l].first+this.levels[l].second;
        break;
      case 5:
        text = this.levels[l].second;
        break;
      case 6:
        text = this.levels[l].second+this.levels[l].first;
        break;
      case 7:
        text = this.levels[l].second+this.levels[l].first+this.levels[l].first;
        break;
      case 8:
        text = this.levels[l].second+this.levels[l].first+this.levels[l].first+this.levels[l].first;
        break;
      case 9:
        text = this.levels[l].first+this.levels[l].third;
        break;
    } 
    return text;
  };
  this.calculation = function(){
    var final = '';
    var num_level = this.num.toString().length-1;
    if( num_level >= 1 && num_level < 3 ){ this.level = num_level; }
    else if(num_level == 0){ this.level = 0; }
    while( this.num > 0 ){
      //console.log('Level: '+this.level);
      var powerOfNum = Math.pow(10,num_level);
      var numsofar = Math.floor( this.num/powerOfNum );
      this.num -= numsofar*powerOfNum;
      this.final += this.levelWriting(numsofar,this.level);
      /*
      console.log('Number of '+powerOfNum+Math.pow(10,this.level)+"'s : "+ numsofar+' and now number is :'+this.num);
      console.log(this.level+'.Result: '+this.final);
      console.log('\n');
      */
      this.level -= 1;
      num_level -= 1;
      
    }
    return this.final;
  };
};

//var con = new converting(2499);
//console.log(con.num+' ::::: '+con.level);
//console.log(con.levelWriting(9,1));
//con.calculation();
//convertToRoman(36);

function convertToRoman(num) {
  var con = new converting(num);
  return con.calculation();
}
  /*Brute Force Test
  var romanNumerals = [ 'I','V','X','L','C','D','M' ];
  var _1000 = 0,
      _500 = 0,
      _100 = 0,
      _50 = 0,
      _10 = 0,
      _5 = 0,
      _1 = 0;
  if( num >= 1000 ){ _1000 = Math.floor(num / 1000); num -= (1000*_1000); }
  if( num >= 500 ){  _500 = Math.floor(num / 500); num -= (500*_500); }
  if( num >= 100 ){  _100 = Math.floor(num / 100); num -= (100*_100);
                   if( _100 === 9 ){}
                 }
  if( num >= 50 ){  _50 = Math.floor(num / 50); num -= (50*_50); }
  if( num >= 10 ){  _10 = Math.floor(num / 10); num -= (10*_10); }
  if( num >= 5 ){  _5 = Math.floor(num / 5); num -= (5*_5); }
  if( num >= 1 ){  _1 = Math.floor(num / 1); num -= (1*_1); }
  
  console.log("1000's: "+_1000+" ; 500's: "+_500+" ; 100's: "+_100+" ; 50's: "+_50+" ; 10's: "+_10+" ; 5's: "+_5+" ; 1's: "+_1);

*/
/*  
  return num;
}*/

