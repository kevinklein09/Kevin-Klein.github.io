/** LOOPS:
 * 
 * 0: It is often beneficial to repeat code in Javascript. Loops are 
 * a fast and easy way to achieve this, as they allow us to run a block of code 
 * multiple times. We will go over three different loops:
 * 1: For Loops
 * 2. For...in Loops
 * 3: While Loops 
 */

/* A Javascript loop enables us to do something repeatedly in a quick and easy fashion.
 * There are various types of loops, yet they all will essentially do the same thing: repeat
 * an action a number of times. Different loops provide different ways to determine the start
 * and end points of the particular loop being utilized. Certain loops will benefit you more 
 * in certain situations. 
 */

// 1. For Loops
    /* A for loop will repeat over and over until a specified condition is evaluated as false. 
     * They are commonly used to run some code a set number of times. 
     * For loops consist of three optional expressions, followed by a code block. These are:
     * 
     * 1. Initial Expression - This will run before the execution of the first loop, and is typically
     * used to create one or more loop counters. This expression can also declare variables.
     * 
     * 2. Condition Expression - This expression is evaluated next, and will be evaluated each time before
     * the loop runs. If the value is true, the statement, or code in the loop, is executed. If the
     * value is false, the loop stops executing. If the condition expression is omitted, the condition
     * will automically be evaluated as true. 
     * 
     * 3. Final Expression - This expression is executed after each iteration of the loop. It
     * is typically used to increment or decrement a count. 
     * 
     * Here is the syntax:
     */

    for(intialExpression; conditionExpression; finalExpression) {
        //code to execute at each iteration
    }

    // Here is an example of a loop that iterates forwards: 

    for(let i = 0; i <= 7; i++) {
        console.log(i);
    }
    /* prints to the console =>
     * 0
     * 1
     * 2
     * 3
     * 4
     * 5
     * 6
     * 7
     */

    // Here is another example of a loop that iterates backwards: 

    for(let i = 7; i >= 0; i--) {
        console.log(i);
    }
    /* prints to the console =>
     * 7
     * 6
     * 5
     * 4
     * 3
     * 2
     * 1
     * 0
     */

    // For loops can be used to iterate through an array. Here's an example:

    var myArray = [1, 2, 3, 4, 5];

    for(let i = 0; i <= myArray.length; i++) {
        console.log(i);
    }
    /* prints to the console =>
     * 0
     * 1
     * 2
     * 3
     * 4
     * 5
     */

    // And here is an example of looping backwards through an array with a for loop:

    for(let i = myArray.length; i >= 0; i--) {
        console.log(i);
    }
    /* prints to the console =>
     * 5
     * 4
     * 3
     * 2
     * 1
     * 0
     */

// 2. For...in Loops
    /* A for-in loop will iterate over the properties of an object. For each property 
     * in the object, the code inside the for-in loop code block will be executed. Here
     * is the syntax:
     */

    for(variable in object) {
        //code to execute at each iteration
    }

    /* Here's an example of a for-in loop that iterates over the properties of an object
     * and logs its name and value to the console:
     */

    let animals = {
        dog: 'Trunks',
        cat: 'Suki',
        rabbit: 'Whiskers'
    }

    for(let key in animals) {
        console.log(key + ': ' + animals[key]);
    }
    /* prints to the console => 
     * dog: 'Trunks'
     * cat: 'Suki'
     * rabbit: 'Whiskers'
     */

