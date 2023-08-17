const sumAll = function (numStart, numEnd) {
  if (numStart > numEnd) {
    [numStart, numEnd] = [numEnd, numStart];
  }

  if (
    typeof numStart != "number" ||
    numStart < 0 ||
    numStart.isArray ||
    typeof numEnd != "number" ||
    numEnd < 0 ||
    numEnd.isArray
  ) {
    console.log("ERROR");
    return "ERROR";
  } //
  else {
    let totalSum = 0;
    for (let i = numStart; i <= numEnd; i++) {
      // console.log(i);
      totalSum = totalSum + i;
    }
    // console.log("the total sum equal to " + totalSum);
    return totalSum;
  }
};

// sumAll(1, 4);
// sumAll(1, 4000);
// sumAll(123, 1);
// sumAll(-10, 4);
// sumAll(10, "90")
// sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
