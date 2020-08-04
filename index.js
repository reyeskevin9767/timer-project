class Timer {
  //* Constructor takes DOM elements
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    //* Event Listeners
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  //* Starts the timer
  start = () => {
    if (this.onStart) {
      this.onStart();
    }

    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  //* Pauses the interval
  pause = () => {
    clearInterval(this.interval);
  };

  //* Responsible for the timer counting down
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  //* Instance variable to get input value
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  //* Instance variable to set input value
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

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
