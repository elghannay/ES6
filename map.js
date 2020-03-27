let number = [1, 2, 3, 4, 5];
let double = [];
//for loop
for (let i = 0; i < number.length; i++) {
    double.push(number[i] * 5)
}
//map
let multiple = number.map(number => number * 5)

// plucking with JS
let cars = [
    { model: ' $mercedes', price: '$50' },
    { model: 'chevrolet ', price: '$5440' }
]
let prices = cars.map(car => { return car.price });
console.log(prices);

