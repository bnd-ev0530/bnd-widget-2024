var errors = 0;
var cardList = ["001", "002", "003"];
var cardList2 = ["001", "002", "003", "004", "005", "006"];
var cardList3 = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
];
var cardSet;
var board = [];
let rows = 2;
let columns = 3;

var card1Selected;
var card2Selected;
let displayScore = localStorage.getItem("userScore");
let score = document.getElementById("errors");
let level = document.getElementById("level");
let nowLevel = level.innerText;
let fullURL = window.location.href;
const shareBtn = document.getElementById("share");

window.onload = function () {
  shuffleCards();
  startGame();
};

function shuffleCards() {
  if (nowLevel === "1") {
    cardSet = cardList.concat(cardList); //two of each card
  } else if (nowLevel === "2") {
    cardSet = cardList2.concat(cardList2); //two of each card
  } else if (nowLevel === "3") {
    cardSet = cardList3.concat(cardList3); //two of each card
  }
  console.log(nowLevel, cardSet);
  //shuffle
  for (let i = 0; i < cardSet.length; i++) {
    let j = Math.floor(Math.random() * cardSet.length); //get random index
    //swap
    let temp = cardSet[i];
    cardSet[i] = cardSet[j];
    cardSet[j] = temp;
  }
}

function startGame() {
  if (nowLevel === "2") {
    rows = 3;
    columns = 4;
  } else if (nowLevel === "3") {
    rows = 4;
    columns = 5;
  }
  //arrange the board 4x5
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let cardImg = cardSet.pop();
      row.push(cardImg); //JS

      // <img id="0-0" class="card" src="water.jpg">
      let card = document.createElement("img");
      card.id = r.toString() + "-" + c.toString();
      card.src = "images/" + cardImg + ".jpg";
      card.classList.add("card");
      card.classList.add(`level${nowLevel}`);
      card.addEventListener("click", selectCard);
      document.getElementById("board").append(card);
    }
    board.push(row);
  }

  setTimeout(hideCards, 3000);
}

function hideCards() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let card = document.getElementById(r.toString() + "-" + c.toString());
      card.src = "images/back.jpg";
    }
  }
}

function selectCard() {
  if (this.src.includes("back")) {
    let coords, r, c; // Variables for card coordinates

    if (!card1Selected) {
      card1Selected = this;
      coords = card1Selected.id.split("-"); // "0-1" -> ["0", "1"]
      r = parseInt(coords[0]);
      c = parseInt(coords[1]);
      card1Selected.src = "images/" + board[r][c] + ".jpg";
    } else if (!card2Selected && this !== card1Selected) {
      card2Selected = this;
      coords = card2Selected.id.split("-"); // "0-1" -> ["0", "1"]
      r = parseInt(coords[0]);
      c = parseInt(coords[1]);
      card2Selected.src = "images/" + board[r][c] + ".jpg";
      setTimeout(update, 1000);

      // Check if the selected cards match
      if (
        board[coords[0]][coords[1]] ===
        board[card1Selected.id.split("-")[0]][card1Selected.id.split("-")[1]]
      ) {
        board[r][c] = "matched";
        board[card1Selected.id.split("-")[0]][card1Selected.id.split("-")[1]] =
          "matched";

        // Check if all cards are matched after updating the board state
        if (checkAllCardsMatched()) {
          console.log("All cards matched!");
          nowLevel++;
          console.log("nowLevel: " + nowLevel);
          if (nowLevel.toString() === "4") {
            shareBtn.classList.add("showing");
          } else {
            const errorCount = errors;
            localStorage.setItem("userScore", errorCount);
            moveToLink("level" + nowLevel + ".html");
          }

          // Any additional actions or logic you want to perform when all cards are matched
        } else {
          console.log("Not all cards matched yet.");
        }
      }
    }
  }
}

function moveToLink(url) {
  const score = calculateScore(); // Assuming you have a function to calculate the score
  localStorage.setItem("userScore", score);
  window.location.href = url;
}

function calculateScore() {
  return errors; // Replace with actual score calculation
}

function checkAllCardsMatched() {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] !== "matched") {
        return false; // 한 카드라도 맞추지 않은 상태가 있으면 false 반환
      }
    }
  }
  return true; // 모든 카드가 맞춰진 상태면 true 반환
}

function update() {
  //if cards aren't the same, flip both back
  if (card1Selected.src != card2Selected.src) {
    card1Selected.src = "images/back.jpg";
    card2Selected.src = "images/back.jpg";
    errors += 1;
    document.getElementById("errors").innerText = errors;
  }

  card1Selected = null;
  card2Selected = null;
}

function shareOnTwitter() {
  // Encode the text you want to share
  const textToShare =
    "🚪 BOYNEXTDOOR Card Shuffle Game : " +
    score.textContent +
    "회 만에 성공!" +
    fullURL.substring(0, fullURL.lastIndexOf("/")) +
    " 💕";
  const encodedText = encodeURIComponent(textToShare);

  // Create the Twitter Web Intent URL
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  // Open the Twitter Web Intent in a new window
  window.open(twitterURL, "_blank");
}
