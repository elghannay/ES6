/******************* destructuring : can be used to access properties of objects *********************/

const car = { type: 'Mercedez', price: 45 };

const { type } = car;
const { price } = car;
// or in one line
const { price, type } = car;
// console.log(type);

/******************* destructuring : can be used to pass arguments as objects to functions *********************/

let savedFile = { name: 'pdf', extension: 'jpg', size: 24433 };
function print({ name, extension, size }) {
  console.log(
    `the ${name} has an extension of ${extension} with a size of ${size}`
  );
}
print(savedFile);

/******************* destructuring : can be used to access elements of arrays *********************/

let companies = ['google', 'facebook', 'instagram'];
let [companyOne, ...names] = companies; // instead of companyOne = companies[0] // notice the brackets
console.log(companyOne);
console.log(names);

/******************* destructuring : can be used to access array of objects *********************/

let networks = [
  { name: 'google', location: 'mountain View' },
  { name: 'facebook', location: 'London' },
  { name: 'Instagram ', location: 'San Francisco' },
];

let [{ name, location }] = networks;
console.log(name);
console.log(location);

let firstRow = networks[1].name;
console.log(firstRow);

let google = {
  name: 'google',
  locations: ['tetouan', 'tanger', 'Safi']
};

let { locations: [locationOne, locationTwo, locationTree] } = google;

console.log(locationOne);
console.log(locationTwo);
console.log(locationTree);

/******************* destructuring : don't have to use the exact order of parameters *********************/

let user = {
  username: 'elghannay',
  password: 'password',
  dayOfbirth: 34355,
  mood: '🤣',
  city: 'tetouan',
  personality: 'awesome',
};
function signUp({ username, password, dayOfbirth, mood, city }) {
  // logic goes here
}

/******************* destructuring : convert an array of arrays to array of objects *********************/

let points = [
  [4, 5],
  [5, 8],
  [8, 90],
  [34, 75],
];

let pointsObj = points.map((point) => {
  return { x: point[0], y: point[1] };
});
console.log(pointsObj);

let pointsObjEnhanced = points.map(([x, y]) => {
  return { x: x, y: y };
}); // is the same as { x, y }
console.log(pointsObjEnhanced);
