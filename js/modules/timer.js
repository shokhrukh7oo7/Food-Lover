// Timer
function timer(deadline, selector) {

  function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return {
      totalTime: time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    updateClock();
    const timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const time = getTimeRemaining(endtime);

      days.textContent = time.days;
      hours.textContent = time.hours;
      minutes.textContent = time.minutes;
      seconds.textContent = time.seconds;

      if (time.totalTime <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(selector, deadline);
}

export default timer;
