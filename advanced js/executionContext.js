// window;
// window === this;
// hoisting example
var a = 'banana';
function run() {
  console.log(a);
  var a = 'orange';
  console.log(a);
}
run();

// that's why we need to avoid using VAR and stick with let and const.
// function declaration get hoisted and function expressions don't
function mary(person1, person2) {
  console.log(arguments);
  return true;
}
console.log(mary('ahmed', 'youssef'));
