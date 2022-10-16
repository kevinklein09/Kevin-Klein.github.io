
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
  for(var i = 1; i <= 15; i++) { //create a for loop to iterate through numbers 1-15
    if(i % 3 === 0 && i % 5 === 0) { // determine if the index i is divisible by 3 AND 5 both
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
        board += "#"; // add a single hashtag to board
      }
    }
    board += "\n"; // add a break "\n" to board
  }
  console.log(board); //return board
}





//   let result = ''; //create an empty string result

//   let row = 1;
//   while (row <= number) { //loop to create the rows
//     let column = 1;
//     while (column <= number) { //loop to create the columns
//       if((column + row) % 2 === 0) { // if column plus row is even
//         result += ' '; // add an empty space
//       } else { // else, add a hashtag
//         result += '#'; // add a single hashtag to board
//       }
//       column += 1;
//     }
//     result += '\n'; // add a newline symbol to end current row
//     row += 1;
//   }
//   console.log(result);
// }


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
