function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${formatHours(timestamp)}`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hours}:${minute}`;
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector(".temperature");
  let location = response.data.name;
  let currentLocation = document.querySelector(".city");
  let currentEmojiElement = document.querySelector("#currentEmoji");
  let dateElement = document.querySelector(".date");

  celsiusTemperature = Math.round(response.data.main.temp);

  currentTemperature.innerHTML = `${temperature}`;
  currentLocation.innerHTML = `${location}`;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  currentEmojiElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentEmojiElement.setAttribute(
    "alt",
    `${response.data.weather[0].description}`
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col">
      <span class="time">${formatHours(forecast.dt * 1000)}</span>
          <img
            src="http://openweathermap.org/img/wn/${
              forecast.weather[0].icon
            }@2x.png"
              alt=""
          />
          <div class="weather-forecast-temperature">
            <strong>${Math.round(forecast.main.temp_max)}°</strong>
               ${Math.round(forecast.main.temp_min)}°
          </div>
    </div>`;
  }
}

function search(city) {
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
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

function displayLimeTheme(event) {
  event.preventDefault();
  let boxZ = document.querySelector(".z");
  boxZ.setAttribute(
    "style",
    "background-color: rgb(4, 113, 48); color: rgb(231, 240, 235)"
  );
  let boxX = document.querySelector(".x");
  boxX.setAttribute(
    "style",
    "background-color: rgb(231, 240, 235); color:rgb(4, 113, 48)"
  );
  let boxA = document.querySelector(".a");
  boxA.setAttribute(
    "style",
    "background-color: rgb(231, 240, 235); color:rgb(4, 113, 48)"
  );
  let boxB = document.querySelector(".b");
  boxB.setAttribute(
    "style",
    "background-color: rgb(231, 240, 235); color:rgb(4, 113, 48)"
  );
  let boxC = document.querySelector(".c");
  boxC.setAttribute(
    "style",
    "background-color: rgb(4, 113, 48); color: rgb(231, 240, 235)"
  );
  let boxD = document.querySelector(".d");
  boxD.setAttribute(
    "style",
    "background-color: rgb(231, 240, 235); color:rgb(4, 113, 48)"
  );
  let boxE = document.querySelector(".e");
  boxE.setAttribute(
    "style",
    "background-color: rgb(4, 113, 48); color: rgb(231, 240, 235)"
  );
}

function displayBlueTheme(event) {
  event.preventDefault();
  let boxZ = document.querySelector(".z");
  boxZ.setAttribute(
    "style",
    "background-color: rgb(68, 191, 215); color:rgb(255, 236, 168)"
  );
  let boxX = document.querySelector(".x");
  boxX.setAttribute(
    "style",
    "background-color: rgb(255, 236, 168); color: rgb(68, 191, 215)"
  );
  let boxA = document.querySelector(".a");
  boxA.setAttribute(
    "style",
    "background-color: rgb(255, 236, 168); color: rgb(68, 191, 215)"
  );
  let boxB = document.querySelector(".b");
  boxB.setAttribute(
    "style",
    "background-color: rgb(255, 236, 168); color: rgb(68, 191, 215)"
  );
  let boxC = document.querySelector(".c");
  boxC.setAttribute(
    "style",
    "background-color: rgb(68, 191, 215); color:rgb(255, 236, 168)"
  );
  let boxD = document.querySelector(".d");
  boxD.setAttribute(
    "style",
    "background-color: rgb(255, 236, 168); color: rgb(68, 191, 215)"
  );
  let boxE = document.querySelector(".e");
  boxE.setAttribute(
    "style",
    "background-color: rgb(68, 191, 215); color:rgb(255, 236, 168)"
  );
}

function displayPinkTheme(event) {
  event.preventDefault();
  let boxZ = document.querySelector(".z");
  boxZ.setAttribute(
    "style",
    "background-color: rgb(226, 43, 37); color:rgb(253, 227, 238)"
  );
  let boxX = document.querySelector(".x");
  boxX.setAttribute(
    "style",
    "background-color: rgb(253, 227, 238); color: rgb(226, 43, 37)"
  );
  let boxA = document.querySelector(".a");
  boxA.setAttribute(
    "style",
    "background-color: rgb(253, 227, 238); color: rgb(226, 43, 37)"
  );
  let boxB = document.querySelector(".b");
  boxB.setAttribute(
    "style",
    "background-color: rgb(253, 227, 238); color: rgb(226, 43, 37)"
  );
  let boxC = document.querySelector(".c");
  boxC.setAttribute(
    "style",
    "background-color: rgb(226, 43, 37); color:rgb(253, 227, 238)"
  );
  let boxD = document.querySelector(".d");
  boxD.setAttribute(
    "style",
    "background-color: rgb(253, 227, 238); color: rgb(226, 43, 37)"
  );
  let boxE = document.querySelector(".e");
  boxE.setAttribute(
    "style",
    "background-color: rgb(226, 43, 37); color:rgb(253, 227, 238)"
  );
}

function displayBrownTheme(event) {
  event.preventDefault();
  let boxZ = document.querySelector(".z");
  boxZ.setAttribute(
    "style",
    "background-color: rgb(173, 131, 81); color: rgb(249, 245, 237)"
  );
  let boxX = document.querySelector(".x");
  boxX.setAttribute(
    "style",
    "background-color: rgb(249, 245, 237); color: rgb(173, 131, 81);"
  );
  let boxA = document.querySelector(".a");
  boxA.setAttribute(
    "style",
    "background-color: rgb(249, 245, 237); color: rgb(173, 131, 81);"
  );
  let boxB = document.querySelector(".b");
  boxB.setAttribute(
    "style",
    "background-color: rgb(249, 245, 237); color: rgb(173, 131, 81);"
  );
  let boxC = document.querySelector(".c");
  boxC.setAttribute(
    "style",
    "background-color: rgb(173, 131, 81); color: rgb(249, 245, 237)"
  );
  let boxD = document.querySelector(".d");
  boxD.setAttribute(
    "style",
    "background-color: rgb(249, 245, 237); color: rgb(173, 131, 81);"
  );
  let boxE = document.querySelector(".e");
  boxE.setAttribute(
    "style",
    "background-color: rgb(173, 131, 81); color: rgb(249, 245, 237)"
  );
}

function displayClassicTheme(event) {
  event.preventDefault();
  let boxZ = document.querySelector(".z");
  boxZ.setAttribute("style", "all: revert");
  let boxX = document.querySelector(".x");
  boxX.setAttribute("style", "all: revert");
  let boxA = document.querySelector(".a");
  boxA.setAttribute("style", "all: revert");
  let boxB = document.querySelector(".b");
  boxB.setAttribute("style", "all: revert");
  let boxC = document.querySelector(".c");
  boxC.setAttribute("style", "all: revert");
  let boxD = document.querySelector(".d");
  boxD.setAttribute("style", "all: revert");
  let boxE = document.querySelector(".e");
  boxE.setAttribute("style", "all: revert");
}

function displayLondon(event) {
  event.preventDefault();
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayMadrid(event) {
  event.preventDefault();
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displaySeoul(event) {
  event.preventDefault();
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayTokyo(event) {
  event.preventDefault();
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayParis(event) {
  event.preventDefault();
  let apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

let londonElement = document.querySelector("#london");
londonElement.addEventListener("click", displayLondon);

let madridElement = document.querySelector("#madrid");
madridElement.addEventListener("click", displayMadrid);

let seoulElement = document.querySelector("#seoul");
seoulElement.addEventListener("click", displaySeoul);

let tokyoElement = document.querySelector("#tokyo");
tokyoElement.addEventListener("click", displayTokyo);

let parisElement = document.querySelector("#paris");
parisElement.addEventListener("click", displayParis);

let changeGreenElement = document.querySelector("#limeTheme");
changeGreenElement.addEventListener("click", displayLimeTheme);

let changeBlueElement = document.querySelector("#blueTheme");
changeBlueElement.addEventListener("click", displayBlueTheme);

let changePinkElement = document.querySelector("#pinkTheme");
changePinkElement.addEventListener("click", displayPinkTheme);

let changeBrownElement = document.querySelector("#brownTheme");
changeBrownElement.addEventListener("click", displayBrownTheme);

let changeClassicElement = document.querySelector("#classicTheme");
changeClassicElement.addEventListener("click", displayClassicTheme);

let toCurrentLocation = document.querySelector("#currentLocationButton");
toCurrentLocation.addEventListener("click", getCurrentPosition);

let celsiusLinkElement = document.querySelector("#celsiusLink");
celsiusLinkElement.addEventListener("click", displayCelciusTemperature);

let fahrenheitLinkElement = document.querySelector("#fahrenheitLink");
fahrenheitLinkElement.addEventListener("click", displayFahrenheitTemperature);

let celsiusTemperature = null;

search("London");
