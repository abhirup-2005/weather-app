import { fahrenheitToCelsius, icons, formatHour, formatDayName } from "./utils.js";

const hourlyContainer = document.querySelector(".hourly-container");

const weeklyContainer = document.querySelector(".weekly-container");

export function renderForecast( weatherData, index) {
    renderHourly( weatherData, index);
    renderWeekly(weatherData);
}

function renderHourly(weatherData, index) {
    hourlyContainer.textContent = "";

    const todayHours = weatherData.days[index].hours;
    const nextDayHours = weatherData.days[index + 1]?.hours;
    const currentHour = new Date().getHours();

    // FOR TODAY
    if (index === 0) {
        //Today Part
        for (let i = currentHour; i < 24; i++) {
            createHourCard(todayHours[i], i);
        }
        // Tomorrow Part
        for (let i = 0; i < currentHour; i++) {
            createHourCard(nextDayHours[i], i);
        }
        return;
    }

    // OTHER DAYS

    for (let i = 0; i < 24; i++) {
        createHourCard(todayHours[i], i);
    }
}

function createHourCard(hour, hourIndex) {
    const card = document.createElement("div");
    card.classList.add("hour-card");
    card.innerHTML = `
        <p>${fahrenheitToCelsius(hour.temp)}</p>
        <img src="${icons[hour.icon]}">
        <p>${formatHour(hourIndex)}</p>
    `;

    hourlyContainer.appendChild(card);
}

function renderWeekly(weatherData) {

    weeklyContainer.textContent = "";

    weatherData.days.slice(0, 7).forEach((day, index) => {

            const card = document.createElement("div");
            card.classList.add("week-card");
            card.dataset.index = index;
            card.innerHTML = `
                <div class="week-left">
                    <p>${formatDayName(index)}</p>
                </div>
                <img src="${icons[day.icon]}">
                <div class="week-right">
                    <p>
                        ${fahrenheitToCelsius(day.tempmax)}
                        /
                        ${fahrenheitToCelsius(day.tempmin)}
                    </p>
                </div>
            `;

            weeklyContainer.appendChild(card);
        });
}