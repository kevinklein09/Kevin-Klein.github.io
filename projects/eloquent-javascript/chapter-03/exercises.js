////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) { //create a function min that takes in two inputs, num1 and num2
  if(num1 < num2) { //create an if statement that determines if num1 is less than num2
    return num1; //if true, return num1
  } else { //create an else statement
    return num2; //else return num2
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if(num === 0) {
    return true;
  } else if(num === 1) {
    return false;
  } else if(num < 0) {
    return(isEven(-num))
  } else {
    return(isEven(num -2));
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) { //create a function countChars that takes two input, string and char
  var count = 0; //create var count with a value of 0. This will keep count of the amount of "B"s in the input string
  for(var i = 0; i < string.length - 1; i++) { //create a for loop to iterate through the string
    if(string.charAt(i) === char) { //create an if statement to determine if the iteration of of the string at each character, using .charAt(), is strictly equal to the input char
      count++; // if true, increment count by 1
    }
  }
  return count; //return count
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) { //create a function countBs that takes an input, string
  var count = 0; //create var count with a value of 0. This will keep count of the amount of "B"s in the input string
  for(var i = 0; i < string.length - 1; i++) { //create a for loop to iterate through the string
    if(string[i] === "B") { //create an if statement to determine if the iteration of of the string is strictly equal to "B"
      count++; // increment count by one
    }
  }
  return count; //return count
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
