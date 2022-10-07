//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var newArray = [];
    for (var key in object) {
        newArray.push(object[key])
    }
    return newArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var newString = "";
    for(var key in object) {
        newString += key + " ";
    }
    var result = newString.slice(0, -1);
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var newString = "";
    for(var key in object) {
     if(typeof object[key] === "string") {
         newString += object[key] + " ";
     }
     var result = newString.slice(0, -1);
    } 
    return result;
 }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
        if(Array.isArray(collection)) {
            return "array";
        } else {
            return 'object';
        }
    }


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var firstChar = string.charAt(0).toUpperCase();
    string = string.slice(1, string.length);
    return firstChar + string;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var myArray = string.split(" ");
    var myString = "";
    for(var i = 0; i < myArray.length; i++) {
        var finalWord = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1, myArray[i].length);
        
        myString += " " + finalWord;

    }
    var result = myString.slice(1, myString.length);
    return result;
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