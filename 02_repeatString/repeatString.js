const repeatString = function (word, num) {
  let myString = "";
  if (num < 0) {
    return "ERROR";
  } else
    for (let i = 0; i < num; i++) {
      myString = myString + word;
    }
  console.log(myString);
};

repeatString("hey", 10);

// Do not edit below this line
// module.exports = repeatString;
