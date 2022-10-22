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
 * 6: A ternary operator evaluates a condition and executes a block of code based on the 
 * condition.
 */

// 1. Arithmetic Operators //
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

// 2. Assignment Operators //
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

// 3. Comparison Operators // 
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

// 4. Logical Operators // 
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

// 5. Unary Operators // 
    /*
     * 
     * 
     * 
     * 
     * 
     * 
     */
