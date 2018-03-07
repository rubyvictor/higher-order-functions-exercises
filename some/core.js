// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(array) {
  return array.some(number => number > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(array) {
  return array.some(word => word.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.
function truePossibilities(inputMatrix) {
  const isTrue = function(row){
    return row.some(element => element === true);
  }
  return inputMatrix.some(isTrue);
  //OR arrow function:
  // return input.some(row => row.some(element => element === true));
}

// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa(phrase) {
  return phrase.some(word => word.includes("Lost"));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
