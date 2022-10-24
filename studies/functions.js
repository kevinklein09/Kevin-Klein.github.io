/** FUNCTIONS:
 * 
 * 0: In Javascript, it is often necessary to perform the same action in many places
 * in the programs that we write. A beneficial way to avoid repeating the same code 
 * over and over is to write a function to wrap that code and reuse it. 
 * 1: There are two phases to using functions - declaration and invocation.
 * 2: When declared, a function can be written to take in one or more parameters. When
 * invoked, a function can take in arguments. Functions can optionally take in parameters
 * and optionally return a single value. 
 * 3: We can assign functions to a variable with function expression. 
 * 4: Functions have scope. 
 * 5: Functions can have closure. 
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

    /* The return statement stops the execution of a function and returns a value.
     */

// 2. Function Parameters and Arguments
    /* When declared, a function can be written to take in zero, one, or multiple parameters. When
     * using multiple parameters, you must separate each by a comma. Here is the synatx of a function:
     */

    function myFunction(param1, param2, param3) {

    }

    /* When we invoke a function, we pass in arguments that correspond to the parameters.
     * Let's declare a simple function:
     */

     function myMessage (message) {
        console.log(message);
     }
     // Now let's invoke our function and pass in an argument:

     myMessage("Hello World!"); // prints => "Hello World!"

     /* Functions can optionally take inputs/parameters. This means that is isn't necessary to 
      * pass in an argument in place of a parameter every time that you call a function, allowing
      * you to pass fewer arguments to the function. Optional parameters are called default parameters.
      */

     function multiplyBy(x, y=1) { // y is an optional default parameter 
        return x * y;
      }
      console.log(multiplyBy(5)); // prints => 5
      console.log(multiplyBy(5, 10)); // prints = 50

      /* It is also optional to return a value in a function. A function will always return something, 
       * though. So in these cases, the value returned from functions with a return statement is either
       * undefined or void. Here's an example: 
       */

      function addByTwo(x) {
        x + 2;
      }
      console.log(addByTwo(2)) // prints => undefined

      /* We can also use functions to log something to the console. Yet when we actually log
       * the function to the console itself, we will still get a value ofundefined:
       */

      function messageToYou(name) {
        console.log("Hello " + name + ", how are you today?")
      }
      messageToYou('Kevin'); // logs to the console => 'Hello Kevin, how are you today?'
      console.log(messageToYou('Kevin')); // both logs to the console => 'Hello Kevin, how are you today?' AND gives us a value of undefined

// 3. Function Expressions
     /* Another way to create a function is with the function expression. A function   
      * expression can be stored in a variable. After it has been stored in a variable, 
      * can then be used as a function itself:
      */
     
     const x = function(param1, param2) {
        return param1 + param2; 
     }
     let e = x(10, 5);
     console.log(e); // prints => 15

     /* The above function is an ANONYMOUS FUNCTION because it is declared without a 
      * name. Anonymous functions do not need names since they are invoked using the 
      * variable name, as seen above. 
      */

// 4. Function Scope
     // Functions can see and modify variables in parent or global scopes:

    var first = 'Kevin'; // first is a globally scoped variable
    function addLastName(last) {
        return first + ' ' + last; 
    }
    console.log(addLastName('Klein')); // prints => 'Kevin Klein'

     /* Each function creates a new scope in Javascript. This means that variables that 
      * are defined inside a function - called local variables - are not visible/accessible 
      * from outside of the function. 
      * 
      * 
      * 
      * 
      */

     



