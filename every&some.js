computers = [
    { brand: 'acer' },
    { brand: 'hp' },
    { brand: 'Dell' },
    { brand: 'sony' }
];
// some => IF ANY 
let lessThanTwo = computers.some(computer => computer.brand.length < 3);
let moreThanTwo = computers.every(computer => computer.brand.length < 3);

console.log(lessThanTwo);
console.log(moreThanTwo);

// every can be implemented in user sign up 

class Field {
    constructor(value) {
        this.value = value;
    }
    validate() {
        return this.value.length > 0;
    }
}

let userName = new Field('mohamed');
let age = new Field('234');

let fields = [userName, age];
let isValid = fields.every(field => field.validate());

if (isValid) {
    //do something
}
else {
    // do another thing
}