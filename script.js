// Global Scope vs. Blocked Scope vs. Functional Scope

var x = 10;
if (true) {
  var x = 20;
  console.log("Inner X value: ", x);
}
function callMe() {
  var x = 50;
  console.log("Inner function X value: ", x);
}
callMe();
console.log("Outer X value: ", x);

let a = 300;
if (true) {
  let a = 50;
  console.log("Inner a value: ", a);
}
console.log("Outer a value: ", a);