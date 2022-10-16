// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

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
    return males.length;
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
    return numFemales;
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
    return _.reduce(array, function(pre, curr){ //return the value of invoking _.reduce function with the inputs array and an anonymous function with the inputs pre(result) and curr (current element in object)
        if(curr.age > oldest) { //determine if age in current element in object is greater than oldest
            oldest = curr.age; // if true, reassign oldest to the value of the 
            pre = curr.name;
        }
        return pre;
    }, '');
}


var youngestCustomer= function(array){
    let youngest = 1000;
    return _.reduce(array, function(pre, curr){
        if(curr.age < youngest) {
            youngest = curr.age;
            pre = curr.name;
        }
        return pre;
    }, '');
};


var averageBalance = function(array){
    return _.reduce(array, function(aBalance, obj, i, array){
        aBalance += obj.balance.replace(/[$,]/g, "") / array.length;
        return aBalance;
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


var topThreeTags = function(array);
    return function pluck(array, property) {
        return _.map(arr, function(obj) {
            let count = 0;
            for(let i = 0; i < obj.tags.length; i++) {

            }
        })
    }


var genderCount;

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
