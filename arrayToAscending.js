const shuffler = require('./shuffle.js');
/*imports the shuffle function from the shuffle.js file and
stores it in the const shuffler*/


var shufflePrimeArray= n => {
 var primeArray = [];
 //new empty array --> primeArray

 for (var nmbr = 2; nmbr <= n; nmbr++) {
   var notPrime = false;
   for (var x = 2; x <= nmbr; x++) {
       if (nmbr%x===0 && x!==nmbr) {
           notPrime = true;
           /* Checks if the current value of nmbr in the loop is not a prime
           number and ignores if true */
       };
   };
   if (notPrime === false) {
     primeArray.push(nmbr);
     /* Checks if the current value of nmbr in the loop is a prime number, and
     if true, adds it to the previously empty array --> primeArray.
     */
   };
 };

 var primeArrayShuffler = shuffler(primeArray);
/* Shuffles the freshly built array --> primeArray by calling on the shuffle function
and saves the output in the var primeArrayShuffler */
 return (primeArrayShuffler);
 //returns the shuffled array stored in primeArrayShuffler
};

var primePostShuffle = shufflePrimeArray(100);
//calls the shufflePrimeArray function and runs numbers from 2 - 100 through it

console.log("This is the shuffled prime array;");
console.log(primePostShuffle);
//Prints the shuffled array of prime numbers




//This function reorganises the shuffled array in ascending order
var arrayToAscending = (inputArray)=>{
  var organisedArray = [];
  //initialises an empty array ---> var organisedArray
  for (var j=0; Math.max(...inputArray) >= Math.max(...organisedArray); j++){
    /*
    The loop will continue to run as long as the maximum value in the shuffled
    array is greater than or equal to the maximum value in the new organisedArray
    */
    var current_lowest = Math.min(...inputArray);
    //Identifies and saves the current lowest value of the inputArray

    var lowest_index = inputArray.indexOf(current_lowest);
    //Identifies and saves the index of the current lowest value of the inputArray

    organisedArray.push(current_lowest);
    //pushes the current lowest value of the input array to the empty organisedArray

    inputArray.splice(lowest_index,1);
    /* removes the lowest value that was in the input array which was
     also just pushed to the organisedArray*/
   }
  return (organisedArray);
    //Returns the organisedArray which is now sorted into ascending order
};

var organisedPrime = (arrayToAscending(primePostShuffle));
console.log("This is the reorganised prime array;");
console.log(organisedPrime);
//Prints the organised Prime array
