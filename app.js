let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display-time");
let timer = null;

// Main Function for calculating seconds, minutes & hours
function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}
// Function for Starting the watch
function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

// Function for Stopping the watch
function watchStop() {
  clearInterval(timer);
}

// Function for Reseting the watch
function watchReset() {
  clearInterval(timer);
  let [seconds, minutes, hours] = [0, 0, 0]; // Reseting to zero
  displayTime.innerHTML = "00:00:00";
}
