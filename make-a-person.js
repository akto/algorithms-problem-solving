console.clear();
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.explodeName = firstAndLast.split(' ');
    this.firstName = this.explodeName[0];
    this.lastName = this.explodeName[1];
    this.getFullName = function() {
        return this.firstName+' '+this.lastName;;
    };
    this.getFirstName = function(){
        return firstAndLast.split(' ')[0];
    };
    this.getLastName = function(){
        return firstAndLast.split(' ')[1];
    };
    this.setFirstName = function(fName){
        this.firstName = fName;
    };
    this.setLastName = function(lName){
        this.lastName = lName;
    };
    this.setFullName = function( fuName ){
        this.fullName = fuName;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
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
