
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) { //create a function triangles that has one input, number
  //create a for loop that starts at a single hashtag, stops at the given input number, and increments one hashtag at each iteration
  for(var triangleLoop = "#"; triangleLoop.length <= number; triangleLoop += "#") {
    console.log(triangleLoop); //log triangleLoop to console to get a triangle of hashtags 
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() { //create a function fizzBuzz
  for(var i = 1; i <= 15; i++) { //create a for loop to increment numbers 1-15
    if(i % 3 === 0 && i % 5 === 0) { //create an if statement to determine if the index i is divisible by 3 AND 5 both
      console.log("fizzbuzz"); //if true, log 'fizzbuzz' to the console
    } else if(i % 3 === 0) { //create else if statement to determine if the index i is divisible by 3
      console.log("fizz"); //if true, log 'fizz' to the console
    } else if(i % 5 === 0) { //create else if statement to determine if the index i is divisible by 5
      console.log("buzz"); //if true, log 'buzz' to the console
    } else { //create else statement
      console.log(i); //log i to console as default
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) { //create a function drawwChessBoard that takes one input, number
  var board = ""; //create a variable board and assign its value to an empty string to store the result
  for(var y = 0; y < number; y++) { //create a for loop that iterates through input number to create the rows of the board
    for(var x = 0; x < number; x++) { //create a for loop that iterates through number to create the columns of the board
      if ((y + x) % 2 === 0) { //create an if statement that determines if the sum of y + x is divisible by 2. Every other number will be divisible by 2
        board += " "; //if true, a single space is added to board
      } else { //create an else statement
        board += "#"; 
      }
    }
    board += "\n";
  }
  return board;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
