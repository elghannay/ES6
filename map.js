let number = [1, 2, 3, 4, 5];
let double = [];
//for loop
for (let i = 0; i < number.length; i++) {
    double.push(number[i] * 5)
}
//map free you from creating a new array and then push to it, it returns a new array
let multiple = number.map(number => number * 5)

// plucking with JS
let cars = [
    { model: ' $mercedes', price: '$50' },
    { model: 'chevrolet ', price: '$5440' }
]

// return statement is compulsory when using array
let prices = cars.map(car => { return car.price });
console.log(prices);

