function sum(array) {
  // return array.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue
  // );

  //Better approach.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer, 0);
}

//matrix
function productAll(inputMatrix) {
  //Version 1
  const rowReducer = (accumulator, currentRow) => {
    return accumulator.concat(currentRow);
  };

  const getProductOfNumbers = (accumulator, currentNum) => {
    return accumulator * currentNum;
  };

  return inputMatrix.reduce(rowReducer, []).reduce(getProductOfNumbers, 1);
}

function luckyNumbers(array) {
  
  const reducer = (accumulator,currentValue) => {
return accumulator.join(",");
  };
  return array.reduce(reducer,'Your luck numbers are:');
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
