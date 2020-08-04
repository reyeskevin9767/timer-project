//* Select DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

//* New instance of Timer, fourth argument (optional callbacks)
const timer = new Timer(durationInput, startButton, pauseButton, {
  //* Hook Timer to the real world
  onStart() {
    console.log('Timer Started');
  },
  onTick() {
    console.log('Timer just ticked down');
  },
  onComplete() {
    console.log('Timer is completed');
  },
});
