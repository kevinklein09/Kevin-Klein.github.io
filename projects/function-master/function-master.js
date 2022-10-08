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

function welcomeMessage(object) {
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + "!"; //return object.name capitalized at the first character inside of given string
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1, object.species.length);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if(object.hasOwnProperty("noises")) {
        if(object.noises.length === 0) {
            return "there are no noises";
        } else {
            return object.noises.join(" ");
        }
    } else {
        return "there are no noises";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var myArray = string.split(" ");
    for(var i = 0; i < string.length; i++) {
        if(myArray[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name); // pushes the name input into the object friends array
    return object; //return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.hasOwnProperty("friends")) {
        for(var i = 0; i < object.friends.length; i++) {
            if(object.friends[i] === name) {
                return true;
            } 
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function nonFriends(name, array) {
//     var newArray = [];
//     for(var i = 0; i < array.length; i++) {
//         for(var i = 0; i < newArray.length; i++) {
//             if(array[i] !== newArray[i]) {

//             }
//         }
//         if(array[i].name === name) {
//             newArray = array[i].friends;
//         }
//     }

// }


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

    object[key] = value;

        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var key in object) {
        for(var i = 0; i < array.length; i++) {
            if(key === array[i]) {
                delete object[key];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    for(var i = 0; i < array.length; i++) {
        for(var x = 0; x < array.length; x++) {
            if(array[i] === array[x]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
}

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