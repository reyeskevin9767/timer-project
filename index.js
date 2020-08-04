class Timer {
  //* Constructor takes DOM elements
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //* Event Listeners
    this.startButton.addEventListener('click', this.start);
  }
  start() {
    console.log('Time to start the timer!');
  }
}

//* Select DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

//* Create a new instance of Timer
const timer = new Timer(durationInput, startButton, pauseButton);
