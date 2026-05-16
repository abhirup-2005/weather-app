import "./style.css";

const searchForm = document.querySelector(".user-input-form");


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = document.querySelector("#city");

    getWeather(city.value.trim());
});

async function getWeather(cityName) {
    try {
        const myApi = "PVF9DMYCJFKQCHQXC64PXG5LJ";
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/?key=${myApi}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Respons not ok");
        else console.log("OK")

        const data = await response.json();
        if (!data) console.log("Didn't get JSON");
        else {
            console.log("Got JSON");
            showDetails(data);
        }

    } catch (err) {
        console.log(err);
    }
}

function showDetails(weatherData) {
    console.log(weatherData);
    console.log(fahrenheitToCelsius(weatherData.currentConditions.temp));
    console.log(`Feels like ${fahrenheitToCelsius(weatherData.currentConditions.feelslike)}`);
    console.log(`Humidity ${weatherData.currentConditions.humidity}%`);
    console.log(`Wind Speed ${weatherData.currentConditions.windspeed} km/h`);

}
function fahrenheitToCelsius(f) {
    let c =  5 * (f - 32) / 9;
    c = Math.round(c * 10) / 10;
    return `${c}°C`;
}