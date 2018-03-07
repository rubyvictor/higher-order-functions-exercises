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
  var str = "Your lucky numbers are: ";

  const reducer = (a,b) => {
return a + b + ", ";
  };

  return array.reduce(reducer,str).trim().slice(0,-1) +'.';
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
