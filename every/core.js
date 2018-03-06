// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  const isElementEven = element => element % 2 === 0;
  return input.every(isElementEven);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function isArrayPositive(element, index, array) {
  return element > 0;
}

function positiveMatrix(input) {
  return input.every(isArrayPositive);
}

module.exports = {
  allEven,
  positiveMatrix
};
