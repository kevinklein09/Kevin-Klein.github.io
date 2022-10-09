/**
 * VARIABLES:
 * 
 * 0: Variables are named containers that are used to store data in Javascript. 
 * They can be thought of as placeholders that can be accessed later in our program. 
 * The data that is stored inside a variable is referred to as the value. There 
 * are many data types that can be stored as the value of a variable, such as a 
 * String, Number, Boolean, Array, Object, Function, etc. After creating a variable, 
 * it is possible to change its assigned value and datatype.
 * 1: In order to create a variable, we must first use the keyword var followed by 
 * a unique name(aka an id or alias) that will identify the variable.
 * 2: A variable is capable of undergoing two phases: declaration and initialization 
 * (aka assignment).
 * 3: Variables also have the capability to be reassigned to new, completely 
 * different values. 
 * 4: There are three total keywords that can be used to declare variables: var, 
 * let, and const. Each keyword is different from the other, with its own set of 
 * features.  
 * 5: After declaring a variable and executing your code, Javascript undergoes 
 * a process that pulls all of the declarations to the top of the code script. This 
 * process is called HOISTING. 
 */

// 1. Declaration //
    /* We must use a keyword to first declare our variable, followed by a unique name
     * that represents the intended value or purpose of the variable. If the variable is 
     * to be comprised of two words, it is a common practice to type out the variable name 
     * in camelCase. This is done by using lowercase for the first letter of the first word 
     * and uppercase for any word that follows, with no spaces in between. Here is an example: 
     */
    var myDog;

    /* It is also important to note that there are some rules that apply when declaring a 
     * variable in javascript. 
        /* The variable name must start with a letter, underscore, or dollar sign and cannot 
        * contain spaces. 
        * We can use numbers after the first letter, such as myDog1.
        * Variables are case-sensitive, meaning myDog and MyDog are two completely different 
        * variables.
     *In the example below, we use the keyword var to declare the variable. In this declaration 
     * phase, the variable firstName is considered undefined because it has not yet been 
     * initialized to any value. 
     */
    var firstName;
    console.log(firstName); // prints => undefined

// 2. Initialization/Assignment //
    /* For the second phase of using a variable, we initialize the variable by assigning it 
     * to a specific value using the assignment operator (=).
     */
    firstName = "Kevin";
    console.log(firstName); // prints => Kevin
    /* Declaration and initialization can also be done together within the same line of code:
    */
    var firstName = "Kevin";
    console.log(firstName); // prints => Kevin

// 3. Re-assignment //
    /* A variable's value can be changed or updated later in our code. 
     */
    firstName = "Clem";
    console.log(firstName); // prints => Clem

// 4. Keywords //
    /* Variables are not limited to being declared with the var keyword only. There are in 
     * fact a total of 3 keywords that we can use to declare a variable: var, let, const. 
     */ 
    var myDog = "Trunks";
    console.log(myDog); // prints => Trunks
    let age = 29;
    console.log(age); // prints => 29
    const myFriend = "Frank";
    console.log(myFriend); // prints => Frank
    /* 
     * While these three keywords do share similarities in their sytax for declaring variables,
     * each is different from the other in regards to their individual use, scope, and how
     * they are hoisted.
     */
        /** SCOPE
         * A variable's scope refers to where it is available for use inside of the code. It is
         * essentially the region or place in the program where our variable is defined.
         * Variables can have three different types of scope: LOCAL, GLOBAL, and BLOCK. Local
         * variables are those that are created within functions. These local variables have local 
         * scope and can only be used within the function's code block, which is wrapped in and bounded 
         * by curly braces. Global variables, on the other hand, are those that are created outside of 
         * functions. These can be accessed anywhere in the program. Block scope, while similar to 
         * local scope, is when a variable is restricted to the individual code block, including
         * conditional statement, loops, AND functions. 
         */
        // Here is an example of a locally scoped variable:
        function localScopeExample() {
            var x = 10; // locally scoped variable
            return x;
        }
        console.log(x); // prints => ReferenceError: x is not defined
        // Here is an example of a globally scoped variable
        var x = 10;
        function globalScopeExample() {
            x += 5;
            return x;
        }
        console.log(x); // prints => 10
        console.log(globalScopeExample()); // prints => 15

        /** VAR
         * Variables that are declared with the keyword var can be reassigned and have both
         * global and local scope. 
         */
        var num = 1; // globally scoped variable
        num = 2;
        console.log(num); // prints => 2

        function add() {
            num += 2; // the globally scoped variable num can be accessed within the function
            return num;
        }
        console.log(add()); // prints => 4 
        
        var y = 1; // globally scoped variable
        function subtract() {
            var a = 6; // locally scoped variable
            a -= y;
            return a;
        }
        console.log(a); // prints => ReferenceError: a is not defined
        console.log(subtract()); // prints => 5

        /** LET
         * Variables that are declared with the let keyword can be reassigned and are BLOCK
         * scoped. 
         */
        let myHobby = "Reading";
        myHobby = "Swimming";
        console.log(myHobby); // prints => Swimming

        function blockScoped() {
            let animal = "dog"; 
            return animal;
        }
        console.log(animal); // print => ReferenceError: animal is not defined
        //similarly, let is block scoped within conditional statement and loop code blocks
        if(true) {
            let anotherAnimal = "cat";
        }
        console.log(anotherAnimal); // prints => print => ReferenceError: anotherAnimal is not defined

        /** CONST
         * Variables that are declared with the const keyword CANNOT be reassigned and are 
         * block scoped. These share all of the same properties of the let keyword, but differ
         * in the fact that they cannot be updated or reassigned. A variable declared with const
         * must be initialized in the same line of code. 
         */
        const a = 5;
        function multiply() {
            a *= 2;
            return a;
        }
        console.log(multiply()); // prints => TypeError: Assignment to constant variable.
        a = 10;
        console.log(a); // prints => TypeError: Assignment to constant variable.

// 5. Hoisting // 
        /**
         * We can use our code before it has been declared and/or initialized in Javascript.
         * This is because of a mechanism called hoisting, which is when variables and function 
         * declarations are pulled to the top of their current scope before code execution. 
         * 
         */

