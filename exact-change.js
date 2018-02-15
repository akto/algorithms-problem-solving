var Moneys = {
	'PENNY' : { value : 0.01, amount : 0, quantity : 0 },
	'NICKEL' : { value : 0.05, amount : 0, quantity : 0 },
	'DIME' : { value : 0.1, amount : 0, quantity : 0 },
	'QUARTER' :{ value : 0.25, amount : 0, quantity : 0 },
	'ONE' : { value : 1, amount : 0, quantity : 0 },
	'FIVE' : { value : 5, amount : 0, quantity : 0 },
	'TEN' : { value : 10, amount : 0, quantity : 0 },
	'TWENTY' : { value : 20, amount : 0, quantity : 0 },
	'ONE HUNDRED' : { value : 100, amount : 0, quantity : 0 },
	ret : function( change ){
		var remain = change;
		var result = [];
		if( remain > 100 ){
			let hundred = Moneys['ONE HUNDRED'];
			if( hundred.quantity >= 1 ){ 
				let ch = Math.floor(change / 100);
				remain = remain - hundred.quantity*hundred.value;
				console.log(hundred.quantity +'--' +remain);
				if( ch >= hundred.quantity ){ 
					result.push( [ 'ONE HUNDRED',hundred.amount*hundred.value ] ); 
				}
			}
  		}else if( remain > 20 && Moneys['TWENTY'].quantity >= 1){
  				let twenty = Moneys['TWENTY'];
			 
				let ch = Math.floor(remain / 20);
				if( ch >= twenty.quantity ){ 
					result.push( [ 'TWENTY',twenty.quantity*twenty.value ] ); 
				} 
				remain = Math.floor( remain - (twenty.quantity*twenty.value) );
				console.log(twenty.amount +'---'+ remain);
			
		}else if( remain > 10 ){
			let ten = Moneys['TEN'];
			if( ten.quantity >= 1 ){ 
				let ch = Math.floor(remain / 10);
				if( ch >= ten.quantity ){ 
					result.push( [ 'TEN',ten.quantity*ten.value ] ); 
				} 
				remain = remain - ten.quantity*ten.value;
				console.log(remain);
			}
		}
	return result;

	}
};
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var changeTotal = [];
  // Here is your change, ma'am.
  var obj = cid.map( function( a ){
  	/*var n = new Object();
  	n.name = a[0],
  	n.value = Moneys[ a[0] ] ;
  	n.amount = a[1];*/
  	//var n = Moneys[ a[0] ];
  	Moneys[ a[0] ].amount = a[1];
  	Moneys[ a[0] ].quantity = Math.round( Moneys[ a[0] ].amount / Moneys[ a[0] ].value );
  	//console.log( Moneys[ a[0] ].quantity );

  	//console.log( Moneys[ a[0] ] );
  	//Moneys[ a[0] ]['amount'] = a[1];
	return Moneys;
  } );
/*
  if( change > 100 ){
  	if( Moneys['ONE HUNDRED'].quantity >= 1 ){ 
  		let ch = Math.floor(change / 100); 
  		if( ch >= Moneys['ONE HUNDRED'].quantity ){ 
  			changeTotal.push( [ 'ONE HUNDRED',Moneys['ONE HUNDRED'].amount*Moneys['ONE HUNDRED'].value ] ); 
  		}
  	}else{ console.log( 'no 100'); }
  }else if( change > 20 ){
  	if( Moneys['TWENTY'].quantity >= 1 ){ 
  		let ch = Math.floor(change / 20);
  		if( ch >= Moneys['TWENTY'].quantity ){ 
  			changeTotal.push( [ 'TWENTY',Moneys['TWENTY'].quantity*Moneys['TWENTY'].value ] ); 
  		} 
  	}else{ console.log( 'no 20'); }
  }*/
  //console.log( changeTotal );
  console.log( Moneys.ret( change ) );
  return Moneys;
}



/*
var Money = function( n,c ){
	this.name = n,
	this.value = c,
	this.amount = 0,
	this.getValue = function(){
		return this.value;
	},
	this.setValue = function( val ){
		this.value = val
	}
}*/

// Example cash-in-drawer array:
// [["PENNY", 1.01], .01
// ["NICKEL", 2.05], .05
// ["DIME", 3.10], .10
// ["QUARTER", 4.25], .25
// ["ONE", 90.00], 1
// ["FIVE", 55.00], 5
// ["TEN", 20.00], 10
// ["TWENTY", 60.00], 20
// ["ONE HUNDRED", 100.00]] 100
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
