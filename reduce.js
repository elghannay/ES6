// return the colors on an array 
let colorObject = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
];

let colors = colorObject.reduce((acc, current) => {
    acc.push(current.color)
    return acc;
}, []);
console.log(colors);


// verify if a string has a matching parenthesis

