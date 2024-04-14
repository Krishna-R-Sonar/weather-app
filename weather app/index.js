const apiKey = "d3d0d9a3c8a4e4538efcc96c324456a5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //fetching data from the API

  if(response.status == 404){
    document.querySelector('.error').Style.display = "block";
    document.querySelector('.weather').Style.display = "none";
  } else {
    var data = await response.json(); //converting the response to JSON format


  /* document.getElementById("city").innerHTML = `${data.name}, ${data.sys.country}`;
    document.getElementById("dateTime").innerHTML = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    document.getElementById("date").innerHTML = new Date().toLocaleDateString() ;
    document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)} &#176;`;
    document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
    document.getElementById("desc").innerHTML = `<img src="icons/${data.weather[0].icon}.png"> ${data.weather[0].description}`;
    document.getElementById("desc").innerHTML = `<img src="icons/${data.weather[0].icon}.png"> ${data.weather[0].description}`;
    document.getElementById("desc").innerHTML = `<span>${data.weather[0].description}</span>`;

    let icon = document.createElement('img');
  */

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector('.weather').Style.display="block";
  document.querySelector('.error').Style.display='none';

  }
  }

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
