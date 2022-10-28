/** DATA TYPES:
 * 
 * 0: Javascript data types describe the different kinds of data that can be manipulated 
 * and stored in variables. All data types have unique characteristics. There are multiple
 * data types in Javascript, all of which can be divided into two main categories: Primitive,
 * and Complex data types
 * 1: Primitive Data Types
 * 2: Complex Data Types
 */

/* A single variable can only store a single type of data. Primitive data types can only hold one 
 * value at a time, while complex data types can hold collections of values and more complex entities. 
 */


// 1. Primitive Data Types
    /* Also known as primary or built-in data types, primitive data types define immutable values 
     * represented at the lowest level of Javascript. There are five types of primitive data types:
     *
     ** NUMBER
     * The number data type is used to represent positive or negative numbers with or without decimals.
     */

    let x = 100;
    let y = 20.5;
    console.log(x); // prints => 100
    console.log(y); // prints => 20.5

        /* The number data type also includes a few special values:
         ** INFINITY 
         * Infinity is a number that represents positive infinity. A number will reach infinity when it
         * exceeds the upper limit for a number - it represents a value that is greater than any number. 
         * The upper limit of the floating point numbers is 1.797693134862315E+308
         * 
         ** -INFINITY
         * Negative infinity is a number that represents a value that is smaller than any finite number. 
         * The lower limit of the floating point numbers is -1.797693134862316E+308 
         */

        console.log(Math.pow(10, 1000)); // = prints => Infinity
        console.log(Math.log(0)); // prints => -Infinity

        /** NaN
         * Nan represents a special Not-a-Number value. It is a result of an invalid or an undefined
         * mathematical operation.
         */

        console.log('Kevin' / 2); // prints => NaN
        console.log(Math.sqrt(-1)); // prints => NaN

    /** STRING
     * The string data type represents a sequence of characters that are surrounded by single or
     * double quotes.
     */

    let myString = "Hello World!"; 

    /** BOOLEAN
     * The boolean data type can hold only two values: true or false. They are often used for conditions
     * or for comparison. 
     */

    let myBool = true;
    let otherBool = false;

    let a = 10;
    let b = 2;
    console.log(a === b); // prints => false

    /** NULL
     * The null data type can only hold one possible value: null. This represents an empty or unkown value. 
     */

    let n = null;
    console.group(n); // prints => null

    /** UNDEFINED
     * The undefined data type can only have one value, undefined. If a variable has been declared but has not 
     * been assigned to a value, Javascript will automatically assign the value to undefined. 
     */
    
    var g;
    console.log(g); // prints => undefined

// 2. Complex Data Types
    /* Unlike primitive data types, complex data types represent a collection of values, not just a single value. 
     *
     ** OBJECT
     * The object data type allows us to store multiple data collections in a variable. These data collections are 
     * comprised of properties. Object properties are equivalent to key-value pairs, which can both be added and removed. 
     * Property keys are either strings or symbols, and property values can be values of any type, including other objects - 
     * this enables building complex data structures. Here's an example of an object: 
     */

     let profile1 = {
        firstName: 'Kevin', 
        lastName: 'Klein',
        age: 29,
        employed: true
     };

    /** ARRAYS
     * An array is a type of object that is used for storing multiple values in a single variable. Each value in an array is 
     * referred to as an element, and each element has a numeric position, known as the index. The array index begins at 0.  
     * Arrays may contain data of any data type, including other arrays or objects. Here's an example of an array:
     */

    var names = ['Seb', 'Sandy', 'Anton', 'Amadie'];
    console.log(names[0]); // prints => 'Seb'

    /** FUNCTIONS
     * Functions are callable objects that execute a block of code. It is possible for a function to be stored in variables, 
     * objects, and arrays. Here's an example of a function stored in a variable: 
     */

    var message = function() {
        return 'Hello world!';
    }

    /* Functions can be passed as arguments to other functions and returned from functions:
     */

    function newMessage(name){
        return 'Hello there, ' + name;
    }

    function displayMessage(messageFunction, userName) {
        return messageFunction(userName);
    }

    var result = displayMessage(newMessage, 'Kevin');
    console.log(result); // prints => 'Hello there, Kevin'