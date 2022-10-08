/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) {
    for(var i = 0; i < array.length; i++) { // create a for loop to iterate through array
        if(array[i].name === string) { // create an if statement to determine if the input string is stictly equal to the array name property in each iteration
            return array[i]; // return the object in the array if the if statement is true
        }

        }
        return null; // otherwise, return null
        
    }
    



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, object) {
    for(var i = 0; i < array.length; i++) { // create a for loop to iterate through the array
        if(array[i].name === string) { //create an if statement to determine if the input string is stictly equal to the array name property in each iteration 
            return array[i] = object; //if true, replace the object at the particular iteration with the input object
        }

        }
        return null; //Otherwise return null
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string) {
    for(var i = 0; i < array.length; i++) { // create a for loop to iterate through the array
        if(array[i].name === string) { //create an if statement to determine if the input string is stictly equal to the array name property in each iteration
            return array.splice(i, 1); // remove the 
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object) {
    if(object.name.length > 0 && object.species.length > 0) { //create an if statement to determine if the animal object has a name AND species property witha length greater than 0
        for(var i = 0; i < array.length; i++) { //create a for loop to iterate through the array
            if(array[i].name !== object.name) { //create an if statement to determine if the array contains the input object name already by using the strictly not equal operator
                return array.push(object); //if true, push the object into the array
            } else { //if false, return null
                return null; //otherwise return null
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
