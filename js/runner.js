var score = document.getElementById("score");
var member = document.getElementById("member");
var obstacle = document.getElementById("obstacle");
var startBtn = document.getElementById("start");
var gameBg = document.getElementById("game");
var ground = document.getElementById("ground");
var counter = 0;
let starting = false;

function jump() {
  if (starting) {
    if (member.classList != "animate") {
      member.classList.add("animate");
    }
    setTimeout(function () {
      member.classList.remove("animate");
      counter++;
    }, 500);
  }
}

function start() {
  obstacle.classList.add("start");
  showScore();
  starting = true;
  // Update the timer every second
  setInterval(showScore, 1000);
}

function showScore() {
  if (starting) {
    score.innerHTML = `score : ${counter}`;
  }
}

var lose = setInterval(function () {
  var memberTop = parseInt(
    window.getComputedStyle(member).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );
  if (blockLeft < 50 && blockLeft > 0 && memberTop >= 280) {
    //obstacle.style.animation = "none";
    //obstacle.style.display = "none";
    obstacle.classList.remove("start");
    starting = false;
    alert("SCORE : " + counter);
    counter = 0;
    clearInterval(showScore);
  }
}, 10);

startBtn.addEventListener("click", start);
gameBg.addEventListener("click", jump);
ground.addEventListener("click", jump);
document.addEventListener("keydown", jump);
