const refs = {
  days: document.querySelector('[data-value = "days"]'),
  hours: document.querySelector('[data-value = "hours"]'),
  minutes: document.querySelector('[data-value = "mins"]'),
  seconds: document.querySelector('[data-value = "secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();

      const targetDate = this.selector.targetDate;
      const { days, hours, mins, secs } = getTimeComponents(targetDate - currentTime);

      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = mins;
      refs.seconds.textContent = secs;
    }, 1000);
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Mar 29, 2022'),
});
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
