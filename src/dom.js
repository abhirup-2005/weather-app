import { fahrenheitToCelsius, icons, formatDayName, formatTime, backgroundVideos, roundFahrenheit, isAlpha } from "./utils.js";

const elements = {
    temperature: document.querySelector(".temperature"),
    cityName: document.querySelector(".city-name"),
    wind: document.querySelector(".wind-speed"),
    humidity: document.querySelector(".humidity"),
    feelsLike: document.querySelector(".feels-like"),
    uvIndex: document.querySelector(".uv-index"),
    visibility: document.querySelector(".visibility"),
    pressure: document.querySelector(".pressure"),
    condition: document.querySelector(".condition"),
    date: document.querySelector(".date-time"),
    sunrise: document.querySelector(".sunrise"),
    sunset: document.querySelector(".sunset"),
    icon: document.querySelector(".weather-icon"),
    aqi: document.querySelector(".aqi"),
    bgVideo: document.querySelector(".bg-video"),
};

export function renderCurrentWeather(weatherData, index, unit) {

    const weather = index === 0 ? weatherData.currentConditions : weatherData.days[index];

    elements.temperature.textContent = (unit == "c") ? fahrenheitToCelsius(weather.temp) : roundFahrenheit(weather.temp);

    const locationName = weatherData.resolvedAddress;
    const upperCasedName = isAlpha(locationName.charAt(0))
        ? locationName.charAt(0).toUpperCase() + locationName.slice(1)
        : locationName;
    elements.cityName.textContent = upperCasedName;

    elements.feelsLike.textContent = (unit == "c") ? fahrenheitToCelsius(weather.feelslike) : roundFahrenheit(weather.feelslike);
    elements.humidity.textContent = `${weather.humidity}%`;
    elements.wind.textContent = `${weather.windspeed} km/h`;
    elements.uvIndex.textContent = weather.uvindex;
    elements.visibility.textContent = `${weather.visibility} km`;
    elements.pressure.textContent = `${weather.pressure} hPa`;
    elements.condition.textContent = weather.conditions;
    elements.icon.src = icons[weather.icon];
    elements.date.textContent = formatDayName(index);
    elements.sunrise.textContent = formatTime(weather.sunrise);
    elements.sunset.textContent = formatTime(weather.sunset);
}

export function renderAQI(data) {
    elements.aqi.textContent = data.hourly.us_aqi[0];
}

export function renderVideo(weatherData, index) {
    const weather = index === 0 ? weatherData.currentConditions : weatherData.days[index];
    elements.bgVideo.src = backgroundVideos[weather.icon];
}