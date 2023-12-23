const API_KEY = "8cf9a5326b05f7d65055185e5fe65e5e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const newTemp = Math.floor(data.main.temp);
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      name.innerHTML = ` <img src='${iconUrl}' width=30px> ${data.weather[0].main} , ${newTemp}°C ${data.name} `;
      // weather.innerHTML = `<img src='${iconUrl}'> ${data.weather[0].main} , ${newTemp}°C`;
    });
}
function onGeoError() {
  alert("Can't find you... No weather for you...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
