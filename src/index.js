let now = new Date();
let currentDate = document.querySelector(".date");
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
currentDate.innerHTML = `${day} ${hour}:${minute}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector(".temperature");
  let location = response.data.name;
  let currentLocation = document.querySelector(".city");

  celsiusTemperature = Math.round(response.data.main.temp);

  currentTemperature.innerHTML = `${temperature}`;
  currentLocation.innerHTML = `${location}`;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function searchLocation(event) {
  event.preventDefault();
  let city = document.querySelector("#search-location-input").value;
  search(city);
}
let searchForm = document.querySelector("#search-location");
searchForm.addEventListener("submit", searchLocation);

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function displayCelciusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = celsiusTemperature;
  celsiusLinkElement.classList.add("active");
  fahrenheitLinkElement.classList.remove("active");
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = Math.round((celsiusTemperature * 9) / 5 + 32);
  celsiusLinkElement.classList.remove("active");
  fahrenheitLinkElement.classList.add("active");
}

let toCurrentLocation = document.querySelector("#currentLocationButton");
toCurrentLocation.addEventListener("click", getCurrentPosition);

let celsiusLinkElement = document.querySelector("#celsiusLink");
celsiusLinkElement.addEventListener("click", displayCelciusTemperature);

let fahrenheitLinkElement = document.querySelector("#fahrenheitLink");
fahrenheitLinkElement.addEventListener("click", displayFahrenheitTemperature);

let celsiusTemperature = null;

search("London");
