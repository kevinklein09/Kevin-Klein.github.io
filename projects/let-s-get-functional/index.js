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
    return _.reduce(array, function(result, obj, i, array){ 
        if(letter.toUpperCase() === obj.name[0].toUpperCase()) {
          result++;
        };
      return result;
    }, 0);
};


var friendFirstLetterCount = function(array, customer, letter) {
    return _.reduce(array, function(result, obj, i, array){
        if(obj.name === customer) {
            for(let i = 0; i < obj.friends.length; i++) {
                if(letter.toUpperCase() === obj.friends[i].name[0].toUpperCase()) {
                    result++;
                }
            }
        }
        return result;
    }, 0);
};

var friendsCount = function(array, name) {
    return _.reduce(array, function(result, obj, i, array){
        for(let i = 0; i < obj.friends.length; i++) {
            if(name === obj.friends[i].name) {
                result.push(obj.name);
            }
        }
        return result;
    }, [])
}


var topThreeTags = function(array){
    let map = {}; //create variable map 
    _.each(array, function(obj){
      _.each(obj.tags, function(tag){
        map[tag] = (map[tag] || 0) + 1;
      })
    });
    let topArray = _.map(Object.keys(map), obj => [obj, map[obj]]).sort((a, b) => a[1] - b[1]);
    let output = topArray.slice(-3);
    for(let i = 0; i < output.length; i++) {
      output[i].pop();
    }
    let newArray = [];
    newArray = newArray.concat(output[0], output[1], output[2]);
    return newArray;
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
    return _.reduce(array, function(object, obj, i, array){
        let females = _.filter(array, function(customer, index, array){
            return customer.gender === 'female';
        });
        object.female = females.length;

        let males = _.filter(array, function(customer, index, array){
            return customer.gender === 'male';
        });
        object.male = males.length; 

        let nonBinary = _.filter(array, function(customer, index, array){
            return customer.gender === 'non-binary';
        });
        object['non-binary'] = nonBinary.length;

        return object;
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
