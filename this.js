/*'this' refers to the object from which the function got returned.
 so the benefit is actually that the object is now behave as a 
 self contained word which can interact with other properties
 */


// the example below triggers an error, 
const person1 = {
    name: 'mohamed',
    nickName: 'giga',
    lastName: 'elghannay',
    present() {
        console.log(`${name} ,${lastName} `);
    }
}

const person2 = {
    name: 'mohamed',
    nickName: 'giga',
    lastName: 'elghannay',
    present() {
        // instead of repeating the variables you could use distr 
        const { name, lastName } = this;
        console.log(`${name} ,${lastName} `);
    }
}
const person = {
    name: 'mohamed',
    nickName: 'giga',
    lastName: 'elghannay',
    present() {
        return `${this.name} ,${this.lastName} `;
    },
    greet() {
        console.log(this.present());
    },
    laugh: () => {// this will refer to the windows object : ERROR
        console.log(this);
    }
}
person.laugh();

// a more complex example of using 'this' 
const annoying = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrases() {
        const { phrases } = this;
        let index = Math.floor(Math.random() * phrases.length);
        return (phrases[index]);
    },
    start() {
    // arrow arrow functions are helpful since they don't get their own special 'this' 
    //. 'this' in the setInterval refer to the same 'this' in the start() method.
        this.id = setInterval(() => {
            console.log(this.pickPhrases());
        }, 1000);
    },
    stop() {
        clearInterval(this.id);
    }
}
annoying.start()