document.addEventListener("DOMContentLoaded", function () {
  function updateDday() {
    const ddayElement = document.getElementById("dday");

    var startDate = new Date("2023-05-30"); // 기준일을 설정합니다.
    var today = new Date(); // 현재 날짜와 시간을 가져옵니다.

    // 기준일부터 오늘까지의 시간 차이를 계산합니다.
    var timeDiff = Math.abs(today.getTime() - startDate.getTime());

    // 일, 시간, 분, 초 단위로 변환합니다.
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    var hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    // Display the timer
    ddayElement.innerHTML = `
    <h2> 🚪 <span> ${days}일 ${hours}시간 <span>${minutes}분 ${seconds}초<span></span> </h2>
  `;
  }

  // Update the timer every second
  setInterval(updateDday, 1000);

  // Initial update
  updateDday();
});
