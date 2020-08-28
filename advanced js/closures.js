function wo() {
  console.log('hoooo');
}

wo.name;

// higher order function are functions that returns
// functions or take as parameters other functions.

function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(8);

// or you can write with arrow functions
const multiplyBy = (num1) => (num2) => num1 * num2;

// a good example of closures.
let foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function () {
    return i;
  };
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());
// ------------ note : this returns 10 only when working with var. ------------
// this will return 10 10 10 in all three logs.
// since closures access the current value of the variable
// than needs on outer scope.

// to fix it we can use IIFE or simply change the var to let in the loop.
let foo = [];
for (let i = 0; i < 10; i++) {
  (function () {
    let y = i;
    foo[i] = function () {
      return y;
    };
  })();
}
let foo = [];
for (var i = 0; i < 10; i++) {
  (function (y) {
    foo[y] = function () {
      return y;
    };
  })(i);
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

// closures can be memory efficient.
function heavyDuty(i) {
  const emojis = Array(3333).fill('helloooo');
  console.log('created');
  return emojis[i];
}

heavyDuty(435);
heavyDuty(435);
heavyDuty(435);
heavyDuty(435);

// does not work as intended????
function heavyDuty(i) {
  const emojis = Array(3333).fill('helloooo');
  return function () {
    console.log('created again');
    return emojis[i];
  };
}

// how can we insure that this function only get called once?
function initialize() {
  console.log('setting the view of the webpage.');
}

function initialize2() {
  let count = 0;
  return function () {
    if (count > 0) return;
    else {
      count++;
      return console.log('setting the view of the landscape.');
    }
  };
}
initialize();
initialize();
const initialize23 = initialize2();
initialize23();
initialize23();
initialize23();

// another closures brain teaser.
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i]);
  }, 4000);
}
// the first way to solve it is to
