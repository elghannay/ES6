function outer() {
    let counter = 0;
    function increment() {
        if (counter = 1)
            return "sorry you can't run me more than once"
        return counter++;
    }
    return increment;
}

const myFunc = outer();
myFunc()
myFunc()
myFunc()
myFunc()
myFunc()
myFunc()
myFunc()
console.log(myFunc());