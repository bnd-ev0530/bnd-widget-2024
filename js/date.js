const dateData = document.querySelector("#date");

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const week = new Array("일", "월", "화", "수", "목", "금", "토");
  const day = week[today.getDay()];

  dateData.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
}

getDate();
