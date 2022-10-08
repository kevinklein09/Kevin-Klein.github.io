/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; //create a variable named animal and assign it to an empty object
animal.species = "dog"; //using dot notation, add a property named species with a value to the animal object
animal["name"] = "Trunks"; //using bracket notation, add a property named name with a value 
animal.noises = []; // using dot notation, create a property noises with a value of an empty array
console.log(animal); //print the animal object to the console



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; //create a variable named noises and assign it to an empty array
noises[0] = "woof"; //use bracket notation to add an element to noises array
noises.push("glurgle"); //use push method to add an element to noises array
noises.unshift("grrr"); //use unshift to add an element to noises array
noises[noises.length] = "ruff"; //use bracket notation and .length method to add an element to the end of noises
console.log(noises.length); //log the length of noises to the console
console.log(noises[noises.length - 1]); //log the last element in noises to the console
console.log(noises); //log noises to the console
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises; //assign the noises property on animal to the new noises array
animal.noises.push("floop"); //use .push to add a new noise to the end of the noises property on animal
console.log(animal); //log object animal to the console


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *With bracket and dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *With bracket notation, .shift(), .unshift(), .pop(), and .push()
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; //create a variable animals and assign it to an empty array
animals.push(animal); //push object animal to animals array
console.log(animals); //log animals to the console to check work
var duck = { //create a variable duck and assign it given data
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};


var cat = { //create another animal object
  species: 'cat', 
  name: 'Blorp', 
  noises: ['meow', 'honk', 'achoo'] 
};

var turtle = { //create another animal object
  species: 'turtle', 
  name: 'Jeffery', 
  noises: ['yuum', 'erf', 'kablam'] 
};
animals.push(duck, cat, turtle); //push the new duck, cat, and turtle objects to the animals array
console.log(animals, animals.length); //log animals and animals length to the console


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I chose an array for the list of friends because arrays are good for storing simple lists
var friends = []; //create a variable friends and assign it to an empty array
function getRandom(array) { //create a function named getRandom that takes an array as an input
  return randomIndex = Math.floor(Math.random() * array.length); //create and return a variable named randomIndex and assign it the value of a random index of the input array using Math.random and Math.floor
  
}
friends.push(animals[getRandom(animals)].name); //use the getRandom function to generate a random animal and add its name to the friends array by the .push method

console.log(friends); //log friends to the console

animals[0]["friends"] = friends; //use bracket notation to create a property on the duck object in the animals array and assign it to the new array friends

console.log(animals); //log animals to the console

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}