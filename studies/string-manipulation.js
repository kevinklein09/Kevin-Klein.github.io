/** STRING MANIPULATION
 * 
 * 0: In Javascript, strings are used to store data in the form of text. Strings are made up
 * of a sequence of characters that are surrounded by single or double quotes. There are a few
 * ways to manipulate a string:
 * 1: It is possible to achieve string manipulation with string operators. 
 * 2: It is possible to achieve string manipulation with string methods. 
 */

// 1. String Operators
    /** Simply put, a string operator is an operator that operates on a string. Javascript supports
     * two operators that can modify a string, which allow us to easily join one string to another:
     */
        /** CONCATENATE OPERATOR
         * The concatenate operator is a plus sign (+). It allows us to add the contents of two or 
         * more strings together to create one larger string. Here's an example:
         */

        let str1 = 'Hello';
        let str2 = 'World!';
        let newStr = str1 + " " + str2; // we must add a space in between str1 and str2
        console.log(newStr); // prints => 'Hello World!'

        /** CONCATENATE ASSIGNMENT OPERATOR
         * The concatenate assignment operator allows us to easily append a string to the end of another 
         * string. This can be useful when it is necessary to add a string onto a string contained within 
         * a variable. Here's an example:
         */

         let str3 = 'Kevin';
         str3 += ' Klein';
         console.log(str3); // prints => 'Kevin Klein'