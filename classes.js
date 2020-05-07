class Car {
    constructor({ title }) {
        this.title = title;
    }
    /*
    constructor(options){
        this.title = options.title;
    }*/
    drive() {
        console.log('broom broom');
    }
}

class Toyota extends Car {

    constructor(options) {
        class Pet {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            eat() {
                return `${this.name} is eating!`;
            }
        }

        class Cat extends Pet {
            constructor(name, age, livesLeft = 9) {
                super(name, age);
                this.livesLeft = livesLeft;
            }
            meow() {
                return 'MEOWWWW!!';
            }
        }

        class Dog extends Pet {
            bark() {
                return 'WOOOF!!';
            }
            // since teh dog has it own eat method it override the 
            // one that was inherited from the Pet class
            eat() {
                return `${this.name} scarfs his food!`;
            }
        }

        super(options);
        this.color = options.color;
    }
    hank() {
        return 'hand hand'
    }
}

let car = new Toyota({ title: 'mercedez', color: 'blue' });
car;