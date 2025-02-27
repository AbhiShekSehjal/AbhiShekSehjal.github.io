document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    if (city) {
      getWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  });

  async function getWeather(city) {
    const apiKey = "75c95fd68ff0abde7fccac28cb8abc0f"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const weather = await fetch(`${url}`).then(response => response.json());



  }

  function displayWeather(data) {
    const weatherResult = document.getElementById("weather-result");
    document.getElementById("city-name").innerText = `City: ${data.name}`;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("weather-description").innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} m/s`;

    weatherResult.style.display = "block"; // Show the weather result box
  }