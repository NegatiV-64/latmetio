const apiKeysArray = [
  "cac3427ab24f44b470779f0a8efa25e3",
  "e84adc806b12a31f9bc35657d74a931e",
  "dd151471f1a82230bb263903e418bf7b",
  "7d44fca2d125a7eb98dcbcf42f38e757",
  "96fd9bf8f54700190b83b28c5019174b"
]

const currentCity = document.getElementById('currentCity');
const openWeatherCode = currentCity.getAttribute('open-weather-code');
const hydrometCode = currentCity.getAttribute("hydromet-code")

const apiGenerator = (cityCode) => {
  let apiKey = "default";

  switch (cityCode) {
    case "Tashkent":
      apiKey = apiKeysArray[0];
      break;

    case "Andijan":
      apiKey = apiKeysArray[1];
      break;

    case "Bukhara":
      apiKey = apiKeysArray[2];
      break;

    case "Fergana":
      apiKey = apiKeysArray[3];
      break;

    case "Gulistan":
      apiKey = apiKeysArray[4];
      break;

    case "Jizzakh":
      apiKey = apiKeysArray[0];
      break;

    case "Qarshi":
      apiKey = apiKeysArray[1];
      break;

    case "Namangan":
      apiKey = apiKeysArray[2];
      break;

    case "Navoiy":
      apiKey = apiKeysArray[3];
      break;

    case "Nukus":
      apiKey = apiKeysArray[4];
      break;

    case "Samarkand":
      apiKey = apiKeysArray[0];
      break;

    case "Termez":
      apiKey = apiKeysArray[1];
      break;

    case "Urgench":
      apiKey = apiKeysArray[2];
      break;

    default:
      apiKey = "default";
      break;
  }

  return apiKey;
}

const apiKey = apiGenerator(openWeatherCode);

const todayIconsConverter = (icon) => {
  // Variables for return object
  let weatherIcon = null;
  let backType = null;
  let fontColor = null;
  let spanColor = null;
  let boxColor = null;

  const currentHour = new Date().getHours();

  // Night Background
  if (currentHour < 6 || currentHour > 22) {
    switch (icon) {
      case "01n":
        weatherIcon = "ri-moon-fill";
        backType = "body__back_01n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "02n":
        weatherIcon = "ri-moon-cloudy-fill";
        backType = "body__back_02n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "03n":
        weatherIcon = "ri-cloudy-fill";
        backType = "body__back_03n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "04n":
        weatherIcon = "ri-cloudy-2-fill";
        backType = "body__back_04n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "09n":
        weatherIcon = "ri-heavy-showers-fill";
        backType = "body__back_09n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "10n":
        weatherIcon = "ri-showers-fill";
        backType = "body__back_10n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "11n":
        weatherIcon = "ri-thunderstorms-fill";
        backType = "body__back_11n";
        fontColor = "color_picker_black";
        spanColor = "color_span_black";
        boxColor = "black_shadow";
        break;

      case "13n":
        weatherIcon = "ri-snowy-fill";
        backType = "body__back_13n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "50n":
        weatherIcon = "ri-foggy-fill";
        backType = "body__back_50n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;

      case "01d":
        weatherIcon = "ri-moon-fill";
        backType = "body__back_01n"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "02d":
        weatherIcon = "ri-moon-cloudy-fill";
        backType = "body__back_02n"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "03d":
        weatherIcon = "ri-cloudy-fill";
        backType = "body__back_03n"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "04d":
        weatherIcon = "ri-cloudy-2-fill";
        backType = "body__back_04n";
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "09d":
        weatherIcon = "ri-heavy-showers-fill";
        backType = "body__back_09n"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "10d":
        weatherIcon = "ri-showers-fill";
        backType = "body__back_10n"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "11d":
        weatherIcon = "ri-thunderstorms-fill";
        backType = "body__back_11n"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "black_shadow";
        break;

      case "13d":
        weatherIcon = "ri-snowy-fill";
        backType = "body__back_13n"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "50d":
        weatherIcon = "ri-foggy-fill";
        backType = "body__back_50n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      default:
        weatherIcon = "ri-moon-fill";
        backType = "body__back_01n";
        fontColor = "color_picker_white";
        spanColor = "color_span_white";
        boxColor = "black_shadow";
        break;
    }
  }
  // Daytime Background
  else {
    switch (icon) {
      case "01d":
        weatherIcon = "ri-sun-fill";
        backType = "body__back_01d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "02d":
        weatherIcon = "ri-sun-cloudy-fill";
        backType = "body__back_02d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "03d":
        weatherIcon = "ri-cloudy-fill";
        backType = "body__back_03d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "04d":
        weatherIcon = "ri-cloudy-2-fill";
        backType = "body__back_04d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "09d":
        weatherIcon = "ri-heavy-showers-fill";
        backType = "body__back_09d"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "10d":
        weatherIcon = "ri-showers-fill";
        backType = "body__back_10d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "11d":
        weatherIcon = "ri-thunderstorms-fill";
        backType = "body__back_11d"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "13d":
        weatherIcon = "ri-snowy-fill";
        backType = "body__back_13d"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "50d":
        weatherIcon = "ri-foggy-fill";
        backType = "body__back_50d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "01n":
        weatherIcon = "ri-sun-fill";
        backType = "body__back_01d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "02n":
        weatherIcon = "ri-sun-cloudy-fill";
        backType = "body__back_02d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "03n":
        weatherIcon = "ri-cloudy-fill";
        backType = "body__back_03d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "04n":
        weatherIcon = "ri-cloudy-2-fill";
        backType = "body__back_04d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "09n":
        weatherIcon = "ri-heavy-showers-fill";
        backType = "body__back_09d"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "10n":
        weatherIcon = "ri-showers-fill";
        backType = "body__back_10d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      case "11n":
        weatherIcon = "ri-thunderstorms-fill";
        backType = "body__back_11d"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "13n":
        weatherIcon = "ri-snowy-fill";
        backType = "body__back_13d"
        fontColor = "color_picker_white"
        spanColor = "color_span_white"
        boxColor = "black_shadow";
        break;

      case "50n":
        weatherIcon = "ri-foggy-fill";
        backType = "body__back_50d"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;

      default:
        weatherIcon = "ri-rainbow-fill"
        backType = "body__back_def"
        fontColor = "color_picker_black"
        spanColor = "color_span_black";
        boxColor = "white_shadow";
        break;
    }
  }
  return { weatherIcon, backType, fontColor, spanColor, boxColor }
}

const clock = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();

  if (currentMinutes < "10") {
    currentMinutes = '0' + currentMinutes;
  }

  document.querySelector('.nav__time').innerHTML = `${currentHour}:${currentMinutes}`

  setTimeout(() => clock(), 1000);
}

const avegareNum = (num1, num2) => Math.round((+num1 + +num2) / 2);

const dynamicStylesHandler = (backType, fontColor, spanColor, boxColor) => {
  // Changing Background of the Body Element
  const websiteBody = document.querySelector('.body__back');
  websiteBody.classList.add(`${backType}`);
  // Changing the Font Color of the elements:
  const colorElements = document.querySelectorAll('.color_picker');
  for (let index = 0; index < colorElements.length; index++) {
    const singleElement = colorElements[index];
    singleElement.classList.add(`${fontColor}`);
  }
  // Changind Burger Menu color
  const burgerElements = document.querySelectorAll('.color_span');
  for (let index = 0; index < burgerElements.length; index++) {
    const spanElement = burgerElements[index];
    spanElement.classList.add(`${spanColor}`)
  }
  // Changing Side Menu Color:
  const sideMenu = document.querySelector('.menu');
  sideMenu.classList.add(`${backType}`)
  // Редактирование box-shadow
  const boxShadow = document.querySelectorAll('.box_picker');
  for (let index = 0; index < boxShadow.length; index++) {
    const boxElement = boxShadow[index];
    boxElement.classList.add(`${boxColor}`)
  }
}

const forecastIconsConverter = (type) => {
  let forecastText = null;
  let forecastIcon = null;

  switch (type) {
    case "rain":
      forecastText = "Дождь";
      forecastIcon = "ri-rainy-fill"
      break;

    case "light_rain":
      forecastText = "Небольшой дождь";
      forecastIcon = "ri-drizzle-fill"
      break;

    case "clear":
      forecastText = "Ясно";
      forecastIcon = "ri-sun-fill"
      break;

    case "mostly_clear":
      forecastText = "Небольшая облачность";
      forecastIcon = "ri-sun-foggy-fill"
      break;

    case "partly_cloudy":
      forecastText = "Переменная облачность";
      forecastIcon = "ri-sun-cloudy-fill"
      break;

    case "mostly_cloudy":
      forecastText = "В основном облачно";
      forecastIcon = "ri-cloudy-2-fill"
      break;

    case "overcast":
      forecastText = "Облачно";
      forecastIcon = "ri-cloudy-fill"
      break;

    case "fog":
      forecastText = "Туман";
      forecastIcon = "ri-foggy-fill"
      break;

    case "heavy_rain":
      forecastText = "Сильный дождь";
      forecastIcon = "ri-heavy-showers-fill"
      break;

    case "thunderstorm":
      forecastText = "Гроза";
      forecastIcon = "ri-thunderstorms-fill"
      break;

    case "light-sleet":
      forecastText = "Небольшие осадки";
      forecastIcon = "ri-hail-fill"
      break;

    case "sleet":
      forecastText = "Возможны осадки";
      forecastIcon = "ri-showers-fill"
      break;

    case "heavy_sleet":
      forecastText = "Сильные осадки";
      forecastIcon = "ri-heavy-showers-fill"
      break;

    case "light_snow":
      forecastText = "Небольшой снег";
      forecastIcon = "ri-hail-fill"
      break;

    case "snow":
      forecastText = "Снег";
      forecastIcon = "ri-snowy-fill"
      break;

    case "heavy_snow":
      forecastText = "Сильный снег";
      forecastIcon = "ri-snowy-fill"
      break;

    default:
      forecastText = "Данных нет";
      forecastIcon = "ri-rainbow-fill"
      break;
  }

  return {
    forecastText, forecastIcon
  };
}

const addForecastToDOM = (
  dateDOM, weatherTypeDOM, iconDOM, tempDayDOM, tempNightDOM,
  forecastDate,
  forecastWeatherData,
  tempDayMax, tempDayMin,
  tempNightMax, tempNightMin
) => {
  const dateOptions = { weekday: 'long', month: 'long' };
  const { forecastText, forecastIcon } = forecastIconsConverter(forecastWeatherData);
  const [forecastMonth, forecastWeekDay] = forecastDate.toLocaleDateString('ru-Ru', dateOptions).split(" ")

  const forecastDateHTML = document.querySelector(dateDOM);
  forecastDateHTML.innerHTML = `${forecastWeekDay}, ${forecastDate.getDate()} ${forecastMonth}`;

  const forecastIconHTML = document.querySelector(iconDOM);
  forecastIconHTML.classList.add(`${forecastIcon}`)

  const forecastTypeHTML = document.querySelector(weatherTypeDOM);
  forecastTypeHTML.innerHTML = forecastText;

  const forecastTempDayHTML = document.querySelector(tempDayDOM);
  forecastTempDayHTML.innerHTML = avegareNum(tempDayMax, tempDayMin);

  const forecastTempNightHTML = document.querySelector(tempNightDOM);
  forecastTempNightHTML.innerHTML = avegareNum(tempNightMax, tempNightMin);
}

const todayHydrateData = (data) => {
  const currentDate = new Date();
  const dateOptions = { weekday: 'long', month: 'long' };
  const [currentMonth, currentWeekDay] = currentDate.toLocaleDateString('ru-Ru', dateOptions).split(" ")

  const currentDataHTML = document.querySelector('.weather-content__uptitle');
  const currentMonthDay = currentDate.getDate();
  let minutes = currentDate.getMinutes();

  if (minutes < "10") {
    minutes = '0' + minutes;
  }

  // Display Current Day Date Information
  currentDataHTML.innerText = `${currentWeekDay}, ${currentMonthDay} ${currentMonth}`

  // Displaying Current Weather Temperature
  const currentWeatherTemp = document.querySelector('.weather-content__temp');
  currentWeatherTemp.innerHTML = `${Math.round(data.main.temp)}°`;
  // Displaying Current Weather Type
  const currentWeatherType = document.querySelector('.weather-info__type');
  currentWeatherType.innerHTML = data.weather[0].description;
  // Displaying Current Weather Feels like
  const currentWeatherFeels = document.querySelector('.weather-info__feel');
  currentWeatherFeels.innerHTML = `Чувствуется как ${data.main.feels_like.toFixed(1)}°`;
  // Displaying Current Weather Icon
  const currentWeatherIcon = document.querySelector('.weather-content__icon');
  const { weatherIcon, backType, fontColor, spanColor, boxColor } = todayIconsConverter(data.weather[0].icon);
  currentWeatherIcon.classList.add(`${weatherIcon}`);
  // Displaying dynamic elements styling
  dynamicStylesHandler(backType, fontColor, spanColor, boxColor)
}

const forecastHydrateData = (data) => {
  const dayDateArray = data.map(day => day.date);
  const dayPartArray = data.map(day => day.day_part);
  const dayMaxTempArray = data.map(day => day.air_t_max);
  const dayMinTempArray = data.map(day => day.air_t_min);
  const dayWeatherType = data.map(day => day.icon);
  console.log(dayDateArray)
  console.log(dayPartArray);
  console.log(dayWeatherType);
  console.log(dayMaxTempArray);
  console.log(dayMinTempArray);

  // Adding todayForecast
  addForecastToDOM(
    ".weather-card-left__date_today",
    ".weather-card-left__weather_today",
    ".weather-card-right__icon_today",
    ".weather-card-right__tempDay_today",
    ".weather-card-right__tempNight_today",
    new Date(),
    dayWeatherType[1],
    dayMaxTempArray[1],
    dayMinTempArray[1],
    dayMaxTempArray[0],
    dayMinTempArray[0]
  )
  // Adding day1Forecast
  addForecastToDOM(
    ".weather-card-left__date_tomorrow",
    ".weather-card-left__weather_tomorrow",
    ".weather-card-right__icon_tomorrow",
    ".weather-card-right__tempDay_tomorrow",
    ".weather-card-right__tempNight_tomorrow",
    new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 1),
    dayWeatherType[3],
    dayMaxTempArray[3],
    dayMinTempArray[3],
    dayMaxTempArray[2],
    dayMinTempArray[2]
  )
  // Adding day2Forecast
  addForecastToDOM(
    ".weather-card-left__date_aftertomorrow",
    ".weather-card-left__weather_aftertomorrow",
    ".weather-card-right__icon_aftertomorrow",
    ".weather-card-right__tempDay_aftertomorrow",
    ".weather-card-right__tempNight_aftertomorrow",
    new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 2),
    dayWeatherType[5],
    dayMaxTempArray[5],
    dayMinTempArray[5],
    dayMaxTempArray[4],
    dayMinTempArray[4]
  )
  // Adding day3Forecast
  addForecastToDOM(
    ".weather-card-left__date_day3",
    ".weather-card-left__weather_day3",
    ".weather-card-right__icon_day3",
    ".weather-card-right__tempDay_day3",
    ".weather-card-right__tempNight_day3",
    new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 3),
    dayWeatherType[7],
    dayMaxTempArray[7],
    dayMinTempArray[7],
    dayMaxTempArray[6],
    dayMinTempArray[6]
  )
}

async function main() {
  const openWeatherDataHandler = async () => {
    // const openWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${openWeatherCode}&appid=${apiKey}&units=metric&lang=ru`;
    const openWeatherApiUrl = `../test/dummyCurrent.json`;
    const response = await fetch(openWeatherApiUrl)

    if (!response.ok) {
      return {
        status: false,
        weatherData: []
      }
    }

    const weatherData = await response.json();
    return {
      status: true,
      weatherData
    }
  }

  const { status, weatherData } = await openWeatherDataHandler();

  if (!status) {
    alert("Произошла ошибка при загрузке данных")
    return;
  }

  clock();
  todayHydrateData(weatherData);

  const hydrometWeatherDataHandler = async () => {
    // const response = await fetch(`https://www.meteo.uz/index.php/forecast/city?city=${hydrometCode}&expand=city`)
    const response = await fetch(`../test/dummyHydro.json`)

    if (!response.ok) {
      return {
        status: false,
        weatherData: []
      }
    }

    const result = await response.json();
    result.reverse();

    return {
      status: true,
      weatherData: result
    }
  }

  const { status: hydroStatus, weatherData: hydroWeatherData } = await hydrometWeatherDataHandler();
  if (!hydroStatus) {
    alert("Произошла ошибка при загрузке данных")
    return;
  }
  forecastHydrateData(hydroWeatherData)
}

main();