// setting up inheritance for simple objects
const dragon = {
  fire: true,
  fight() {
    return 4;
  },
  name: 'kanyo',

  sing() {
    console.log(`i am ${this.name} the fire breather`);
  },
};

const lizard = {
  name: 'rango',
};
// here we set the prototype that the lizard should inherit from it
// functionality is dragon. so whenever access a property that is not available
// on the lizard we go up on the prototype chain to the dragon object and use that

lizard.__proto__ = dragon;
lizard.sing();

// creating a custom function and adding it to the Date object
// this is false asshole !!!!

Date.prototype.getLastYear = function () {
  return this.getFullYear() - 1;
};
// so we are adding a property called getLastYear() on the property object of the
// the Date function

// modifying the map functionality in js
Array.prototype.map = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + 'map');
  }
  return arr;
};
console.log([1, 2, 3].map());
