class Timer {
  constructor(startButton, pauseButton, duration) {
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.duration = duration;
    this.startButton.addEventListener('click', this.start);
  }
  start() {
    console.log(this);
    // this refers to the button that has called it
  }
}
const startButton = document.querySelector('#startButton');
const pauseButton = document.querySelector('#pauseButton');
const duration = document.querySelector('#duration');

const timer = new Timer(startButton, pauseButton, duration);
timer.start(); // this line refers to the instance of the class

// so how can we make the start() function inside the class
// refers to the same object Timer? and why in the first place ?
// we can do so either by changing the start function to an arrow function
// or add bind(this) to the start function call inside the constructor.
// like that > this.startButton.addEventListener('click', this.start.bind(this));
// but you should retain your function declaration.
// why ? because we want to give the ability of our methods to access all their sibling
// data.

/*************** the first solution ***************/
/*
 start = () => {
        console.log(this);
}
*/
/*
    this.startButton.addEventListener('click', this.start);
*/
