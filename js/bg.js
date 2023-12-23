const colors = [
  "#2BC0E4",
  "#085078",
  "#85D8CE",
  "#4776E6",
  "#8E54E9",
  "#FF8008",
  "#FFC837",
];

const body = document.querySelector("body");
const button = document.querySelector("button");

function handleBackground() {
  const random = Math.floor(Math.random() * colors.length);
  const first = colors[random];
  const newColor = colors.filter((item) => item !== first);
  const second = newColor[random];

  body.style.background = `linear-gradient(45deg, ${first}, ${second})`;
}
handleBackground();
button.addEventListener("click", handleBackground);
