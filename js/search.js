const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form input");
function onSearchSubmit(e) {
  e.preventDefault();
  const keyword = searchInput.value;
  window.open(
    `https://www.google.com/search?q=${keyword}&&sourceid=chrome&ie=UTF-8`
  );
}
searchForm.addEventListener("submit", onSearchSubmit);
