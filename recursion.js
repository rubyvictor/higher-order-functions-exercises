// function countDown(number) {
//   if (number === 0) {
//     console.log("HAPPY NEW YEAR!!!! COUNTDOWN COMPLETE!");
//   } else {
//       console.log(number);
//       countDown(number -1);
//   }
// }

// countDown(5);

//Reverse a string
function reverse(str) {
  if (str.length > 1) {
    const length = str.length;
    newStr = str.slice(-1) + reverse(str.slice(0,-1));
    return newStr;
  }
  return str;
}

result = reverse("abcde");
console.log(result);
