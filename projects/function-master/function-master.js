//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { //create a function objectValues that takes one input, object
    var newArray = []; //create a variable newArray and assign it to an empty array
    for(var key in object) { //create a for/in loop to iterate through the keys in the input, object
        newArray.push(object[key]) //push the object key values to the newArray array
    }
    return newArray; //return newArray
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { //create a function keysToString that takes one input, object
    var newString = ""; //create variable newString and assign it to an empty string
    for(var key in object) { //use a for/in loop to iterate through the keys in object
        newString += key + " "; //assign the key at each iteration to the empty string variable newString with a space in between
    }
    var result = newString.slice(0, -1); //create a new variable result to store the result and assign it the value of newString using the .slice method to delete the space at the end of newString
    return result; //return result
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { //create a function valuesToString that takes one input, object
    var newString = ""; //create variable newString and assign it to an empty string
    for(var key in object) { //use a for/in loop to iterate through the keys in object
     if(typeof object[key] === "string") { //create an if statement to determine if the data type of the key values in the input object is strictly equal to string (using typeof)
         newString += object[key] + " "; //if true, assign the key value at each iteration to the empty string variable newString with a space in between
     }
     var result = newString.slice(0, -1); //create a new variable result to store the result and assign it the value of newString using the .slice method to delete the space at the end of newString
    } 
    return result; //return result
 }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { //create a function arrayOrObject that takes one input, collection
        if(Array.isArray(collection)) { //create an if statement to determine if the input collection is an array by using the Array.isArray static method
            return "array"; //if true, return the string "array"
        } else { //create an else statement
            return 'object'; //else, return the string "object"
        }
    }


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { //create a function, capitalizeWord that takes one input, string
    var firstChar = string.charAt(0).toUpperCase(); //create a variable firstChar and assign it to the upper cased, using .toUpperCase() method, first character of the string, using the .charAt() method 
    var string = string.slice(1, string.length); //create a variable string and assign its value to a sliced version of the input string using the .slice method
    return firstChar + string; //return variable firstChar added to the sliced string variable
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { //create a function capitalizeAllWords that takes one input, string
    var myArray = string.split(" "); //create a variable myArray and assign it the value of an array comprised of all words in input string by using the .split method
    var myString = ""; //create a variable myString and assign it the value of an empty string
    for(var i = 0; i < myArray.length; i++) { //create a for loop to iterate through myArray
        var finalWord = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1, myArray[i].length); //create a variable finalWord and assign it the value of the uppercased first character of each iteration of myArray added to a sliced version of each iteration of myArray
        
        myString += " " + finalWord; //assign the value of myString to a space and finalWord

    }
    var result = myString.slice(1, myString.length); //create a variable result and assign its value to myString without the beginning space at the first character using the .slice method
    return result; //return result
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { //create a function welcomeMessage that takes one input, object
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + "!"; //return object.name capitalized at the first character inside of given string
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //return object.name capitalized at the first character and object.species capitalized at the first character outside of given string
    return object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1, object.species.length);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) { //create a function, maybeNoises with one input, object

    if(object.hasOwnProperty("noises")) { //create an if statement to determine if the object has the property "noises"
        if(object.noises.length === 0) { //create a nested if statement to determine if the length of object noises property is strictly equal to 0
            return "there are no noises"; //if nested if statement is true, return given string
        } else { //create else statement 
            return object.noises.join(" "); //return object property noises as a string separated by a space
        }
    } else { //create else statement
        return "there are no noises"; //return given string
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { //create a fuction hasWord that takes two inputs, string and word
    var myArray = string.split(" "); //create variable myArray and assign it the value of the string input as an array, using the .split method
    for(var i = 0; i < string.length; i++) { //create a for loop to iterate through the string
        if(myArray[i] === word) { //create an if statement to determine if each iteration of myArray is stricly equal to input word
            return true; //if true, return true
        }
    }
    return false; //return false as default
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) { //create a function addFriend that takes two inputs, name and object
    object.friends.push(name); // push the name input into the object friends array
    return object; //return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { //create a function isFriend that takes two inputs, name and object
    if(object.hasOwnProperty("friends")) { //create if statement to determine if object has a "friends" property
        for(var i = 0; i < object.friends.length; i++) { //create a for loop to iterate through the property "friends" on object
            if(object.friends[i] === name) { //create if statement to determine if each iteration of the friend property is strictly equal to name input
                return true; //if true, return true
            } 
        }
    }
    return false; //return false as default
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var newArray = [];
    var myArray = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i].name === name) {
            newArray = array[i].friends;
        }
    }
    for(var i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i].name) === -1 && array[i].name !== name) {
            myArray.push(array[i].name);
            }
        }

    return myArray;
    
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { //create a function updateObject that takes three inputs: object, key, and value

    object[key] = value; //update/create the property key on object by assigning it the value of input value

        return object; //return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { //create a function removeProperties that takes two inpute, object and array
    for(var key in object) { //create a for/in loop to iterate through the keys in object
        for(var i = 0; i < array.length; i++) { //create a for loop to iterate through input array
            if(key === array[i]) { //create if statement to determine if keys in object are strictly equal to each iteration of array 
                delete object[key]; //if true, delete the object key value
            }
        }
    }
    return object; //return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { // create a function that takes one input, array
    var seen = {}; //create a variable of an empty object
    var newArray = []; //create a variable of an empty array
    for(var i = 0; i < array.length; i++) { //create a for loop to iterate through the input array
      if(!(array[i] in seen)) { //create an if statement to determine if each iteration of the array is not in the seen object
        newArray.push(array[i]); //if true, push the iteration of array into newArray
        seen[array[i]] = true; // add a key of the array iteration to the seen object with bracket notation and assign its value to true
      }
    }
    return newArray; //return newArray
  }





//     for(var i = 0; i < array.length; i++) {
//         for(var x = 0; x < array.length; x++) {
//             if(array[i] === array[x]) {
//                 array.splice(i, 1);
//             }
//         }
//     }
//     return array;
// }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}