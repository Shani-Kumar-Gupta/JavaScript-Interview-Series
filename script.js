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