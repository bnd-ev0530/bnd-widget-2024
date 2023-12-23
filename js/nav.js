document.getElementById("mobile-menu").addEventListener("click", function () {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
  // Toggle the show class on the close button and menu toggle icon
  document.getElementById("close-menu").classList.toggle("show");
  this.classList.toggle("show");
});

// Close the menu when clicking the close button
document.getElementById("close-menu").addEventListener("click", function () {
  const navList = document.querySelector(".nav-list");
  navList.classList.remove("show");
  // Toggle the show class on the close button and menu toggle icon
  document.getElementById("mobile-menu").classList.remove("show");
  this.classList.remove("show");
});
