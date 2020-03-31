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
        super(options);
        this.color = options.color;
    }
    hank() {
        return 'hand hand'
    }
}

let car = new Toyota({ title: 'mercedez', color: 'blue' });
car;