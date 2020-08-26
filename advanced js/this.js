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
