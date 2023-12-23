const clock = document.querySelector("#clock");
clock.innerHTML = "00:00:00";

function getClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  const period = hours < 12 ? "AM" : "PM";
  if (hours > 12) {
    hours = String(Number(hours) - 12).padStart(2, "0");
  }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `<span>${period}</span>${hours}:${minutes}<span>${seconds}</span>`;
}
getClock();
setInterval(getClock, 1000);
