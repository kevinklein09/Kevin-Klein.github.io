////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let rangeArray = [];
  if(step > 0){
    for(var i =start; i <= end; i+= step){
      rangeArray.push(i);
    }
  } else if(step < 0){
    for(var i = start; i >= end; i += step){
      rangeArray.push(i);
    }
  } else if(start === end){
    return rangeArray;
  } else {
    for(var i = start; i <= end; i++){
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  if(array.length === 0){
    return 0;
  }
  return array[0] + sum(array.slice(1));
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {
  
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




function arrayToList(array) {
  let rest = null;

  for(let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest};
  }

  return rest;
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

function listToArray(list, output=[]) {
  //base
  if(list.rest === null){
    output.push(list.value);
    return output;
  }
  //recursion
    //add current value property to output
    output.push(list.value); // [1]
    return listToArray(list.rest, output)
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

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x AND y are both NOT OBJECTS
  if(typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
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
