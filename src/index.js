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
  currentTemperature.innerHTML = `${temperature}`;
  let location = response.data.name;
  let currentLocation = document.querySelector(".city");
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

let toCurrentLocation = document.querySelector("#currentLocationButton");
toCurrentLocation.addEventListener("click", getCurrentPosition);

search("London");

///function changeToF(event) {
///event.preventDefault();
///let temperature = document.querySelector(".temperature");
///temperature.innerHTML = "66.2";
///}
///let toFahrenheit = document.querySelector("#fahrenheit-link");
///toFahrenheit.addEventListener("click", changeToF);

///function changeToC(event) {
///event.preventDefault();
///let temperature = document.querySelector(".temperature");
///temperature.innerHTML = "19";
///}
///let toCelcius = document.querySelector("#celcius-link");
///toCelcius.addEventListener("click", changeToC);
