async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoLocation(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f132e2d5df2dbec9e0d9df5a4fd11067`
  );

  const data = await response.json();
  document.getElementById("weatherDiv").innerHTML = `<div>
            <p>Temperature: ${(data.main.temp - 273.14).toFixed(2)}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
          </div>
          <img
            src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@4x.png"
            alt="WeatherIcon"
          />`;
}
async function getGeoLocation(city) {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=f132e2d5df2dbec9e0d9df5a4fd11067`
  );

  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon }; //variable names can not be changed here
}
