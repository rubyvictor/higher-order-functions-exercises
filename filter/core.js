function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(word => word.includes(" ") === false);
}

function positiveRowsOnly(inputMatrix) {
  const positiveRow = function (row){
return row.every(element => element >= 0);
  };
  return inputMatrix.filter(positiveRow);
  // you should indent your code properly. otherwise, it makes it hard to read
}

// use ternary to return true or false
function truthyValuesOnly(array) {
  return array.filter(element => element ? true : false);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
