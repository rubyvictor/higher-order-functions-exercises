// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  // Arrow function:
  const isElementEven = element => element % 2 === 0;
  return input.every(isElementEven);
  //or as a function:
  // const isElementEven = function(element) {
  //   return element % 2 === 0;
  // }
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.


function positiveMatrix(input) {
  // nested arrow function
  // return input.every(row => row.every(element => element > 0));
  // or function:
  const isPositiveRow = function (row){
    return row.every(element => element > 0);
  }
  return input.every(isPositiveRow);
//Another approach:
// function isPositiveElement (element){
//   return element > 0;
// }
// function isPositiveRow (row){
//   return row.every(isPositiveElement);
// }

// function positiveMatrix(inputMatrix){
//   return inputMatrix.every(isPositiveRow);
// }

}

module.exports = {
  allEven,
  positiveMatrix
};
