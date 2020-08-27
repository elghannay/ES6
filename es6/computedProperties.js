// in the case we have an object and we want to read
// dynamically the values or the keys we can use the computed props

const role = 'host';
const role2 = 'hostGator';
const person = 'Jools holland';
const person2 = ' maria banford';

/* old way of doing it */
const team = {};
team.role = person;
team.role2 = person2;

/* newer syntax  NOTICE THE SEMICOLON VS THE EQUAL SIGN */
const team = {
  [role]: person,
  [role2]: person2,
};

/* old way of doing it */

function addProps(obj, k, v) {
  const copy = { ...obj };
  copy[k] = v;
  return copy;
}
const res = addProps(team, happy, ':)');
/* newer syntax */
function addProps(obj, k, v) {
  return {
    ...obj,
    [k]: v,
  };
}
/* one liner with ES6 */

const addProps = (obj, k, v) => ({ ...obj, [k]: v });
