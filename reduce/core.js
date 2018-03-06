function sum(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

//matrix
function productAll(array) {
  var result = array
    .reduce((accumulator, current) => accumulator.concat(current))
    .reduce((a, b) => a * b);
}

function luckyNumbers(array) {
  return array.filter(element => element.match(/\d+/g));
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
