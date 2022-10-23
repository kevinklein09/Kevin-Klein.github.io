/** OPERATORS:
 * 
 * 0: In JavaScript, an operator is a special symbol used to perform operations on operands 
 * (values and variables). It can be said that that an operator operates the operands. There
 * are a number of operators supported by Javascript. 
 * 1: Arithmetic operators are used to perform arithmetic calculations on numbers.
 * 2: Assignment operators are used to assign values to variables. 
 * 3: Comparison operators are used to compare two values and return a boolean value, either
 * true or false.
 * 4: Logical operators perform logical operations and return a boolean value, either true or 
 * false.
 * 5: Unary operators are special operators that consider a single operand and perform different 
 * types of operations on that single operand.
 * 6: Also known as the conditional operator, the ternary operator evaluates a condition and executes 
 * a block of code based on the condition.
 */

// 1. Arithmetic Operators 
    /* Arithmetic operators are used to perform arithmetic calculations on numbers.
     * OPERATOR              DESCRIPTION                           EXAMPLE
     *      +                   Addition                            x + y
     *      -                   Subtraction                         x - y
     *      *                   Multiplication                      x * y
     *      **                  Exponentiation                      x ** y
     *      /                   Division                            x / y
     *      %                   Modulus(Division Remainder)         x % y
     */
    // Here's an example of the modulus operator in action:
    var x = 5;
    var y = 2;
    console.log(x % y); // prints => 1

// 2. Assignment Operators 
    /* Assignment operators are used to assign values to variables. 
     *
     * NAME:                        OPERATOR:         EXAMPLE:             MEANING:
     * Assignment operator              =              x = y                x = y
     * Addition assignment              +=             x += y               x = x + y
     * Subtraction assignment           -=             x -= y               x = x - y
     * Multiplication assignment        *=             x *= y               x = x * y
     * Division assignment              /=             x /= y               x = x / y
     * Remainder assignment             %=             x %= y               x = x % y   
     * Exponentiaton assignment         **=            x **= y              x = x ** y
     */
    // Here's an example of the addition assignment operator in action
    var x = 5;
    console.log(x += 4) // prints => 9

// 3. Comparison Operators 
    /* Comparison operators are used to compare two values and return a boolean value, either
     * true or false.
     * 
     * NAME:                       OPERATOR:             EXAMPLE:              EXPLANATION:
     * Equality                       ==                  x == y               Returns true if operands are equal
     * Strict equlity                 ===                 x === y              Returns true if operands are equal and of equal type
     * Not equal                      !=                  x != y               Returns true if operands are not equal
     * Strictly not equal             !==                 x !== y              Returns true if operands are equal but of different type or are not equal at all
     * Greater than                   >                   x > y                Returns true if left operand is greater than right operand
     * Greater than or equal to       >=                  x >= y               Returns true if left operand is greater than or equal to right operand
     * Less than                      <                   x < y                Returns true if left operand is less than right operand
     * Less than or equal to          <=                  x <= y               Returns true if left operand is less than or equal to right operand
     */
    // Here are a few examples:
    var x = 5;
    var y = 8;
    var z = '5';
    console.log(x == z); // prints => true
    console.log(x === z) // prints => false
    console.log(x < 8) // prints => true

// 4. Logical Operators 
    /* Logical operators perform logical operations and return a boolean value, either true or 
     * false.
     * 
     * NAME:                      OPERATOR:               EXAMPLE:            EXPLANATION:
     * Logical AND                  &&                     x && y              Returns true if both operands are true, else returns false
     * Logical OR                   ||                     x || y              Returns true if either operand is true, else returns false if both are false
     * Logical NOT                  !                      !x                  Returns the reversed boolean result of operand, turning true to false and vice-versa
     */
    // Here are a few examples:
    console.log(true && true); // prints => true
    console.log(true && false); // prints => false
    console.log(true || false); // prints => true
    console.log(!true); // prints => false

// 5. Unary Operators  
    /* Unary operators are special operators that consider a single operand and perform different 
     * types of operations on that single operand.
     * 
     * NAME:                    OPERATOR:               EXAMPLE:            EXPLANATION:
     * Type of                   typeof                 typeof x              Evaluates and returns a string of the type of the operand value
     * Delete                    delete                 delete x              Removes a property from an object, including arrays
     * Unary plus                 +                     +x                    Attempts to convert the following operand value into a number. Works with numbers, strings that contain numbers as a string, and boolean values, converting true to 1 and false to 0
     * Unary negation             -                     -x                    Behaves like unary plus, yet negates the value
     * Increment                  ++                    x++                   Adds one to the operand and returns the result as its value
     * Decrement                  --                    x--                   Subtracts one from the operand and returns the result as its value
     */
    //  Here are a few examples:
    var x = 1;
    var y = '2';
    var z = true;
    console.log(typeof x); // prints => 'number'
    console.log(x++); // prints => 2
    console.log(x--); // prints => 0
    console.log(+z); // prints => 1
    console.log(-y); // prints => -2

// 6. Ternary Operator  
    /* Also known as the conditional operator, the ternary operator evaluates a condition and executes 
     * a block of code based on the condition. It is the only operator in Javascript that takes in
     * three operands. The ternary operator is often used as an alternative to an if/else statement.
     * 
     * SYNTAX:
     * condition ? expressionIfTrue : expressionIfFalse
     */
    // Here's an example of an if/else statement:
    if (age <= 21) {
        console.log("You can have a beer!");
    } else {
        "You can leave the bar!";
    }
    // And here's the same example using a ternary operator:
    age >= 21 ? "You can have a beer!" : "You can leave the bar!";

    /* Similar to how if/else if/else statements can be chained together, so can a tenrary operator 
     * with the following syntax:
     *
     * condition1 ? value1
     *      : condition2 ? value2
     *      : condition3 ? value3
     *      : value4
     */  
    

    

