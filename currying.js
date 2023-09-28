/*
  👉 Currying and Infinite Currying Implementation
  *What is Currying?
  👉 In JavaScript, Currying is a technique to convert multiple arguments function into a single argument function (unary function) in a sequence.
  👉 While coverting regular function to currying, Number of unary functions should be greater than or equal to the number of arguments of a regular function.
  👉 Two ways to perform currying-
    - Using Closure
    - Uning Bind
*/

/* Example 1 */
// Regular function with multiple arguments
function sum(a, b, c) {
  return a + b + c;
}

const result = sum(1, 2, 3);
console.log(result);

// 👉 Let's transform it to currying function using Closure

function additionCurrying(a) {
  return function (b){
    return function (c){
      return a + b + c;
    }
  }
}

const additionCurryingResult = additionCurrying(1)(2)(3);
console.log(additionCurryingResult);