// Function to retrieve the score from localStorage and display it
function displayScore() {
  const score = localStorage.getItem("userScore");
  document.getElementById("displayScore").textContent = score || "N/A"; // Display the score or 'N/A' if not found
}

// Call the function to display the score when the page loads
window.onload = function () {
  displayScore();
};
