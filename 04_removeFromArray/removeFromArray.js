const removeFromArray = function (array, ...valuesToRemove) {
  const newArray = [];
  console.log(newArray); //to visualize the steps

  array.forEach((item) => {
    console.log(item + " is added");

    if (!valuesToRemove.includes(item)) {
      //includes() is used not to insert an item into an array, but to check the item if there, then remove it using push()
      newArray.push(item); //important!! push is to push the item into the array, not push it out
      console.log(item);
    } else {
      console.log("this element is removed:", item);
    }
  });
  console.log(newArray);
  return newArray; //final output
};

removeFromArray([1, 2, 3, 4], 3);
console.log("--------------------------Q1)");
removeFromArray([1, 2, 3, 4], 3, 2);
console.log("--------------------------Q2)");
removeFromArray([1, 2, 3, 4], 7, "tacos");
console.log("--------------------------Q3)");
removeFromArray([1, 2, 3, 4], 7, 2);
console.log("--------------------------Q4)");
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
console.log("--------------------------Q5)");
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
console.log("--------------------------Q6)");
removeFromArray([1, 2, 3], "1", 3);
console.log("--------------------------Q7)");

// Do not edit below this line
module.exports = removeFromArray;
