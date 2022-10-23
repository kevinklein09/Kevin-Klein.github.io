// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const object = require('underbar/object');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./Kevin-Klein.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // implement _.filter() to return array of only male customers
    let males = _.filter(array, function(customer, index, array){
        //return true if the input customer is male
        return customer.gender === 'male';
    }); // => [<male>, <male>, <male>]
    return males.length; //return the length of males array
};

var femaleCount = function(array){
    //implement _.reduce() to return number of female customers
    let numFemales = _.reduce(array, function(acc, current, index, array){
        //acc = 0 | current = { name: 'Stephanie', gender: 'female'}

        //interact with the current customer object to keep track of the number
        //of female customer

        //determine if customer is female
        if(current.gender === 'female') {
            acc += 1; // acc = acc + 1
        }
        return acc; // returns 1 
    }, 0);
    return numFemales; //return numFemales
};

/*
// invoke reduce()
    //seed or no seed => result = 0

    //for loop
        //0
            //result = func(0, {customer}, 0, [...])


*/

var oldestCustomer = function(array){
    let oldest = 0; //create a variable oldest and assign it the value 0
    return _.reduce(array, function(pre, curr){ //return the value of invoking _.reduce function with the inputs array, a callback function with the inputs pre(result) and curr (current element in object), and a sseed of a string literal
        if(curr.age > oldest) { //determine if age in current element in object is greater than oldest
            oldest = curr.age; // if true, reassign oldest to the value of the current customer element's property age value
            pre = curr.name; // assign pre to the value of the current customer element's property name value
        }
        return pre; //return pre to get the name of the oldest customer
    }, '');
}


var youngestCustomer= function(array){
    let youngest = 1000; // create variable youngest and set it to a impossibly high number for the age of a person, like 1000
    return _.reduce(array, function(pre, curr){ //return the value of invoking _.reduce function with the inputs array, a callback function with the inputs pre and curr, and a seed of of a string literal
        if(curr.age < youngest) { //determine if the value of the age property at the current iteration of the object is less than youngest
            youngest = curr.age; // assign youngest to the value of the age property 
            pre = curr.name; //assign pre to the value of the name property 
        }
        return pre; //return pre
    }, '');
};


var averageBalance = function(array){
    return _.reduce(array, function(aBalance, obj, i, array){ // return the value of invoking _.reduce  with the inputs array, a callback function with the inputs aBalance, obj, i, and array, and a seed of 0
        aBalance += obj.balance.replace(/[$,]/g, "") / array.length; // assign aBalance to the value of itself plus the value of the current obj's balance property, using the replace method and regex to eliminate all dollar signs and commas 
        return aBalance; //return aBalance
    }, 0);
};

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(result, obj, i, array){  // return the value of invoking reduce with the inputs array, a callback function  with the inputs results, obj, i, and array, and a seed of 0
        if(letter.toUpperCase() === obj.name[0].toUpperCase()) { //determine if input letter uppercased is strictly equal to the character at index zero of the obj property name value
          result++; // increment result by 1
        };
      return result; // return result
    }, 0);
};


var friendFirstLetterCount = function(array, customer, letter) { //create a function friendFirstLetterCount that takes in three inputs, array, customer, and letter
    return _.reduce(array, function(result, obj, i, array){ // return the value of invoking  _.reduce with the inputs result, obj, i, and array
        if(obj.name === customer) { // determine if obj name property is strictly equal to the input customer
            for(let i = 0; i < obj.friends.length; i++) { //iterate through the friends property array in current obj element
                if(letter.toUpperCase() === obj.friends[i].name[0].toUpperCase()) { //determine if input letter uppercased is strictly equal to each iteration of the friends proeprty array at the character of index 0, uppercased
                    result++; //increment result by 1
                }
            }
        }
        return result; //return result
    }, 0);
};

var friendsCount = function(array, name) {
    return _.reduce(array, function(result, obj, i, array){ // return the value of invoking _.reduce with the inputs array, a callback function with the inputs result, obj, i, and array, and a seed of an array literal
        for(let i = 0; i < obj.friends.length; i++) { //iterate through the property friends array in current obj element
            if(name === obj.friends[i].name) { // determine if input name is strictly equal to the name of the current iteration of property friends array in current obj element
                result.push(obj.name); // push the value of the object name property into result
            }
        }
        return result; //return result
    }, [])
}


var topThreeTags = function(array){
    let map = {}; //create variable map and assign it to an object literal
    _.each(array, function(obj){ //invoke _.each with the inputs array and a callback function with the input obj
      _.each(obj.tags, function(tag){ //invoke _.each with the inputs obj,tags and a callback function with the input tag
        map[tag] = (map[tag] || 0) + 1; // create a key tag in map object and assign it to the value of the key tag in map OR 0 plus 1
      })
    });
    let topArray = _.map(Object.keys(map), obj => [obj, map[obj]]).sort((a, b) => a[1] - b[1]); //create a variable topArray and assign it the value of invoking  _.map with the inputs of Object.keys(map) and a callback function that takes in the input obj. The callback function sorts the keys in obj in order
    let output = topArray.slice(-3); // create variable output and assign it to the value of topArray sliced
    for(let i = 0; i < output.length; i++) { //iterate through output
      output[i].pop(); // pop off the current iteration of output
    }
    let newArray = []; //create variable newArray
    newArray = newArray.concat(output[0], output[1], output[2]); //assign newArray the value of concating the first three items of output
    return newArray; //return newArray
  };

//     return function pluck(array, property) {
//         return _.map(arr, function(obj) {
//             let count = 0;
//             for(let i = 0; i < obj.tags.length; i++) {

//             }
//         })
//     }
// }



var genderCount = function(array){
    return _.reduce(array, function(object, obj, i, array){ //return the value of invoking reduce with the input array and a callback function with the inputs object, obj, i, and array, and a seed of an object literal
        let females = _.filter(array, function(customer, index, array){ //create variable females and assign it to the value of invoking _.filter with the inputs array and a callback function with the inputs customer, index, and array
            return customer.gender === 'female'; //return a filtered array, females, if customer property gender is strictly equal to 'female'
        });
        object.female = females.length; //create a female key in the result object and assign it to the length of females

        let males = _.filter(array, function(customer, index, array){ //create variable males and assign it to the value of invoking _.filter with the inputs array and a callback function with the inputs customer, index, and array
            return customer.gender === 'male'; //return a filtered array, males, if customer property gender is strictly equal to 'male'
        });
        object.male = males.length; // create a male key in the result object and assign it to the length of males

        let nonBinary = _.filter(array, function(customer, index, array){ //create variable nonBinary and assign it to the value of invoking _.filter with the inputs array and a callback function with the inputs customer, index, and array
            return customer.gender === 'non-binary'; //return a filtered array, nonBinary, if customer property gender is strictly equal to 'non-binary'
        });
        object['non-binary'] = nonBinary.length; //create a non-binary key in the result object and assign it to the length of nonBinary

        return object; //return object
    }, {});

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
