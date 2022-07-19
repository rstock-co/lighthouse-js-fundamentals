const whichSchool = function (age) {
  let school = "";

  if (age < 13) {
    school = "Elementary School";
  } else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  } else {
    school = "Lighthouse Labs";
  }

  return school;
};

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
