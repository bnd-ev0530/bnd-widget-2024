// Replace with your actual client ID and redirect URI
const CLIENT_ID = "11684a8a122d419b92be9048fba94f1b";
const REDIRECT_URI = encodeURIComponent("http://localhost:5501/spotify");

// Redirect user for authentication (using Implicit Grant Flow for simplicity)
window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=user-read-private`;

// Once redirected back, extract the access token from the URL
const urlParams = new URLSearchParams(window.location.hash.substr(1));
const accessToken = urlParams.get("access_token");

// Use the access token to fetch artist information
fetch("https://api.spotify.com/v1/search?q=boynextdoor&type=artist", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Assuming the first artist in the results is "boynextdoor"
    const artistId = data.artists.items[0].id;

    // Use the artist ID to fetch detailed information
    fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((albumData) => {
        console.log(albumData);
      });
  });

document.addEventListener("DOMContentLoaded", () => {
  const artistName = "boynextdoor";

  // Fetch data from Spotify API
  fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`)
    .then((response) => response.json())
    .then((data) => {
      const artistId = data.artists.items[0].id;

      return fetch(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`
      );
    })
    .then((response) => response.json())
    .then((tracks) => {
      const tracksList = document.getElementById("tracks-list");
      tracks.tracks.forEach((track) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${track.name} - ${track.album.name}`;
        tracksList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
