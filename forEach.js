let array = ['helper', 'banana ', 'orange'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// array.forEach(function(fruits){
//     console.log(fruits);
// });

let numbers = [1, 3, 4, 5, 6, 7];
let sum = 0;
numbers.forEach(number => sum += number);
