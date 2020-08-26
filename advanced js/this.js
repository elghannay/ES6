// this code return 'yoo' and the {window} since the function two()
// was not called from the obj it automatically fall back to the window object.
const obj = {
  name: 'elghanny',
  sing() {
    console.log('yooo');
    // const that = this;
    var two = function () {
      console.log(this);
      // console.log(that);
    };
    two();
  },
};
obj.sing();

// to solve this issue of the this keyword     var two =  () => {}
// the two should be defined as an arrow function. or make use of 'that'

// ----------------- call apply abd bind --------------------
function a() {
  console.log('helloo');
}
// call and apply are used to run functions.
a.apply();
a.call();
a();
// three of the calls are equivalent

// call and apply are used to borrow functions from objects
//  wouldn't be cool to borrow the heal function from the wizard so we can.
// also heal the archer.
const wizard = {
  name: 'merlin',
  health: 50,
  heal(points) {
    return (this.heal = 100 + points);
  },
};

const archer = {
  name: 'merlin',
  heal: 30,
};
console.log('22', archer);
wizard.heal.apply(archer, [12]);
wizard.heal.call(archer, 12);
// the bind keyword it return a function that we must call later.
const healed = wizard.heal.bind(archer, 25);
healed();
console.log('23', archer);

// bind a currying
function multiplyByTwo(x, y) {
  return x * y;
}

const multiply = multiplyByTwo.bind(this, 2);
// the function expression is  returning us a function
//with an already passed parameter.
console.log(multiply(5));

// more examples of the this keyword.
const c = {
  name: 'hello',
  say() {
    const newF = function () {
      console.log(this);
    };
    return newF.bind(this);
  },
};
c.say()();
