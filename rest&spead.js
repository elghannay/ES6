/***********************  the rest operator   ******************** */
// get whatever parameters there is. and put them in an array

function add(a, b, c, d, e, f, d) {
    let numbers = [a, b, c, d, e, f, d];
    return numbers.reduce((total, number) => total + number, 0)
}

console.log(add(1, 2, 3, 4, 5, 6, 7));

function addTwo(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0)
}
console.log(addTwo(1, 2, 3, 4, 5, 6, 7));
/*********************** the spread operator ******************** */
// get whatever in the array and spread it.
