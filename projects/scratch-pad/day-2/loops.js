// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i < array.length; i++) { // create for loop that iterates forward through input array
    console.log(array[i]); // print array values with console.log
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length - 1; i >= 0; i--) { // create a for loop that iterates backwards through input array
    console.log(array[i]) // print array values with console.log
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    var keys = []; // create an empty array 
  for (var key in object) { // iterate through object with for in loop
    keys.push(key); // push current key into keys array
  }
  return keys; // return keys
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) { // create for in loop that iterates over the key/value pairs in the input object
    console.log(key); // print object keys
  }
  
  
  
  // YOUR CODE ABOVE HERE //1
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    var keyValues = []; // create an empty array 
  for (var key in object) { // iterate through object with for in loop
    keyValues.push(object[key]); // push values into array with .push method and bracket notation
  }
  return keyValues; // return array
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) { // create for in loop that iterates over the key/value pairs in the input object
    console.log(object[key]) // print object values wth console.log
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
let count = 0; // create count variable to store values
for (let key in object) { // create for loop to iterate through object properties
  ++count; // increment count
}
return count; // return count

console.log(count); // console.log count
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

  var array = []; // create empty array
  for (var key in object) { // create for in loop to iterate through object properties
    array.push(object[key]); // push object values with .push() method and bracket notation into the array
  }
  for (var i = array.length - 1; i >= 0; i--) { // create for loop to iterate through array index in reverse
    console.log(array[i]); // log array values to console
  }
 
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
