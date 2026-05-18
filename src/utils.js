import { format, add } from "date-fns";

import clearDay from "./assets/icons/clear-day.svg";
import clearNight from "./assets/icons/clear-night.svg";
import cloudy from "./assets/icons/cloudy.svg";
import fog from "./assets/icons/fog.svg";
import hail from "./assets/icons/hail.svg";
import rain from "./assets/icons/rain.svg";
import rainSnow from "./assets/icons/rain-snow.svg";
import rainSnowShowersDay from "./assets/icons/rain-snow-showers-day.svg";
import rainSnowShowersNight from "./assets/icons/rain-snow-showers-night.svg";
import showersDay from "./assets/icons/showers-day.svg";
import showersNight from "./assets/icons/showers-night.svg";
import sleet from "./assets/icons/sleet.svg";
import snow from "./assets/icons/snow.svg";
import snowShowersDay from "./assets/icons/snow-showers-day.svg";
import snowShowersNight from "./assets/icons/snow-showers-night.svg";
import thunder from "./assets/icons/thunder.svg";
import thunderRain from "./assets/icons/thunder-rain.svg";
import thunderShowersDay from "./assets/icons/thunder-showers-day.svg";
import thunderShowersNight from "./assets/icons/thunder-showers-night.svg";
import wind from "./assets/icons/wind.svg";
import partlyCloudyDay from "./assets/icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./assets/icons/partly-cloudy-night.svg";

export const icons = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy,
  fog,
  hail,
  rain,
  "rain-snow": rainSnow,
  "rain-snow-showers-day": rainSnowShowersDay,
  "rain-snow-showers-night": rainSnowShowersNight,
  "showers-day": showersDay,
  "showers-night": showersNight,
  sleet,
  snow,
  "snow-showers-day": snowShowersDay,
  "snow-showers-night": snowShowersNight,
  thunder,
  "thunder-rain": thunderRain,
  "thunder-showers-day": thunderShowersDay,
  "thunder-showers-night": thunderShowersNight,
  wind,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
};

export function fahrenheitToCelsius(f) {
    let c =  5 * (f - 32) / 9;
    c = Math.round(c);
    return `${c}°`;
}

export function roundFahrenheit(f) {
    return `${Math.round(f)}°`;
}

export function formatHour(hour) {

    const date = new Date();

    date.setHours(hour, 0);

    return format(date, "p");
}

export function formatDayName(index) {

    if (index === 0) {
        return "Today";
    }

    return format(
        add(new Date(), { days: index }),
        "EEEE"
    );
}

export function formatTime(time) {

    const [hour, minute] =
        time.split(":");

    const date = new Date();

    date.setHours(hour, minute);

    return format(date, "p");
}