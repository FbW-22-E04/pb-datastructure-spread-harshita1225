//1. Combining Arrays
const euroCountries = ["germany", "italy", "greece", "spain", "netherlands"];
const aisanCountries = ["singapore", "india", "bhutan", "pakistan"];

let countries = [euroCountries, aisanCountries];
console.log(countries);

//2. copying array

countries = [...euroCountries, ...aisanCountries];

//3.Largest number in array
const array = [12, 14, 1, 0, -17, 11, 55];
const findMaximum = function (array) {
  return Math.max(...array);
};

console.log(findMaximum(array));

//4.smallest number in array

const findMinimum = function (array) {
  return Math.min(...array);
};

console.log(findMinimum(array));

//5. Clone and Merge

const person = { name: "John" };
const job = { role: "teacher" };

//clone object person
const person2 = person;
console.log(person, person2);

//merge two objects
let employee = { ...person, ...job };
//let employee2 = Object.assign(person2, job);

console.log(employee);

employee.role = "banker";
console.log(person);
console.log(employee, person, job);

//6.Bonus: 6. Is the average a whole number?

function isWhole(x, y, z, ö, ...others) {
  const avg = (x + y + z + ö) / arguments.length;
  console.log(avg);
  if (avg % 2 === 0) {
    console.log("True:is whole number");
  } else {
    console.log("False:is not a whole number");
  }
  return 1;
}

console.log(isWhole(1, 2, 3, 4));
//console.log(isWhole(array));
console.log(isWhole(...[12, 1, 14, 0]));
console.log(isWhole(...array));
