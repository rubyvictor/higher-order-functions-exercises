function multiplyBy10(array) {
  return array.map(x => x * 10);
}

function onlyVowels(array) {
  return array.map(element => element.match(/[aeiou]/gi) || []);
  return array.map(element => element.split("a").join('').split("e").join('').split("i").join("").split("o").join("").split("u").join(""));
}

function doubleMatrix(array) {
  return array.map((element,index,array) => element * 2);
}

function onlyNames(array) {
  return array.map(x  => x["name"]);
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
