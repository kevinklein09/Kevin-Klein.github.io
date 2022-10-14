// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { result } = require("lodash");


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

var _ = {}; // declaring a variable _ and assigning it an empty object // _ = {};

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity = function(value) { //create a function _.identity that takes one input, value
    return value; //return value unchanged
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) { //create a function _.typeOf that takes one input, value
    if(Array.isArray(value) === true) { //create an if statement to determine if the value is an array
        return "array"; //return array
    } else if(Array.isArray(value) !== true && value === null) { //create an else/if statement to determine if the value is not an array AND is equal to null
        return "null"; //return null
    }

    return typeof value; //return datatype type of value as a defult
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num) { //create a function expression _.first that takes in two inputs, arr and num
    if(Array.isArray(arr) === false || num < 0) { //determine if input arr is not an array OR input num is less than 0
        return [];//return array literal []
    }
    if(isNaN(num) === true) { //determine if num is non a num, using NaN method
        return arr[0]; //return arr at 0 index
    }
    if(num > arr.length) { //determine if num is greater than the length of arr
        return arr; //return arr
    }
    return arr.splice(0, num); //return the first amount of the integer value num in the array by using the .splice method
}




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num) { //create function expression _.last that takes two inputs, arr and num
    if(Array.isArray(arr) === false || num < 0) { //determine if input arr is not an array OR input num is less than 0
        return []; //return array literal []
    }  
    if(isNaN(num) === true) { //determine if num is non a num, using NaN method
        return arr[arr.length - 1]; //return last element in array
    }
    if(num > arr.length) { //determine is num is greater than array length
        return arr; //return arr
    }
    return arr.slice(-num); //return arr using .splice and turning the input num into a positive integer
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, val) { //create .indexOf function expression that takes in two inputs, arr and val
    for(var i = 0; i < arr.length; i++) {  //iterate through arr with for loop
        if(val === arr[i]) { //determine if val is strictly equal to each iteration of arr 
            return i; //return index of array
        }
    }
    return -1; //return -1 if balue is not in array
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, val) { //create function expression _.contains that takes in two inputs, arr and val
    return arr.includes(val) ? true : false; //use ternary operator to determine if arr includes val, if so return true, if not return false
}



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) { //create a function expression _.each that takes the inputs collection and func
    if(Array.isArray(collection)) { //determine if collection is array by using Array.isArray method
        for(let i = 0; i < collection.length; i++) { //iterate through collection using for loop
            func(collection[i], i, collection); //call func once for each property, passing in the arguments collection[i], i, and collection
        }
    } else { // else it's an object

        for(let key in collection) { //iterate through keys in collection with a for/in loop
            func(collection[key], key, collection); //call the input func on each property
        }
    }
    
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr) { //create a function expression _.unique that takes in one input, array
    var newArray = []; //create a new variable newArray and assign it to an array literal
    for(var i = 0; i < arr.length; i++) { //iterate through array with for loop
        var indexNum = _.indexOf(arr, arr[i]); //create a new variable indexNum and assign it to the value of function call _.indexOf passing in the arguments arr and arr[i]
        if(indexNum === i) { //determine if indexNum is strictly equal to the index of the current iteration
            newArray.push(arr[i]); //push the current iteration of input arr into newArray
        }
    } 
    return newArray; //return newArray
}



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(arr, func) { //create function expression _.filter that takes two inputs, arr and func
    var newArray = []; //create a variable newArray and assign its value to an array literal
    for(var i = 0; i < arr.length; i++){ //iterate through arr
        if(func(arr[i], i, arr) === true) { //determine if the test function, with the arguments arr[i], i, and arr are strictly equal to true
            newArray.push(arr[i]); //push the current iteration of input arr into newArray
        }
    } 
    return newArray; //return newArray
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func) { //create a function expression _.reject that takes in two inputs, arr and func
    var newArray = []; //create a variable newArray and assign it to an array literal
    for(var i = 0; i < arr.length; i++){ //iterate through arr
        if(func(arr[i], i, arr) === false) { //determine if the test function, passing in the arguments arr[i], i, and arr are strictly equal to false
            newArray.push(arr[i]); //push the current iteration of input arr into newArray
        }
    } 
    return newArray; //return newArray
}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func) { //create function expression _.partition that takes in two inputs, arr and func
    var newArray = []; //create new variable newArray and assign it to an array literal
    var falseArray = []; //create new variable falseArray and assign it to an array literal
    var trueArray = []; //create a new variable trueArray and assign it to an array literal
    for(var i = 0; i < arr.length; i++) { //use for loop to iterate through arr
        if(func(arr[i], i, arr) === true) { //determine if test func with the arguments arr[i], i, and arr are striclty equal to true
            trueArray.push(arr[i]); //if true, push current iteration of arr into trueArray
        } else { //else
            falseArray.push(arr[i]); //push current iteration of arr into falseArray
        }
    }
    newArray.push(trueArray); //push trueArray into newArray
    newArray.push(falseArray); //push falseArray into newArray

    return newArray; //return newArray

}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){ //create function expression _.map that takes in two inputs, collection and func
    var newArray = []; //create new variable newArray and assign it to an array literal
    if(Array.isArray(collection) === true) { //determine if collection is an array by using the Array.isArray method
        for(var i = 0; i < collection.length; i++) { //iterate through collection with for loop
            newArray.push(func(collection[i], i, collection)); //call function for each element in collection passing in the arguments collection[i]
        }
    } else { //else it's an object
        for(var key in collection) { //iterate through the keys in collection with a for/in loop
            newArray.push(func(collection[key], key, collection)); //push the return value of each function call into newArray
        }
    }
    return newArray; //return newArray
}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, property) { //create a function _.pluck that takes in two inputs, arr and key
    return _.map(arr, function(e) {return e[property]}) //return an array containing the value of propery for every element in array using the _.map function
 
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func) {

    //determine if func is not provided
    if(func === undefined) {
        //determine if collection is an array
        if(Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
                if(!collection[i]) { //determines if collection[i] is a falsey datatype
                    return false;
                }
            }
        } else {
            for(let key in collection) {
                if(!collection[key]) {
                    return false;
                }
            }
        }
        //else its an object
    } else { // else func was provided
        //determine if collection is an array
        if(Array.isArray(collection)) {
            //iterate through collection
            for(let i = 0; i < collection.length; i++) {
                //what am I determining?
                if(func(collection[i], i, collection) === false) {
                    return false;
                }
            }
        } else { //else object
            //iterate through object 
            for(let key in collection) {
                if (func(collection[key], key, collection) === false) {
                    return false;
                }
            }
        }
        
    }
    return true;


}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    //determine if func is not provided
    if(func === undefined) {
        //determine if collection is an array
        if(Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
                if(!collection[i]) { //determines if collection[i] is a falsey datatype
                    return false;
                }
            }
        } else {
            for(let key in collection) {
                if(!collection[key]) {
                    return false;
                }
            }
        }
        return true;
        //else its an object
    } else { // else func was provided
        //determine if collection is an array
        if(Array.isArray(collection)) {
            //iterate through collection
            for(let i = 0; i < collection.length; i++) {
                //determine if the function is equal to
                if(func(collection[i], i, collection) === true) {
                    return true;
                }
            }
        } else { //else object
            //iterate through object 
            for(let key in collection) {
                if (func(collection[key], key, collection) === false) {
                    return true;
                }
            }
        }
        
    }
    return false;

}



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    let result; // create result variable
    //determine if seed didn't receive a value
    if(seed === undefined) { //if not passed in
        result = array[0]; //assign the value of result to the input array at index 0
        for(let i = 1; i < array.length; i++){ //iterate through array starting at 1 index
            result = func(result, array[i], i, array); //assign the value of result to the input test function, passing in the arguments of the previous result, each iteration of array, the inde
        }
    } else { //create an else statement
        result = seed; //assign the value of result to seed
        for(let i = 0; i < array.length; i++) {
            //reassign result to the result of invoking callback function
            result = func(result, array[i], i, array);
        }
    }
    return result; //return result
}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, object2, ...objects) { //create a function expression _.extend that takes three inputs, object1, object2, ...objects
    Object.assign(object1, object2, ...objects)  //use the Object.assign() method to assign the properties of object2 and ...objects to object1

    return object1; //return object1
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
