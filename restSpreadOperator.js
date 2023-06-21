/**
 ** ES6 - REST and SPREAD Operator
 *? JavaScript uses three dots (...) for both the Rest and Spread Operators. But these two operatos are not same.
 *? The main difference between rest and spread operators is that the rest opearator puts the rest of some specific user supplied 
 *? values into a JavaScript Array. But the spread operator syntax expands iteraables into individual value or element.
*/

// Rest Operator - Combined
// With Array
function addNumber(a, b, c, d, ...args) {
  console.log(args);
  console.log(arguments);
  console.log(a+b+c+d);
}

function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

addNumber(2, 3, 4, 5, 7, 8);
let sum = add(2, 3, 4, 5, 7, 8);
console.log("Final Result : ", sum);

function getMyFullName(...fullName) {
  let myFullName = '';
  for (let i = 0; i < fullName.length; i++) {
    myFullName = myFullName + fullName[i] + ((i + 1) !== fullName.length ? ' ' : '');
  }
  return myFullName;
}

let myName = getMyFullName('Shani', 'Kumar', 'Gupta');
console.log("My Full Name: ", myName);
// With Object

let studentData = {
  name: 'Shani Kumar Gupta',
  Occupation: 'Software Engineer',
  age: '24',
  hobbies: ['cricket', 'reading', 'blogging'],
  comapany: 'ABC'
};

let { name, Occupation, ...args } = studentData; // Object Destructuring with rest operator
console.log("Object Destructuring with rest operator : \n", name, Occupation, args);

// Spread Operator - Expand
let myNumber = [1, 2, 3, 4, 5, 6, 7];

function myNumberAdd(a, b, c, d, ...args) {
  console.log("Args : ", args);
  return a + b + c + d;
}

let finalSum = myNumberAdd(...myNumber);
console.log("Final Number Sum : ", finalSum);
// With Object

let newStudentData = {
  ...studentData,
  name: 'Test Data'
};
console.log(newStudentData);

