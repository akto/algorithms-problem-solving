function checkCashRegister(price, cash, cid) {
	var change = cash - price;
	var Moneys = {
		'PENNY' : { value : 0.01, amount : 0, quantity : 0 },
		'NICKEL' : { value : 0.05, amount : 0, quantity : 0 },
		'DIME' : { value : 0.1, amount : 0, quantity : 0 },
		'QUARTER' :{ value : 0.25, amount : 0, quantity : 0 },
		'ONE' : { value : 1, amount : 0, quantity : 0 },
		'FIVE' : { value : 5, amount : 0, quantity : 0, cash : 0 },
		'TEN' : { value : 10, amount : 0, quantity : 0, cash : 0 },
		'TWENTY' : { value : 20, amount : 0, quantity : 0, cash : 0 },
		'ONE HUNDRED' : { value : 100, amount : 0, quantity : 0 },
		changetoreturn : [],
		totalChange : function(  ){	
			console.log( this['TWENTY'].cash);
		},
		incursionist : function( c ){

			if( c >= this['TWENTY'].value && this['TWENTY'].amount >= this['TWENTY'].value ){ 
				
				this['TWENTY'].cash += 1;
				this['TWENTY'].amount -= this['TWENTY'].value; this['TWENTY'].quantity -= 1;
				c -= this['TWENTY'].value; 
				this.incursionist( c );
			}else if( c >= this['TEN'].value && this['TEN'].amount >= this['TEN'].value ){
				
				this['TEN'].cash += 1;
				this['TEN'].amount -= this['TEN'].value; this['TEN'].quantity -= 1;
				c -= this['TEN'].value; 
				this.incursionist( c );
			}else if( c >= this['FIVE'].value && this['FIVE'].amount >= this['FIVE'].value ){
				
				this['FIVE'].cash += 1;
				this['FIVE'].amount -= this['FIVE'].value; this['FIVE'].quantity -= 1;
				c -= this['FIVE'].value; 
				this.incursionist( c );
			}
			else{
				console.log('C is Zero!');
			}
		}
	};
  
  // Here is your change, ma'am.
  var obj = cid.map( function( a ){
  	Moneys[ a[0] ].amount = a[1];
  	Moneys[ a[0] ].quantity = Math.round( Moneys[ a[0] ].amount / Moneys[ a[0] ].value );
  } );
  console.log( Moneys );
  Moneys.incursionist( change );
  
  console.log( Moneys.totalChange() );
  return Moneys;
}

console.clear();
console.time()
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); //should return an array.
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return a string.
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return a string.
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); //should return [["QUARTER", 0.50]].
console.log('---------------------');
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return "Insufficient Funds".
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return "Insufficient Funds".
console.log('---------------------');
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return "Closed".
console.log('---------------------');
console.timeEnd();
