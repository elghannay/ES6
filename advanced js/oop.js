const elfFunctions = {
  attack() {
    return 'the attack is ' + this.weapon;
  },
};
function createElf(name, weapon) {
  return { name, weapon };
}

const peter = createElf('peter', fire);
peter.attack = elfFunctions.attack;
// this is a bad approach since the every time we need to make that connection.
// /////////////// abetter approach.
// using Object.create()
const elfFunctions = {
  attack() {
    return 'the attack is ' + this.weapon;
  },
};
function createElf(name, weapon) {
  const newElf = Object.create(elfFunctions);
  // Object.create will set the prototype chain.
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf('peter', 'fire');
peter.attack();
