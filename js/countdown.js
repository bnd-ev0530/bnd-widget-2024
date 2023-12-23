document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");

  function updateTimer() {
    // Target date: Christmas (December 25)
    const targetDate = new Date(new Date().getFullYear(), 11, 25);

    // Current date
    const currentDate = new Date();

    // Calculate the remaining time
    const timeDiff = targetDate - currentDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    // Display the timer
    timerElement.innerHTML = `
        <h1> 🎄${days}일 ${hours}시간 <span>${minutes}분 ${seconds}초<span></h1>
        <p> </p>
      `;
  }

  // Update the timer every second
  setInterval(updateTimer, 1000);

  // Initial update
  updateTimer();
});
