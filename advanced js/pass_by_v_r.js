let a = 5;
let b = 3;
// you pass the value when working with primitives.
b = a;
a = 32;
console.log(b);
// returns b = 5
let c = {
  hi: 'hello',
};
let d = {
  hi: 'there',
};
// pass by reference means if you change the
// original object the copy will also change.
// you pass the memory address when working with objects.
// d = c;
d = Object.assign({}, c); // this only pass a copy not memory address.
o = [].concat(n);
c.hi = 'there you go';
console.log(d);
// returns { hi: 'there you go' }
