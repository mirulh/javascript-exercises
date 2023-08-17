// const leapYears = function (x) {
//   let year = x;
//   if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
//     console.log("is a leap year");
//     return true;
//   } //
//   else {
//     console.log("is not");
//     return false;
//   }
// };
// my answer ^, smart ass answer v

const leapYears = function (year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// leapYears(2004);
// leapYears(1985);
// leapYears(1600);

// Do not edit below this line
module.exports = leapYears;
