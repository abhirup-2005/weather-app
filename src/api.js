const visualCrossingApi = "PVF9DMYCJFKQCHQXC64PXG5LJ";

export async function getWeatherData(cityName) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${visualCrossingApi}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Weather API Error: ${response.status}`);
    }

    return await response.json();
}

export async function getAQIData(lat, lon) {

    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=us_aqi`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`AQI API Error: ${response.status}`);
    }

    return await response.json();
}