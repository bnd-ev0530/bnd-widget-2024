const songs = [
  {
    song: "97_-_WugRFA",
    artist: "뭣 같아 Official MV",
  },
  {
    song: "Uyq9OE8lIz8",
    artist: "Serenade Official MV",
  },
  {
    song: "jizAb-SLvtM",
    artist: "One and Only Official MV",
  },
  {
    song: "_ItgMr1bMYc",
    artist: "돌아버리겠다 Official MV",
  },
];
const iframe = document.querySelector(".mv iframe");
// const artist = document.querySelector("#songs span");
// const changeBtn = document.querySelector(".mv .random-button");
// const urlBtn = document.querySelector(".mv .url-button");
let url;
function randomSong() {
  const number = Math.floor(Math.random() * songs.length);
  artist.innerText = `🎶 ${songs[number].artist} `;
  iframe.src = `https://www.youtube.com/embed/${songs[number].song}?mute=1&autoplay=1`;
  url = `https://www.youtube.com/embed/${songs[number].song}?autoplay=1`;
}
//randomSong();

function goMovie() {
  window.open(url);
}

function goSong(url) {
  iframe.src = `https://www.youtube.com/embed/${url}?mute=1&autoplay=1`;
  url = `https://www.youtube.com/embed/${url}?autoplay=1`;
}

//changeBtn.addEventListener("click", randomSong);
//urlBtn.addEventListener("click", goMovie);
