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
