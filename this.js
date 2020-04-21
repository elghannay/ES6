/*
 the benefit is actually that the object is now behave as a 
 self contained word which can interact with other properties
 */

/* refers the current execution scope it's going to give us 
an object back, and depending on the context, it could reference the 
global scope like in this example : 

function sayHi(){
    console.log('red');
    console.log(this); // it will returns the windows object
}
when you define a function like this, it will be added as a property 
to the 'windows' object.

OR refer to the object from which the function got returned:

const person = {
    name:'cher',
    last:'cher',
    fullName(){
    console.log(this)
    }
}
in the case above, 'this' refers to the object person when we run it as person.fullName().

AND lastly it depends on the invocation context the function used in and more specifically 
the line of code that we have used to invoke it,
const fl = person.fullName() and executing it as fl() will refer to the windows object.

what is the downside of using arrow functions as methods ?  

const person = {
    name:'cher',
    last:'cher',
    fullName(){
    console.log(this)
    },
    laugh:()=>{
    console.log(this)
    }
}
often we want the method to have access to the current object data, but since the arrow function 
does not get it own 'this' context, it always refers to the window object. ex: person.laugh()

MORE EXAMPLES : 
const annoying = {
  phrases: ['literally','cray cray',"I can't even",'Totes!','YOLO',"Can't Stop, Won't Stop"],
  pickPhrases() {
    const { phrases } = this;
    let index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
  console.log(this.pickPhrases());
    setInterval(function(){
      console.log(this);         XXX  
      console.log(this.pickPhrases());
    }, 1000);
  },
why 'this' in XXX refers to the window object?   since the function that was executed by 
setInterval( )   was not executed by us hence the context of it is as if it was invoked outside of the 
object, exactly as a random function executed on the global scope.

to solve this issue aside from using an arrow function, they were using a variable that to 
store the current this context.
start() {
    const that = this;
    setInterval(function(){
      console.log(that);         
      console.log(that.pickPhrases());
    }, 1000);
  },

*/

// the example below triggers an error,
const person1 = {
  name: 'mohamed',
  nickName: 'giga',
  lastName: 'elghannay',
  present() {
    console.log(`${name} ,${lastName} `);
  },
};

const person2 = {
  name: 'mohamed',
  nickName: 'giga',
  lastName: 'elghannay',
  present() {
    // instead of repeating the variables you could use distr
    const { name, lastName } = this;
    console.log(`${name} ,${lastName} `);
  },
};
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
  laugh: () => {
    // this will refer to the windows object : ERROR
    console.log(this);
  },
};
person.laugh();

// a more complex example of using 'this'
const annoying = {
  phrases: [
    'literally',
    'cray cray',
    "I can't even",
    'Totes!',
    'YOLO',
    "Can't Stop, Won't Stop",
  ],
  pickPhrases() {
    const { phrases } = this;
    let index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    // we need to have an id if we want to use clearInterval() so we add a this.timerId as a property 
    // to the global object.
    this.timerId = setInterval(() => {
      console.log(this.pickPhrases());
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
  },
};
annoying.start();
