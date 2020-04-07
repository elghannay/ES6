let array = ['helper', 'banana ', 'orange'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
/***************************** an alternative with for each *******************************/
array.forEach((fruit) => console.log(fruit));
// for each element copy it first in the parameter fruit then execute the function 
let numbers = [1, 3, 4, 5, 6, 7];
let sum = 0;
numbers.forEach(number => sum += number);

console.log(sum);