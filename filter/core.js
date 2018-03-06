function onlyEven(array) {
  return array.filter(element => element % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(element => element.includes(" ") === false);
}

function positiveRowsOnly(array) {
  return array; //(hint: use Array.prototype.some())
}

function truthyValuesOnly(array) {
  return array.filter(Boolean);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
