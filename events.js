const buttonOne = document.querySelector('.d-5');
const buttonTwo = document.querySelector('.d-10');
const buttonThree = document.querySelector('.d-15');
const buttonFour = document.querySelector('.d-20');
const buttonFive = document.querySelector('.d-25');

//* Add Event Listener to all buttons and set to an object
for (let input of [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive]) {
  input.addEventListener('click', ({ target }) => {
    const { value } = target;
    durationInput.value = value;
  });
}
