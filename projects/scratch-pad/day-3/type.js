// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // is there something available that already performs this task? google it
    return Array.isArray(value); // use the Array.isArray() method to determine if the passed value is an array
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === 'object' && !Array.isArray(value) === true && value !== null) { //create an if statement to determine if value datatype is an object AND not an array AND not null
      if (value instanceof Date) { //create a nested if statement to determine if value is an instance of a date using instanceof operator 
        return false // if nested if statement is true, return false
      }
        return true; // if first if statement is true, return true
        }  else { // create an else/default statement to catch all other datatypes 
          return false; //return false
        }



    // determine typeof value is 'object' AND value is not an array AND value is not null
    // AND value is not an instance of the date object (google how something is instance of date object)
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === 'object' || Array.isArray(value) === true) { //create an if statement to determine if value is an object OR an array
        if (value === null || value instanceof Date) { //create a nested if statement to determine if value is null OR an instance of a date
          return false; //return false if nested if statement is true
        } 
          return true; //return true if first if statement is true
      } else { //create an else/default statement to catch all other potential datatypes of input value
          return false; //return false
        }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)) { // create an if statement to determine if value is an array
      return 'array'; // if true, return 'array'
    } else if(value === null) { //create an if/else statement to determine if value is null
      return 'null'; //if true, return 'null'
    } else if (value instanceof Date) { // create an if/else statement to determine if value is an instance of a date
      return 'date'; //if true, return 'date'
    } else { // create an else/default statement to catch all other datatypes
      return typeof value; // return datatype with typeof
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
