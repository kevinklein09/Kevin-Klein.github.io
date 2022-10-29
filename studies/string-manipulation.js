/** STRING MANIPULATION
 * 
 * 0: In Javascript, strings are used to store data in the form of text. Strings are made up
 * of a sequence of characters that are surrounded by single or double quotes. There are a few
 * ways to manipulate a string:
 * 1: It is possible to achieve string manipulation with string operators. 
 * 2: It is possible to achieve string manipulation with string methods. 
 */

// 1. String Operators
    /* Simply put, a string operator is an operator that operates on a string. Javascript supports
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

// 2. String Methods
    /* Javascript supports various methods to manipulate the value of a string. These methods have a variety
     * of uses and each changes the string differently. Here are some of the most common methods used for 
     * string manipulation:
     */

        /** CONCAT()
         * Similar to the concat operator, the concat() method is used to join more than one string together and
         * return a new string without changing the original string. Here's an example:
         */

        let str4 = 'Hello';
        let str5 = "World!";
        let str6 = str4.concat(' ', str5); // we must add a space in between str4 and str5
        console.log(str6); // prints => 'Hello World!'
        console.log(str4); // prints => 'Hello'

        /** INDEXOF()
         * The indexOf() method returns the position(index) of the first occurence of a value in a  string. If no 
         * match is found, -1 is returned. The indexOf() method is case sensitive. Here's an example:
         */

        let str7 = "Hello Kevin, welcome to Javscript!";
        let result = str7.indexOf('welcome');
        console.log(result); // prints => 13
        let result2 = str7.indexOf('kevin');
        consolelog(result2); // prints => -1

        /** LENGTH
         * The length method returns the length of a string. Here's an example:
         */

        let str8 = 'Hello';
        console.log(str8.length) // prints => 5

        /** SLICE
         * The slice() method will extract a portion of a string and return the extracted portion in a new string. The 
         * .slice() method takes in two parameters: start position and end position. While the start parameter is inclusive,
         * the end parameter is exclusive. Here's an example:
         */

        let str9 = "Kevin, Eva, Kelsey";
        let part = str9.slice(7, 10);
        console.log(part); // prints => 'Eva'

        // If the second parameter is omitted, the method will slice out the rest of the string:

        let part2 = str9.slice(7); 
        console.log(part2); // prints => 'Eva, Kelsey'

        // If a parameter is negative, the position is counted from the end of the string:

        let part3 = str9.slice(-6) // prints => 'Kelsey'

        /** REPLACE
         * The replace() method replaces a specified value with another value in a string. It will only replace the first match.
         * This method is case sensitive. Here's an example:
         */

        let str10 = 'I am 29 years old!';
        let myStr = str10.replace('years', 'days');
        console.log(myStr); // prints => 'I am 29 days old!'

        /* We can use a regular expression with an /i flag to make the replace() method case insensitive:
         */

        let myStr2 = str10.replace(/YEARS/i, 'days'); // prints => 'I am 29 days old!'

        /* We can use a regular expression with a /g flag to replace all matches:
         */
        let str11 = 'I am 29 years old, and she is 67 years old!';
        let myStr3 = str10.replace(/years/g, 'days'); // prints => 'I am 29 days old, and she is 67 days old!'

        /** REPLACE ALL
         * The replaceAll() method allows us to specify a regular expression instead of a string to be replaced. If the parameter is
         * a regular express
         * 
         * 
         * 
         */

