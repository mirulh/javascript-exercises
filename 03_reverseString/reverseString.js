const reverseString = function (word) {
  let string = word;

  let myString = string.split("").reverse().join("");

  console.log(myString);
  return myString;
};

reverseString("home");
// Do not edit below this line
module.exports = reverseString;
