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
    /* An else-if statement can be used to specify a new condition if the first condition is false. Here
     * is the syntax:
     */

    if(condition1) {
        // block of code to be executed if condition1 is true
    } else if(condition2) {
        // block of code to be executed if condition2 is true
    } else {
        // block of code to be executed if condition1 and condition2 are both false
    }

    /* Here's an example:
     */

    let age = 0;
    if(age < 21) {
        console.log('You cannot have a beer!');
    } else if(age >= 21) {
        console.log('You can have a beer!');
    } else {
        console.log('You have no age!');
    } // prints => 'You have no age!'

// 4. Switch Statements
    /* Switch statements can be used to perform different actions on different conditions. We can use the
     * switch statement to select one of many code blocks to be executed. A switch statement will evaluate
     * an expression once, compare it with the values of each case clause, and execute statements after the 
     * first case clause with a matching value, until it reaches a break statement.
     */

    switch(expression) {
        case x:
            // code block to be executed when the result of expression matches x
            break;
        case y: 
            // code block to be executed when the result of expression matches y
            break;
        default:
            // code block to be executed if the result of expression did not match x or y
    }

    /** Here's an example:
     */

    let expr = 'George';
    switch(expr) {
        case 'Kevin':
            console.log('Welcome back, Kevin!');
            break;
        case 'George':
            console.log('Welcome back, George!');
            break;
        default:
            console.log(`You must create a profile to log in, ${expr}`);
    }

    /** Switch statements can also be used with conditional logic:
     */

    let age = 18;
    switch(age) {
        case (age < 21):
            console.log('You cannot have a beer!');
            break;
        case (age >= 21):
            console.log('You can have a beer!');
            break;
        default:
            console.log('You have no age!');
    }
