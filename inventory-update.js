console.clear();
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    /*
    Reversing done!
    console.log( reverser( reverser( arr1 ).sort() ) );
    */
    return arr1;
}

/* Function that reverse all the elements which are also arrays, in an array*/
function reverser( arr ){
    return arr.map( function(i){
       return i.reverse();
    });
}

// Example inventory lists
var curInv = [
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
    [21, "Fowling Ball"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory( curInv, newInv );

console.time();
console.log('-------Start-------');
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length; //should return an array with a length of 6.
console.log('-------end-------');
console.log('-------Start-------');
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); //should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
console.log('-------end-------');
console.log('-------Start-------');
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []); //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
console.log('-------end-------');
console.log('-------Start-------');
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]];
console.log('-------end-------');
console.log('-------Start-------');
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]); //should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
console.log('-------end-------');
console.timeEnd();
