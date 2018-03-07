function multiplyBy10(array) {
  return array.map(element => element * 10);
}

function onlyVowels(array) {
  return array.map(word =>
    word
      .split("")
      .filter(char => "aeiou".includes(char))
      .join("")
  );
}

function doubleMatrix(arrayMatrix) {
  return arrayMatrix.map(row => row.map(element => element * 2));
}

function onlyNames(array) {
  return array.map(obj => obj["name"]);
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
