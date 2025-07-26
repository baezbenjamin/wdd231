const currentWeatherCard = document.querySelector("#current-weather");
const weatherForecastCard = document.querySelector("#weather-forecast");

const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.25&lon=-57.49&appid=b5340ac44c6bf72997251db9a10cfb3a&units=metric';
const weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-25.25&lon=-57.49&appid=b5340ac44c6bf72997251db9a10cfb3a&units=metric';

async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchCurrentWeather();

async function fetchWeatherForecast() {
    try {
        const response = await fetch(weatherForecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

fetchWeatherForecast()

function displayCurrentWeather(data) {
    
    let weatherIcon = document.createElement('img');
    let currentTemp = document.createElement('p');
    let desc = document.createElement('p');
    let high = document.createElement('p');
    let low = document.createElement('p');
    let humidity = document.createElement('p');
    let sunrise = document.createElement('p');
    let sunset = document.createElement('p');
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main);
    weatherIcon.setAttribute("height", "100");
    weatherIcon.setAttribute("width", "auto");
    currentTemp.innerHTML = `<strong>${data.main.temp}</strong>&deg; C`;
    desc.textContent = data.weather[0].description;
    high.textContent = `High: ${data.main.temp_max}`;
    low.textContent = `Low: ${data.main.temp_min}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const sunriseFullDate = new Date(data.sys.sunrise * 1000);
    const sunsetFullDate = new Date(data.sys.sunset * 1000);

    sunrise.textContent = `Sunrise: ${sunriseFullDate.getHours()}:${sunriseFullDate.getMinutes()}am`;
    sunset.textContent = `Sunset: ${sunsetFullDate.getHours()}:${sunsetFullDate.getMinutes()}pm`;

    currentWeatherCard.appendChild(weatherIcon);
    currentWeatherCard.appendChild(currentTemp);
    currentWeatherCard.appendChild(desc);
    currentWeatherCard.appendChild(high);
    currentWeatherCard.appendChild(low);
    currentWeatherCard.appendChild(humidity);
    currentWeatherCard.appendChild(sunrise);
    currentWeatherCard.appendChild(sunset);
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayWeatherForecast(data) {
    let firstDayWeather = document.createElement('p');
    let secondDayWeather = document.createElement('p');
    let thirdDayWeather = document.createElement('p');

    const tomorrow = new Date(data.list[10].dt_txt);
    const aftertomorrow = new Date(data.list[18].dt_txt);

    firstDayWeather.innerHTML = `Today: <strong>${data.list[0].main.temp}</strong>&deg;C`;
    secondDayWeather.innerHTML = `${days[tomorrow.getDay()]}: <strong>${data.list[10].main.temp}</strong>&deg;C`;
    thirdDayWeather.innerHTML = `${days[aftertomorrow.getDay()]}: <strong>${data.list[18].main.temp}</strong>&deg;C`;

    weatherForecastCard.appendChild(firstDayWeather);
    weatherForecastCard.appendChild(secondDayWeather);
    weatherForecastCard.appendChild(thirdDayWeather);
}