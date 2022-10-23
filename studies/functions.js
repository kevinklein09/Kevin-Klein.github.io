/** FUNCTIONS:
 * 
 * 0: In Javascript, it is often necessary to perform the same action in many places
 * in the programs that we write. A beneficial way to avoid repeating the same code 
 * over and over is to write a function to wrap that code and reuse it. 
 * 1: There are two phases to using functions - declaration and invocation.
 * 2: When declared, a function can be written to take in one or more parameters. When
 * invoked, a function can take in arguments.  
 * 3: We can assign functions to a variable with function expression. 
 * 4: Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
 * 5: Functions have scope. 
 * 6: Functions can have closure. 
 */

// 1. Function Declaration and Invocation 
    /* A function declaration (also called a function definition or function statement)
     * consists of the function keyword, followed by the function name, a list of parameters, 
     * and the function body, as shown below:
     */

    function functionName(parameters) {
        // function body, wrapped in curley braces
    }

    /* The function name should reflect the use or purpose of the function. When we invoke the 
     * function, the code inside of the function body will execute. To do so, you must use the 
     * function name followed by the arguments. Here's an example of a function declaration and 
     * invocation:
     */

    //function declaration:
    function addTwo(num) {
        return num += 2;
    }
    //function invocation:
    addTwo(10)
    console.log(addTwo(10)) // prints => 12

// 2. Function Parameters and Arguments
    /* When declared, a function can be written to take in zero, one, or multiple parameters. When
     * using multiple parameters, you must separate each by a comma. Here is the synatx of a function:
     */

    function myFunction(param1, param2, param3) {

    }

    /* When we invoke a function, we pass in arguments that correspond to the parameters:
     */

     function myFunction(1, 2, 3) { // 1, 2, and 3 are all passed in as arguments

     }

     // Let's declare a simple function:

     function myMessage (message) {
        console.log(message);
     }
     // Now let's invoke our function:
     myMessage("Hello World!"); // print => "Hello World!"

// 3. Function Expression
     /*
      * 
      * 
      * 
      * 
      * 
      * 
      */