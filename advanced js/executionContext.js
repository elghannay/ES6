// window;
// window === this;
// hoisting example

var a = 'banana';
function run() {
  console.log('RUN', a);
  var a = 'orange';
  console.log('RUN', a);
}
run();

// that's why we need to avoid using VAR and stick with let and const.
// function declaration get hoisted and function expressions don't

function mary(person1, person2) {
  console.log(arguments);
  return true;
}
console.log(mary('ahmed', 'youssef'));

// first bigBrother will be added a containing execution context.
// then the two littleBrother functions are registered at the creation phase.
// and overwrite each other, since they have the same name.
// once we stop on the return statement we call only the last one.
function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}
// variable envirenment;

function two() {
  var isValid;
}
function one() {
  console.log(isValid);
  var isValid = false;
  two();
}
var isValid = 'banana';
one();
console.log(isValid);

// confusing parts about JS : doodle can be executed only from inside the 'hey'
const hey = function doodle() {
  return 'hey';
};
hey();
doodle();

// the code below returns undefined && lalalala
console.log(teddy);
console.log(sing());
var teddy = 'hello';
function sing() {
  return 'lalalala';
}
