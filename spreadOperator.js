/*
  *JavaScript Spread Operator
  Key Points to remember-
   - In JavaScript, three dot notation (...) is used for Spread Operator.
   - Spread Operator used to expand iterables into an individual value.
*/

const data = [23, 56, 'Shani', 78, true];
console.log(...data);

const studentData = {
  firstName: 'Shani',
  middleName: '',
  lastName: 'Gupta',
  designation: 'Student'
};

const updatedStudentData = {
  ...studentData, // Spreaded the student data into updated student data
  middleName: 'Kumar',
  designation: 'Software Engineer',
  companyName: 'Gemini Solutions Pvt. Ltd.'
};
console.log('Student Data: ', studentData);
console.log('Updated Student Data: ', updatedStudentData);

// Spread Operator using Function

function sum(a, b, c) {
  return a + b + c;
}

const nums = [12, 45, 23];
const addedval = sum(...nums);
console.log(addedval);