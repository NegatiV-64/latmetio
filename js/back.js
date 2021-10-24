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
const apiKey = apiGenerator(openWeatherCode);

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
  return [weatherIcon, backType, fontColor, spanColor, boxColor]
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

  const currentWeatherFetch = await openWeatherDataHandler();

  clock()
}

main();