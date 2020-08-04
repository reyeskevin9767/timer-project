//* Select DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const timerDone = document.querySelector('p');

//* Set perimeter and stroke-dasharray
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

const countDownColor = circle.getAttribute('stroke');

let duration;
//* New instance of Timer, fourth argument (optional callbacks)
const timer = new Timer(durationInput, startButton, pauseButton, {
  //* Hook Timer to the real world
  onStart(totalDuration) {
    timerDone.innerText = ""
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );

    if (circle.getAttribute('stroke-dashoffset') < -perimeter / 2) {
      circle.setAttribute('stroke', 'red');
    } else {
      circle.setAttribute('stroke', 'green');
    }
  },
  onComplete() {
    timerDone.innerText = 'Timer Is Done';
  },
});
