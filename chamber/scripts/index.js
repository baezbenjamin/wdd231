const currentWeatherCard = document.querySelector("#current-weather");
const weatherForecastCard = document.querySelector("#weather-forecast");
const spotlights = document.querySelector(".spotlights");

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
    
    let firstDayWeather = document.createElement('p');

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

    firstDayWeather.innerHTML = `Today: <strong>${data.main.temp}</strong>&deg;C`;

    currentWeatherCard.appendChild(weatherIcon);
    currentWeatherCard.appendChild(currentTemp);
    currentWeatherCard.appendChild(desc);
    currentWeatherCard.appendChild(high);
    currentWeatherCard.appendChild(low);
    currentWeatherCard.appendChild(humidity);
    currentWeatherCard.appendChild(sunrise);
    currentWeatherCard.appendChild(sunset);

    weatherForecastCard.appendChild(firstDayWeather);
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayWeatherForecast(data) {
    
    let secondDayWeather = document.createElement('p');
    let thirdDayWeather = document.createElement('p');

    const tomorrow = new Date(data.list[5].dt_txt);
    console.log(tomorrow)
    const aftertomorrow = new Date(data.list[13].dt_txt);
    console.log(aftertomorrow)
    
    secondDayWeather.innerHTML = `${days[tomorrow.getDay()]}: <strong>${data.list[5].main.temp}</strong>&deg;C`;
    thirdDayWeather.innerHTML = `${days[aftertomorrow.getDay()]}: <strong>${data.list[13].main.temp}</strong>&deg;C`;

    weatherForecastCard.appendChild(secondDayWeather);
    weatherForecastCard.appendChild(thirdDayWeather);
}

async function getMemberData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    console.log(data);
    displayMembers(getThreeMembers(data.members));
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let tag_line = document.createElement('span');
        let logo = document.createElement('img');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = member.name;
        tag_line.setAttribute("class", "tagline");
        tag_line.textContent = member.tag_line;
        logo.setAttribute("src", `images/${member.img}`);
        logo.setAttribute("alt", `${member.name} Logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "100");
        logo.setAttribute("height", "auto");
        email.innerHTML = `<strong>EMAIL: </strong>${member.email}`;
        phone.innerHTML = `<strong>PHONE: </strong>${member.phone_number}`;
        website.setAttribute("href", `${member.website_url}`);
        website.setAttribute("target", "_blank");
        website.textContent = member.website_url;
        url.innerHTML = `<strong>URL:</strong>`;
        
        card.appendChild(name);
        card.appendChild(tag_line);
        card.appendChild(logo);
        card.appendChild(email);
        card.appendChild(phone);
        url.appendChild(website);
        card.appendChild(url);

        spotlights.appendChild(card);
    })
}

function getThreeMembers(members) {
    let membersSilverGold = [];
    
    for (let i = 0; i < members.length; i++) {
        if (members[i].membership_level != "1") {
            membersSilverGold.push(members[i]);
        }
    }
    
    let justThree = []
    
    for (let j = 0; j < 3; j++) {
        randomNumber = Math.floor(Math.random() * membersSilverGold.length);
        justThree.push(membersSilverGold[randomNumber]);
        membersSilverGold.splice(randomNumber, 1);
    }
    
    return justThree;
}

