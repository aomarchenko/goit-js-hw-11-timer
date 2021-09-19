const refs = {
  days: document.querySelector('[data-value = "days"]'),
  hours: document.querySelector('[data-value = "hours"]'),
  minutes: document.querySelector('[data-value = "mins"]'),
  seconds: document.querySelector('[data-value = "secs"]'),
};
console.log(refs.seconds);
const timer = {
  start() {
    const startTime = Date.now();
    console.log(startTime);

    setInterval(() => {
      const currentTime = Date.now();
      //   console.log(currentTime - startTime);
      const deltaTime = currentTime - startTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = mins;
      refs.seconds.textContent = secs;
    }, 1000);
  },
};
timer.start();
function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
const targetDate = new Date('Sep 20, 2021');
console.log(targetDate);
