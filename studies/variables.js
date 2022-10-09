/**
 * VARIABLES:
 * 
 * 0: Variables are named containers that are used to store data in Javascript. *
 They can be thought of as placeholders that can be accessed later in our program. *
 The data that is stored inside a variable is referred to as the value. There *
 are many data types that can be stored as the value of a variable, such as a *
 String, Number, Boolean, Array, Object, Function, etc. After creating a variable, *
 it is possible to change its assigned value and datatype.
 * 1: In order to create a variable, we must first use the keyword var followed by *
 a unique name(aka an id or alias) that will identify the variable.
 * 2: A variable is capable of undergoing two phases: declaration and initialization *
 (aka assignment).
 * 3: Variables also have the capability to be reassigned to new, completely *
 different values. 
 * 4: There are three total keywords that can be used to declare variables: var, *
 let, and const. Each keyword is different from the other, with its own set of *
 features.  
 * 5: After declaring a variable and executing your code, Javascript undergoes *
  a process that pulls all of the declarations to the top of the code script. This *
  process is called HOISTING. 
 */

// 1. Declaration //
    /* We must use a keyword to first declare our variable, followed by a unique name *
    that represents the intended value or purpose of the variable. If the variable is *
    to be comprised of two words, it is a common practice to type out the variable name *
    in camelCase. This is done by using lowercase for the first letter of the first word *
    and uppercase for any word that follows, with no spaces in between. Here is an example: 
    */
    var myDog;

    /* It is also important to note that there are some rules that apply when declaring a *
    variable in javascript. 
        /* The variable name must start with a letter, underscore, or dollar sign and cannot *
        contain spaces. 
        * We can use numbers after the first letter, such as myDog1.
        * Variables are case-sensitive, meaning myDog and MyDog are two completely different *
        variables.
    In the example below, we use the keyword var to declare the variable. In this declaration *
    phase, the variable firstName is considered undefined because it has not yet been *
    initialized to any value. 
    */
    var firstName;
    console.log(firstName); // prints => undefined

// 2. Initialization/Assignment //
    /* For the second phase of using a variable, we initialize the variable by assigning it *
    to a specific value using the assignment operator (=).
    */
    firstName = "Kevin";
    console.log(firstName); // prints => kevin
    /* Declaration and initialization can also be done together within the same line of code:
    */
    var firstName = "Kevin";
    console.log(firstName); // prints => Kevin

// 3. Re-assignment //
    /* A variable's value can be changed or updated later in our code. 
     */
    firstName = "Clem";

// 4. Keywords //
    /* Variables are not limited to being declared with the var keyword only. There are in *
    fact a total of 3 keywords that we can use to declare a variable: var, let, const. Each *
    of these keywords is different from the other in the way that they behave. 
     */
