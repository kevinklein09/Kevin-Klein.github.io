// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var rangeArray = []; // create an empty array that will store the range collection that is in between and inclusive to the two integer parameters

    if (start > end) { // create an if statement that determines if start is greater than end
      for (var i = start; i >= end; i--) { // create a for loop that iterates through the two parameters if the above if statement is true
        rangeArray.push(i); // push each iteration to rangeArray
      }
      
    } 
    else if (start < end) { // create an else if satement that determines if start is less than end
      for (var i = start; i <= end; i++) { // create a for loop that iterates through the two parameters if the above if statement is true
        rangeArray.push(i); // push each iteration to rangeArray
      }
    }
    return rangeArray; // return rangeArray
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
