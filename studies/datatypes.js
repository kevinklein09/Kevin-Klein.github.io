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
     */

    /** NUMBER
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