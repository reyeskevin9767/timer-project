//* Select DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

//* Set perimeter and stroke-dasharray
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
//* New instance of Timer, fourth argument (optional callbacks)
const timer = new Timer(durationInput, startButton, pauseButton, {
  //* Hook Timer to the real world
  onStart() {
    console.log('Timer Started');
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset -= 50;
  },
  onComplete() {
    console.log('Timer is completed');
  },
});
