// eslint-disable-next-line no-undef
const send = document.getElementById('send');
// eslint-disable-next-line no-undef
const partOne = document.querySelector('#set');
// eslint-disable-next-line no-undef
const partTwo = document.querySelector('#punch');

send.addEventListener('click', (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-undef
  dataReq('GET', '/result', (error, response) => {
    if (error) {
      partOne.textContent = error.code;
    } else {
      // eslint-disable-next-line no-console
      const resultValue = JSON.parse(response);
      partOne.textContent = resultValue.setup;
      partTwo.textContent = resultValue.punchline;
    }
  });
});
