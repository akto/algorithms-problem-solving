console.clear();
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    
    var explodeName = firstAndLast.split(' '),
    firstName = explodeName[0],
    lastName = explodeName[1];
    
    this.getFullName = function() {    
        return firstName+' '+lastName;
    };
    this.getFirstName = function(){
        return firstName;
    };
    this.getLastName = function(){
        return lastName;
    };
    this.setFirstName = function(fName){
        firstName = fName;
    };
    this.setLastName = function(lName){
        lastName = lName;
    };
    this.setFullName = function( fuName ){
        let f = fuName.split(' ');
        firstName = f[0];
        lastName = f[1];
    };
};

var bob = new Person('Bob Ross');
console.log( bob.getFullName() );
console.log( Object.keys(bob).length ); //should return 6.
console.log( bob instanceof Person ); //should return true.
console.log( bob.firstName ); //should return undefined.
console.log( bob.lastName ); //should return undefined.
console.log( bob.getFirstName() ); //should return "Bob".
console.log( bob.getLastName() ); //should return "Ross".
console.log( bob.getFullName() ); //should return "Bob Ross".
bob.setFirstName('Haskell');
console.log( bob.getFullName() ); //should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.setLastName('Curry');
console.log( bob.getFullName() ); //should return "Haskell Curry" after bob.setLastName("Curry").
bob.setFullName('Haskell Curry');
console.log( bob.getFullName() ); //should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log( bob.getFirstName() ); //should return "Haskell" after bob.setFullName("Haskell Curry").
console.log( bob.getLastName() ); //should return "Curry" after bob.setFullName("Haskell Curry").
