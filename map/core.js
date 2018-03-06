function multiplyBy10(array) {
  return array.map(x => x * 10);
}

function onlyVowels(array) {
  return array.filter(
    element => element.includes("a", "e", "i", "o", "u") === true
  );
}

function doubleMatrix(array) {
  return array;
}

function onlyNames(array) {
  return array;
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
