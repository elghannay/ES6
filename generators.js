function* shopping() {
    // going through the side walk 
    // stopping at the grocery store
    yield 'cash';
    // getting out of the grocery store
    // entering the laundry 
    yield 'cleaned clothes'
    return
}
// describe exactly what happens in the store


gen.next('gfggfgf') // the first time we call next() we start executing our code until we found 
//  the first yield value.
// whenever we have yield we need to use next() to move down in the execution of our generator
gen.next('gfggfgf')

// the purpose of using generators is that we can iterate through any data structure that we want.
// since they work perfectly with for of loop
// more examples

function* colors() {
    yield 'blue';
    yield 'orange';
    yield 'red';
}
let myColors = [];
for (const color of colors()) { // notice the execution of the generator on each iteration
    myColors.push(color);
}

/******************* iterate through only some properties of an object ********************/

let team = {
    size: 3,
    department: 'engineering',
    lead: 'angelo',
    engineer: 'rafael',
    manager: 'mikel'
}

function* teamGenerator(team) {
    yield team.lead;
    yield team.engineer;
    yield team.manager;
}

let members = [];
for (const member of teamGenerator(team)) {
    members.push(member);
}
members;

/******************* iterate through two separate generators ********************/
let testingTeam = {
    lead: 'alfredo',
    tester: 'alberto',
    [Symbol.iterator]: function* () {  // => the symbol iterator is what indicate
        yield this.lead;    // that this object can be iterable by a for of loop.
        yield this.tester;
    }
};

let team = {
    testingTeam,
    size: 3,
    department: 'engineering',
    lead: 'angelo',
    engineer: 'rafael',
    manager: 'mikel'
}

function* teamGeneratorComplete(team) {
    yield team.lead;
    yield team.engineer;
    yield team.manager;
    yield* team.testingTeam; // points to the generator called testingTeam 
}
let result = [];
for (const member of teamGeneratorComplete(team)) {
    result.push(member);
}

/*******************             enhancing the code above            ********************/
let testingTeam = {
    lead: 'alfredo',
    tester: 'alberto',
    [Symbol.iterator]: function* () {  // => the symbol iterator is what indicate
        yield this.lead;    // that this object can be iterable by a for of loop.
        yield this.tester;
    }
};

let team = {
    testingTeam,
    size: 3,
    department: 'engineering',
    lead: 'angelo',
    engineer: 'rafael',
    manager: 'mikel',
    [Symbol.iterator]: function* () {
        yield team.lead;
        yield team.engineer;
        yield team.manager;
        yield* team.testingTeam;
    }
}
let result = [];
for (const member of team) {
    result.push(member);
}