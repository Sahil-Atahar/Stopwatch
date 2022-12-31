let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function start() {
  interval = setInterval(function() {
    seconds++;
    if(seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if(minutes == 60) {
      hours++;
      minutes = 0;
    }
    if(hours == 60) {
      clearInterval(interval);
    }
    document.getElementById("hour").innerHTML = hours > 9 ? hours : `0${hours}`;
    document.getElementById("minute").innerHTML = minutes > 9 ? minutes : `0${minutes}`;
    document.getElementById("second").innerHTML = seconds > 9 ? seconds : `0${seconds}`;
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
}
