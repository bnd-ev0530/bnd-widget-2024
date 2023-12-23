const photoChangeBtn = document.querySelector(".photo");
const photoImg = document.querySelector(".photo img");
// const images = ["00.gif", "01.gif", "02.gif", "03.gif", "04.gif"];
const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg"];

function photoChange() {
  const number = Math.floor(Math.random() * images.length);
  const chosenImage = images[number];
  photoImg.src = `images/photos/${chosenImage}`;
}

photoChangeBtn.addEventListener("click", photoChange);

const number = Math.floor(Math.random() * images.length);
const chosenImage = images[number];
photoImg.src = `images/photos/${chosenImage}`;
