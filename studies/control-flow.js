/** CONTROL FLOW:
 * 
 * 0: Control flow refers to the flow or path that Javascript takes when executing code. It is the 
 * order in which the computer executes statements in a script. The control in control flow refers
 * to where we tell Javascript to either 'do this' or 'do that' based on some condition. Another way 
 * to think about conditional logic is that it acts like a code's traffic stop. Conditional statements 
 * allow us to perform different actions for different decisions. There are a few different variants
 * of coding in conditional logic:
 * 1: If Statements
 * 2: Else Statements
 * 3: Else-if Statements
 * 4: Switch Statements
 */

// 1. If Statements
    /* An if statement can be used to specify a block of Javascript code to be executed if a condition is 
     * determined to be true. Here is the syntax:
     */

    if(condition) {
        // block of code to be executed if the condition is true
    }

    /* Here's an example:
     */

    let age = 18;
    if(age < 21) {
        console.log('You cannot have a beer!');
    } // prints => 'You cannot have a beer!'

// 2. Else Statements
    /* An else statement can be used to specify a block of code to be executed if the condition is false.
     * Here is the syntax:
     */

    if(condition) {
        // block of code to be executed if the condition is true
    } else {
        // block of code to be executed if the condition is false
    }

    /* Here's an example:
     */

    let age = 29;
    if(age < 21) {
        console.log('You cannot have a beer!');
    } else {
        console.log('You can have a beer!');
    } // prints => 'You can have a beer!'

// 3. Else-If Statements
