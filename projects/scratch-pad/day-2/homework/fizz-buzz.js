// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i <= 100; i++) { // create for loop to iterate through numbers between 1-100
        var message = ''; // create new variable message to store message results
        if (i % 3 === 0) message += 'Fizz'; // create an if statement that will add "Fizz" to the variable message for all instances where the index number is a multiple of 3
        if (i % 5 === 0) message += 'Buzz'; // create an if statement that will add "Fizz" to the variable message for all instances where the index number is a multiple of 5
        console.log(message || i); // console log the message or index
      }
      }
      
      console.log(fizzBuzz())


    // YOUR CODE GOES ABOVE HERE //







// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}