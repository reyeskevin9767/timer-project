const prefinedButtons = document.querySelectorAll('.default');

//* Add Event Listener to all buttons and set to an object
for (let input of [...prefinedButtons]) {
  input.addEventListener('click', ({ target }) => {
    const { value } = target;
    durationInput.value = value;
  });
}
