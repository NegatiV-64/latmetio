const apiKeysArray = [
  "cac3427ab24f44b470779f0a8efa25e3",
  "e84adc806b12a31f9bc35657d74a931e",
  "dd151471f1a82230bb263903e418bf7b",
  "7d44fca2d125a7eb98dcbcf42f38e757",
  "96fd9bf8f54700190b83b28c5019174b"
]

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

const currentCity = document.getElementById('currentCity');
const openWeatherCode = currentCity.getAttribute('open-weather-code');
const hydrometCode = currentCity.getAttribute("hydromet-code")
const apiKey = apiGenerator(openWeatherCode);