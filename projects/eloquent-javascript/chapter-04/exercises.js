////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) { //create a function range that takes in three inputs, start, end and step
  let rangeArray = []; // create a variable rangeArray assigned to an array literal
  if(step > 0){ //determine if step is a positive number
    for(let i =start; i <= end; i+= step){ //since step is positive, iterate upwards beginning with start and ending with end, incrementing by step at each iteration
      rangeArray.push(i); // push the index at each iteration into rangeArray
    }
  } else if(step < 0){ //determine if step is a negative number 
    for(let i = start; i >= end; i += step){ // since step is negative, iterate backwards beginning with end and ending the iteration with start, incrementing by step at each iteration
      rangeArray.push(i); //push the index at each iteration into rangeArray
    }
  } else if(start === end){ // else determine if start is strictly equal to end
    return rangeArray; //return rangeArray
  } else { // else step wasn't provided
    for(let i = start; i <= end; i++){ // iterate by starting with input start and ending with input end, incrementing by one at each iteration
      rangeArray.push(i); //push the index at each iteration into rangeArray
    }
  }
  return rangeArray; //return rangeArray
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) { //create a function sum that takes in one input, array
  //base
  if(array.length === 0){ //determine if the length of array is strictly equal to 0
    return 0; //return 0 
  }
  //recursion
  return array[0] + sum(array.slice(1)); // return array at index zero added to the value of recursively calling the sum function, slicing the input array at the 1 index
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let newArray = []; // create a variable newArray and assign it to an array literal
  for(let i = array.length - 1; i >= 0; i--){ //iterate through the array backwards
    newArray.push(array[i]); //push each iteration of array into newArray
  }
  return newArray; // return newArray
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let temp; //declare variable temp to temporarily hold the values of the array that we want to swap
  for(let i = 0; i < array.length / 2; i++) { //iterate through half of the array
    temp = array[i]; // assign the value of temp to the current iteration of array
    array[i] = array[array.length - 1 - i]; // assign the current iteration of array to the last item in array minus the current index
    array[array.length - 1 - i] = temp; // assign the last item of array minus the current index to the value of temp
  }
  return array; //return array
}
 
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




function arrayToList(array) {
  let rest = null; // create a variable rest and assign it to the value of null
  for(let i = array.length - 1; i >= 0; i--){ //iterate through array backwards, stopping at 0 and decrementing at every iteration
    rest = { value: array[i], rest: rest}; // assign rest to an object with a property of value assigned to the current iteration of array and a property rest assigned to the value of rest
  }

  return rest; //return rest
}


/*
// invoke arraytoList([1, 2, 3])
  //rest = null
  //for loop going backwards
    //2
      //rest = { value: 3, rest: null }
    //1
      // rest = { value: 2, rest: { value: 3, rest: null } }
    // 0
      // rest = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } }}
*/

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) { //create a function listToArray that takes in two inputs, list and output assigned to an array literal
  //base
  if(list.rest === null){ //determine if the list property rest is equal to null to determine if we have iterated to the innermost/last object
    output.push(list.value); // push the value of the list property value into output
    return output; //return output
  }
  //recursion
    //add current value property to output
    output.push(list.value); 
    return listToArray(list.rest, output) //recursively return listToArray with the inputs list.rest and output
}

console.log(listToArray(
  {
    value: 1,
    rest: {
      value: 2,
      rest: null
    }
  }
)) // => [1, 2]

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) { //create an array prepend takes the inputs element and list and creates a new list that adds the element to the front of the input list
  return { //return an object with a property key value assigned to the input element and a property key rest assigned to the input list
    value: element,
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) { //create a function nth which takes in the inputs list and number and returns the element at the given position in the list 
  return listToArray(list)[number]; // return the invocation of listToArray to return the element at the given number position in the list
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x AND y are both NOT OBJECTS
  if(typeof x !== 'object' && typeof y !== 'object'){
    return x === y; // return the boolean value of x strictly equals y 
  }
  //determine if EITHER x or y is not an object
  if(typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  // create arrays of each object's keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  // determine if xKeys and yKeys don't have the same length
  if(xKeys.length !== yKeys.length){
    return false;
  }
  //iterate through Xkeys to see if properties match
  for(let i = 0; i < xKeys.length; i++){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;
    }
  }
  return true;
}
// console.log(deepEqual(2, 2)); // => true
// console.log({ a: 1 } === {a: 1}); // usually is false - objects are unique - but we need to make a function that compares two objects to see if they are identical

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
