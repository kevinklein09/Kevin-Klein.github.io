// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base
  if(n === 0){ //determine if n is strictly equal to 0
    return 1; //return 1
  } else if(n < 0){ //else if n is less than 0
    return null; //return null
  }
  //recursion
  return n * factorial(n - 1); // return n multiplied by the recursion invocation of factorial function but with n - 1  as an input
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base
  if(array.length === 1){ //base case if statement that determines if the length of array is strictly equal to 1
    return array[0]; // return array value at index 0
  } else if(array.length === 0){ //second base case if statement to determine if array is empty
    return 0; //return 0
  }
  return array[0] + sum(array.slice(1)); //return the sum by adding the value of the array at index 0 to each recursive array at index 0 by invoking the sum function and using.slice()
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

};

// 4. Check if a number is even.
var isEven = function(n) {
  //base 
  if(n === 1){ // determine if n is strictly equal to 1
    return false; //return false
  } else if(n === 0){ //determine if n is strictly equal to 0
    return true; //return true
  } else if(n < 0){ //determine if n is a negative number
    return isEven(-n); // return isEven but with the input -n to return a positive number as the original invocation input
  } 
  //recursion
  return isEven(n - 2); //return isEven with the input n - 2 to boil down to either of the first two base cases
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){ //determine if n is 0
    return n; //return n
  } else if(n < 0){ //determine if n is a negative number
    return n + 1 + sumBelow(n + 1); // return n plus 1 plus recursive invocation of sumBelow with n + 1 as an input
  }
  return n - 1 + sumBelow(n - 1); //return n minus 1 plus recursive invocation of sumBelow with n - 1 as an input
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {  //create a function range with the inputs x, y, and output equal to an array literal
  if(x === y){ //determine if x is strictly equal to y
    return output; //return output
  } else if(x === y - 1 || x === y + 1){ //else determine if x is strictly equal to y minus 1 OR x is strictly equal to y plus 1 to see if the input numbers are the next number up or down from each other
    return output; //return output
  }
  if(x > y){ //determine if x is greater than y
    var num = x - 1; // create variable num and assign it to the value of x minus 1
  }
  if(x < y){ //determine if x is greater than y
    var num = x + 1; //create variable num and assign it to the value of x plus 1
  }
  output.push(num); //push num to output
  return output.concat(range(num, y)); //return output concacted with recursively calling range with the inputs num and y
}

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) { //create function exponenent with the inputs base and exp
  if(exp === 0){ //determine if exp is strictly equal to 0
    return 1; //return 1
  } else if(exp === 1){ //else determine if exp is strcitly equal to 1
    return base; //return base
  } else if(exp < 0){ //else determine if exp is less than 0
    return 1 / (exponent(base, exp * -1)); //return 1 divided by recursively calling exponent with the inputs base and exp mulitiplied by negative 1
  }
  return base * exponent(base, exp - 1); //return base multiplied by recursively calling exponent with the inputs base and exp minus 1
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) { //create a function powerOfTwo with the input n
  if(n === 1){ //determine if n is strictly equal to 1
    return true; //return true
  }
  if(n === 0){ //determine if n is strictly equal to 0
    return false; //determine false
  }
  return powerOfTwo(n / 2); //return recusive call of powerOfTwo with the input n divided by 2
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) { // create a function reverse with the input string
  if(string.length === 0){ //determine if length of string is strictly eqaul to 0
    return string; //return string
  }
  return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1)); //return the last character of string plus the recursive invocation of reverse with a substring 
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) { //create a function palindrome that takes in one input, string
  let noSpaceOrCapital = string.replace(/\s/g, "").toLowerCase(); //create variable noSpaceOrCapital to an updated value of string without any spaces or capital letters, using .replaceAll and regex, uncapitalized
  if(string.length === 1){ //determine if length of string is equal to 1
    return true; //return true
  } else if(noSpaceOrCapital[0] === noSpaceOrCapital.slice(-1)){ //else determine if the character in noSpaceOrCapital at index 0 is strictly equal to the last character in noSpaceOrCapital
    return palindrome(noSpaceOrCapital.slice(1, -1)); //return recursive call of palindrome with input noSpaceOrCapital with first and last characters sliced off
  }
  return false; //return false
}


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) { //create function multiply with two inputs x and y
  if(y === 0){ //determine if y is strictly equal to 0
    return 0; //return 0
  } else if(y > 0){ //else determine if y is less than 0
    return (x + multiply(x, y - 1)) //return x plus recursive call of multiply with inputs x and y minus 1
  } else if(y < 0){ //else determine if y is less than 0
    return -multiply(x, -y); //return negative invocation of mutliply with inputs x and negative y
  }
}


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) { //create function compareStr with two inputs str1 and str2
  if(str1.length === 0 && str2.length === 0){ //determine if length of str1 AND str2 is strictly equal to 0 
    return true; //return true
  }
  if(str1[0] !== str2[0]){ //determine if character at index 0 in str1 is not equal to character at index 0 in str2
    return false; //return false
  }
  if(str1[0] === str2[0]){ //determine if character at index 0 of str1 is strictly equal to character at index 0 of str2
    return compareStr(str1.slice(1), str2.slice(1)); //return recursive call of compareStr with inputs str1 sliced at the 1 index and str2 sliced at the 1 index
  } 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){ //create function createArray that takes inputs str and output assign to an array literal
  if(str.length === 0){ //determine if length of str is strictly equal to 0
    return output; //return output
  }
  output = createArray(str.slice(1)); //assign value of output to recursive call of createArray with input str sliced at 1 index
  output.unshift(str[0]); //add character at index 0 of str to the beginning of output array
  return output; //return output
};


// 17. Reverse the order of an array
var reverseArr = function (array, output=[]) { //create function reverseArr that takes in two inputs, array and output assigned to an array literal
  if(array.length === 0){ //determine if length of array is strictly equal to 0
    return output; //return output
  }
  output = reverseArr(array.slice(1)); //assign value of output to recursive call of reverseArr with input array sliced at 1 index
  output.push(array[0]); //push array at index 0 into output
  return output; //return output
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) { //create function buildList that takes in inputs value, length, and output assigned to an array literal
  if(length === 0){ //determine if length is strictly equal to 0
    return output; //return output
  }
  output = buildList(value, length - 1); //assign value of output to recursive call of buildList with inputs value and length minus 1
  output.push(value); //push value into output
  return output; //return output
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) { //create function countOccurence that takes in inputs array, value and count assigned to 0
  if(array.length === 0){ //determine if length of array is strictly equal to 0
    return count; //return count
  }
  if(array[0] === value){ //determine if item at 0 index of array is equal to value
    count++; //increment count by one
  }
  return countOccurrence(array.slice(1), value, count); //return recursive call of countOccurence with inputs array sliced at 1 index, value, and count

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  if(array.length <= 0){
    return output;
  } 
  output = rMap(array.slice(1), callback);
  output.unshift(callback(array[0]));
  return output;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base
  if(n < 0){
    return null;
  }
  if(n < 2){
    return n;
  }
  //recursion
  return nthFibo(n-1) + nthFibo(n-2); 
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  //base
  if(input.length === 0){
    return output;
  }
  //recursion
  output = capitalizeWords(input.slice(0, -1));
  output.push(input.slice(input.length - 1)[0].toUpperCase());
  return output;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  //base
  if(array.length === 0){
    return output;
  }
  //recursion
  output = capitalizeFirst(array.slice(1, array.length));
  output.unshift(array[0][0].toUpperCase() + array[0].substring(1));
  return output;
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
// var nestedEvenSum = function(obj, sum=0) {
//   for(var key in obj){
//     if(obj[key] % 2 === 0){
//       sum += obj[key];
//     }
//   }
// };

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  if(str.length === 0){
    return obj;
  }
  letterTally(str.substring(1), obj);
  if(obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]] += 1;
  }
  return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

var compress = function(list, output=[]) {
  if(list.length === 0){
    return output;
  }
  output = compress(list.slice(1));
  if(list[0] !== output[0]){
    output.unshift(list[0]);
  }
  return output;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, output=[]) {
  if(array.length === 0){
    return output;
  }
  output = augmentElements(array.slice(1), aug);
  array[0].push(aug);
  output.unshift(array[0]);
  return output;
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output=[]) {
  if(array.length === 0){
    return output;
  }
  output = minimizeZeroes(array.slice(1));
  if(array[0] === 0 ^ output[0] === 0 || array[0] !== 0) {
    output.unshift(array[0]);
  }
  return output;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[]) {
  if(array.length === 0) {
    return output;
  }
  output = alternateSign(array.slice(0, array.length - 1));
  var arrLength = array.length;
  if(arrLength % 2 === 0) {
    if(array[arrLength - 1] > 0) {
      array[arrLength - 1] = -array[arrLength - 1];
    }
  } else {
    if(array[arrLength - 1] < 0) {
      array[arrLength - 1] = -array[arrLength - 1];
    }
  }
  output.push(array[arrLength - 1]);
  return output;
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if(str.length === 0){
    return '';
  }
  var newStr = numToText(str.substring(0, str.length - 1));
  var replace;
  if(str[str.length - 1] === '1'){
    replace = 'one';
  } else if(str[str.length - 1] === '2'){
    replace = 'two';
  } else if(str[str.length - 1] === '3'){
    replace = 'three';
  } else if(str[str.length - 1] === '4'){
    replace = 'four';
  } else if(str[str.length - 1] === '5'){
    replace = 'five';
  } else if(str[str.length - 1] === '6'){
    replace = 'six';
  } else if(str[str.length - 1] === '7'){
    replace = 'seven';
  } else if(str[str.length - 1] === '8'){
    replace = 'eight';
  } else if(str[str.length - 1] === '9'){
    replace = 'nine';
  } else {
    replace = str[str.length - 1];
  }
  return newStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
