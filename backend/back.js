const apiKeysArray = [
  "cac3427ab24f44b470779f0a8efa25e3",
  "e84adc806b12a31f9bc35657d74a931e",
  "dd151471f1a82230bb263903e418bf7b",
  "7d44fca2d125a7eb98dcbcf42f38e757",
  "96fd9bf8f54700190b83b28c5019174b"
]

const city = document.querySelector('#settings_city');
const inputVal = city.getAttribute('data-wcity');
let apiKey = "default";

switch (inputVal) {
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

function mainApiCall() {

  const WeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric&lang=ru`;

  fetch(WeatherApiUrl)
    .then(response => response.json())
    .then(data => {
      // Конвертер из UNIX в нормальное время
      function unixFormatter(unixTime) {
        let unix_timestamp = unixTime;
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
      }

      // Выдается сегодняшний восход/заход
      let sunriseTime = unixFormatter(data.sys.sunrise)
      let sunsetTime = unixFormatter(data.sys.sunset)

      // Конвертер дней на русский язык (месяц, день недели)
      function converter(userDay) {
        let dataMonth = userDay.getMonth();
        let dataWeekDay = userDay.getDay();

        var arrayMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        var arrayWeekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

        for (let index = 0; index < arrayMonths.length; index++) {
          if (dataMonth == index) {
            ruMonth = arrayMonths[index];
          }
        }

        for (let index = 0; index < arrayWeekDay.length; index++) {
          if (dataWeekDay == index) {
            ruDay = arrayWeekDay[index];
          }
        }


        const convertedArray = [
          ruMonth, ruDay
        ]

        return convertedArray
      }

      // Конвертирует код иконки из API в иконку/бэк/цвет шрифта
      function todayIconsConverter(icon) {
        // Главные инициализации
        let iconCode = icon;
        weatherIcon = "null";
        backType = "null";
        fontColor = "default";
        spanColor = "default";
        boxColor = "default";
        // Часы дня
        let cDay = new Date;
        let cHours = cDay.getHours();
        // Массив для return
        let todayIconsConverterArray = [];
        // Ночное время
        if (cHours < 6 || cHours > 22) {
          switch (iconCode) {
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

            // На всякий случай дневную засунем
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
        // Дневное время
        else {
          switch (iconCode) {
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

            // Пошел ночной вариант

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
        todayIconsConverterArray = [
          weatherIcon, backType, fontColor, spanColor, boxColor
        ]
        return todayIconsConverterArray
      }

      function todayDayAdd() {
        let currentYear = new Date;
        let currentDataDay = converter(currentYear)
        let currentDataHTML = document.querySelector('.weather-content__uptitle');
        let currentMonthDay = currentYear.getDate();
        let currentHours = currentYear.getHours();
        let tempMinutes = currentYear.getMinutes();

        if (tempMinutes < "10") {
          currentMinutes = '0' + tempMinutes;
        }

        else {
          currentMinutes = tempMinutes;
        }

        // Для часов на главной странице
        function clock() {
          let cTiming = new Date;
          let cTimeHour = cTiming.getHours();
          let cTempMin = cTiming.getMinutes();

          if (cTempMin < "10") {
            cTimeMin = '0' + cTempMin;
          }

          else {
            cTimeMin = cTempMin;
          }

          document.querySelector('.nav__time').innerHTML = `${cTimeHour}:${cTimeMin}`

          setTimeout(() => clock(), 10000);
        }
        clock()

        // Текущий день на русском
        currentDataHTML.innerText = `${currentDataDay[1]}, ${currentMonthDay} ${currentDataDay[0]}`

        // Вывод данных о городе
        let inputCity = document.querySelector('#settings_city');
        let inputHTML = inputCity.innerHTML;
        let weatherCityHTML = document.querySelector('.weather-content__title');
        weatherCityHTML.innerHTML = `${inputHTML}`;

        // Вывод данных о текущей погоде
        let weatherContentTemp = document.querySelector('.weather-content__temp');
        weatherContentTemp.innerHTML = Math.round(data.main.temp) + "°";
        let weatherContentType = document.querySelector('.weather-info__type');
        weatherContentType.innerHTML = data.weather[0].description
        let weatherContentFeels = document.querySelector('.weather-info__feel');
        let weatherDataFeelsLike = data.main.feels_like.toFixed(1);
        weatherContentFeels.innerHTML = `Чувствуется как ${weatherDataFeelsLike}°`;

        // Вывод иконки и замена бэка
        let weatherContentIcon = document.querySelector('.weather-content__icon');
        let websiteBody = document.querySelector('.body__back');

        let weatherContentArray = todayIconsConverter(data.weather[0].icon);

        weatherContentIcon.classList.add(`${weatherContentArray[0]}`);
        websiteBody.classList.add(`${weatherContentArray[1]}`);

        // Добавление цвета текста:
        let colorElements = document.querySelectorAll('.color_picker');
        for (let index = 0; index < colorElements.length; index++) {
          let oneElement = colorElements[index];
          oneElement.classList.add(`${weatherContentArray[2]}`);
        }

        // Добавление цвета для span (бургер-кнопка)
        let burgerElements = document.querySelectorAll('.color_span');
        for (let index = 0; index < burgerElements.length; index++) {
          let spanElement = burgerElements[index];
          spanElement.classList.add(`${weatherContentArray[3]}`)
        }

        // Добавление нужного background для меню:
        let dropMenu = document.querySelector('.menu');
        dropMenu.classList.add(`${weatherContentArray[1]}`)
        // Редактирование box-shadow
        let boxShadow = document.querySelectorAll('.box_picker');
        for (let index = 0; index < boxShadow.length; index++) {
          let boxElement = boxShadow[index];
          boxElement.classList.add(`${weatherContentArray[4]}`)
        }
      }

      todayDayAdd()

      const hydroApiCity = city.getAttribute('data-hcity');;

      $.ajax({
        type: "GET",
        url: `https://www.meteo.uz/index.php/forecast/city?city=${hydroApiCity}&expand=city`,
        dataType: "xml",
        error: function otherviseWork() {
          let additionalApiKey = "96fd9bf8f54700190b83b28c5019174b";
          const weatherForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${additionalApiKey}&units=metric`;
          fetch(weatherForecastURL)
            .then(response => response.json())
            .then(forecast => {
              // Получаю данные и вывожу их в console.log
              console.log(forecast);

              var tomorrowDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
              let tomorrowDayOfMonth = tomorrowDay.getDate();


              let forecastListArray = forecast.list

              let arrayOfHours = []

              for (let index = 0; index < forecastListArray.length; index++) {
                let dateElement = forecastListArray[index].dt_txt;
                let exactDate = dateElement.split(" ")
                let tempArray1 = exactDate[1];
                let tempHour = tempArray1.split(":")
                let exactHour = Number(tempHour[0]) + 3;
                arrayOfHours[index] = exactHour;

              }
              console.log(arrayOfHours);
            })

            .catch(() => {
              console.log('Went Wrong');
            });

        },
        success: function (xml) {
          // ForecastArray = массив от XML где держаться все xml элементы Forecast
          const forecastArray = xml.querySelectorAll('Forecast');

          // Массив для получения данных о дате
          let dayDateArray = [];
          // Массивы для получения данных о времени суток день/ночь
          let dayPartArray = [];

          // Массивы для температур
          let DayMaxTempArray = [];
          let DayMinTempArray = [];

          // Массив для типа погоды
          let DayWeatherType = []

          for (let index = 0; index < forecastArray.length; index++) {
            // elementForecast = массив отдельного Forecast где лежат определенные данные по каждому из замеров
            const elementForecast = forecastArray[index];

            // Данные для получения даты
            const tempDayDate = elementForecast.childNodes[2].childNodes[0].nodeValue;
            dayDateArray[index] = tempDayDate;

            // Данные для получения части дня
            const tempDayPart = elementForecast.childNodes[3].childNodes[0].nodeValue;
            dayPartArray[index] = tempDayPart;

            // Данные для получения типа погоды
            const tempDayWeatherType = elementForecast.childNodes[15].childNodes[0].nodeValue;
            DayWeatherType[index] = tempDayWeatherType;

            // Данные для температур минимальных Днем
            const tempDayMinT = elementForecast.childNodes[5].childNodes[0].nodeValue;
            DayMinTempArray[index] = tempDayMinT;
            // Данные для температур максимальных Днем
            const tempDayMaxT = elementForecast.childNodes[6].childNodes[0].nodeValue;
            DayMaxTempArray[index] = tempDayMaxT;
          }

          function converter(userDay) {
            let dataMonth = userDay.getMonth();
            let dataWeekDay = userDay.getDay();

            var arrayMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            var arrayWeekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

            for (let index = 0; index < arrayMonths.length; index++) {
              if (dataMonth == index) {
                ruMonth = arrayMonths[index];
              }
            }

            for (let index = 0; index < arrayWeekDay.length; index++) {
              if (dataWeekDay == index) {
                ruDay = arrayWeekDay[index];
              }
            }


            const convertedArray = [
              ruMonth, ruDay
            ]

            return convertedArray
          }

          function addingContent() {
            // СЕГОДНЯ
            let currentYear = new Date;
            let currentDataDay = converter(currentYear)
            let currentMonthDay = currentYear.getDate();

            // Функция для вывода средней t погоды
            function avegareNum(num1, num2) {
              let holder1 = parseInt(num1, 10);
              let holder2 = parseInt(num2, 10);
              let averageResult = Math.round((holder1 + holder2) / 2);
              return averageResult;
            }

            // Конвертер для погоды от API hydromet.uz
            function weatherTypeConverter(type) {
              typeHTML = "null";
              iconHTML = "ri-rainbow-fill";

              switch (type) {
                case "rain":
                  typeHTML = "Дождь";
                  iconHTML = "ri-rainy-fill"
                  break;

                case "light_rain":
                  typeHTML = "Небольшой дождь";
                  iconHTML = "ri-drizzle-fill"
                  break;

                case "clear":
                  typeHTML = "Ясно";
                  iconHTML = "ri-sun-fill"
                  break;

                case "mostly_clear":
                  typeHTML = "Небольшая облачность";
                  iconHTML = "ri-sun-foggy-fill"
                  break;

                case "partly_cloudy":
                  typeHTML = "Переменная облачность";
                  iconHTML = "ri-sun-cloudy-fill"
                  break;

                case "mostly_cloudy":
                  typeHTML = "В основном облачно";
                  iconHTML = "ri-cloudy-2-fill"
                  break;

                case "overcast":
                  typeHTML = "Облачно";
                  iconHTML = "ri-cloudy-fill"
                  break;

                case "fog":
                  typeHTML = "Туман";
                  iconHTML = "ri-foggy-fill"
                  break;

                case "heavy_rain":
                  typeHTML = "Сильный дождь";
                  iconHTML = "ri-heavy-showers-fill"
                  break;

                case "thunderstorm":
                  typeHTML = "Гроза";
                  iconHTML = "ri-thunderstorms-fill"
                  break;

                case "light-sleet":
                  typeHTML = "Небольшие осадки";
                  iconHTML = "ri-hail-fill"
                  break;

                case "sleet":
                  typeHTML = "Возможны осадки";
                  iconHTML = "ri-showers-fill"
                  break;

                case "heavy_sleet":
                  typeHTML = "Сильные осадки";
                  iconHTML = "ri-heavy-showers-fill"
                  break;

                case "light_snow":
                  typeHTML = "Небольшой снег";
                  iconHTML = "ri-hail-fill"
                  break;

                case "snow":
                  typeHTML = "Снег";
                  iconHTML = "ri-snowy-fill"
                  break;

                case "heavy_snow":
                  typeHTML = "Сильный снег";
                  iconHTML = "ri-snowy-fill"
                  break;

                default:
                  typeHTML = "Данных нет";
                  iconHTML = "ri-rainbow-fill"
                  break;
              }

              let typeArray = [
                typeHTML, iconHTML
              ]


              return typeArray;
            }

            if (dayDateArray.length >= 8) {
              function todayForecastDay() {
                let weatherTodayWeatherDayHTML = document.querySelector('.weather-card-left__date_today');
                weatherTodayWeatherDayHTML.innerHTML = `${currentDataDay[1]}, ${currentMonthDay} ${currentDataDay[0]}`;
                let todayArray = weatherTypeConverter(DayWeatherType[6]);
                let weatherTodayWeatherIconHTML = document.querySelector('.weather-card-right__icon_today');
                weatherTodayWeatherIconHTML.classList.add(`${todayArray[1]}`)
                let weatherTodayWeatherTypeHMTL = document.querySelector('.weather-card-left__weather_today');
                weatherTodayWeatherTypeHMTL.innerHTML = todayArray[0];
                let weatherTodayDayForecastHTML = document.querySelector('.weather-card-right__tempDay_today');
                weatherTodayDayForecastHTML.innerHTML = avegareNum(DayMaxTempArray[6], DayMinTempArray[6])
                let weatherTodayNightForecastHTML = document.querySelector('.weather-card-right__tempNight_today');
                weatherTodayNightForecastHTML.innerHTML = avegareNum(DayMaxTempArray[7], DayMinTempArray[7])
              }
              todayForecastDay()
              // Вывод данных о погоде на завтра
              function tomorrowForecastDay() {
                var tomorrowDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                let tomorrowConverted = converter(tomorrowDay);
                let tomorrowDayOfMonth = tomorrowDay.getDate();

                let weatherTomorrowWeatherDayHTML = document.querySelector('.weather-card-left__date_tomorrow');
                weatherTomorrowWeatherDayHTML.innerHTML = `${tomorrowConverted[1]}, ${tomorrowDayOfMonth} ${tomorrowConverted[0]}`;
                let tomorrowArray = weatherTypeConverter(DayWeatherType[4]);
                let weatherTomorrowWeatherIconHTML = document.querySelector('.weather-card-right__icon_tomorrow');
                weatherTomorrowWeatherIconHTML.classList.add(`${tomorrowArray[1]}`);
                let weatherTomorrowWeatherTypeHTML = document.querySelector('.weather-card-left__weather_tomorrow');
                weatherTomorrowWeatherTypeHTML.innerHTML = tomorrowArray[0];
                let weatherTommorrowDayForecastHTML = document.querySelector('.weather-card-right__tempDay_tomorrow');
                weatherTommorrowDayForecastHTML.innerHTML = avegareNum(DayMaxTempArray[4], DayMinTempArray[4]);
                let weatherTommorrowNightForecastHTML = document.querySelector('.weather-card-right__tempNight_tomorrow');
                weatherTommorrowNightForecastHTML.innerHTML = avegareNum(DayMaxTempArray[5], DayMinTempArray[5]);
              }
              tomorrowForecastDay();
              // Вывод данных о погоде на послезавтра
              function afterTomorrowForecastDay() {
                var afterTomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 2);
                let afterTomorrowConverted = converter(afterTomorrow);
                let afterTomorrowDayOfMonth = afterTomorrow.getDate();
                // Заполнение даты
                let weatherAfterTomorrowWeatherDayHTML = document.querySelector('.weather-card-left__date_aftertomorrow');
                weatherAfterTomorrowWeatherDayHTML.innerHTML = `${afterTomorrowConverted[1]}, ${afterTomorrowDayOfMonth} ${afterTomorrowConverted[0]}`;
                // Вывод типа погоды и иконки
                let afterTomorrowArray = weatherTypeConverter(DayWeatherType[2]);
                let weatherAfterTomorrowWeatherTypeHTML = document.querySelector('.weather-card-left__weather_aftertomorrow');
                weatherAfterTomorrowWeatherTypeHTML.innerHTML = afterTomorrowArray[0];
                let weatherAfterTomorrowWeatherIconHTML = document.querySelector('.weather-card-right__icon_aftertomorrow');
                weatherAfterTomorrowWeatherIconHTML.classList.add(`${afterTomorrowArray[1]}`);
                // Вывод температуры
                let weatherAfterTommorrowDayForecastHTML = document.querySelector('.weather-card-right__tempDay_aftertomorrow');
                weatherAfterTommorrowDayForecastHTML.innerHTML = avegareNum(DayMaxTempArray[2], DayMinTempArray[2]);
                let weatherAfterTommorrowNightForecastHTML = document.querySelector('.weather-card-right__tempNight_aftertomorrow');
                weatherAfterTommorrowNightForecastHTML.innerHTML = avegareNum(DayMaxTempArray[3], DayMinTempArray[3]);
              }
              afterTomorrowForecastDay();
              // Вывод данных о погоде на 3ий день
              function day3ForecastDay() {
                // Получение даты
                var day3 = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 3);
                let day3Converted = converter(day3);
                let day3DayOfMonth = day3.getDate();
                let weatherDay3DayHTML = document.querySelector('.weather-card-left__date_day3');
                weatherDay3DayHTML.innerHTML = `${day3Converted[1]}, ${day3DayOfMonth} ${day3Converted[0]}`;
                // Вывод типа погоды и иконки 
                let day3Array = weatherTypeConverter(DayWeatherType[0]);
                let weatherDay3WeatherTypeHTML = document.querySelector('.weather-card-left__weather_day3');
                weatherDay3WeatherTypeHTML.innerHTML = day3Array[0];
                let weatherDay3WeatherIconHTML = document.querySelector('.weather-card-right__icon_day3');
                weatherDay3WeatherIconHTML.classList.add(`${day3Array[1]}`);
                // Вывод температуры
                let weatherDay3DayForecastHTML = document.querySelector('.weather-card-right__tempDay_day3');
                weatherDay3DayForecastHTML.innerHTML = avegareNum(DayMaxTempArray[0], DayMinTempArray[0]);
                let weatherDay3NightForecastHTML = document.querySelector('.weather-card-right__tempNight_day3');
                weatherDay3NightForecastHTML.innerHTML = avegareNum(DayMaxTempArray[1], DayMinTempArray[1]);
              }
              day3ForecastDay();
            }

            else if (6 == dayDateArray.length) {
              let reverseDayDateArray = dayDateArray.reverse();
              let revenseDayMaxTempArray = DayMaxTempArray.reverse()
              let revenseDayPartArray = dayPartArray.reverse()
              let reverseDayMinTempArray = DayMinTempArray.reverse()
              let reverseDayWeatherTypeArray = DayWeatherType.reverse()

              // ВЫВОД ДАННЫХ О ПОГОДЕ НА СЕГОДНЯ
              function todayForecastDay() {
                // Вывод даты
                let weatherTodayWeatherDayHTML = document.querySelector('.weather-card-left__date_today');
                weatherTodayWeatherDayHTML.innerHTML = `${currentDataDay[1]}, ${currentMonthDay} ${currentDataDay[0]}`;
                // 
                let todayArray = weatherTypeConverter(reverseDayWeatherTypeArray[1]);
                let weatherTodayWeatherIconHTML = document.querySelector('.weather-card-right__icon_today');
                weatherTodayWeatherIconHTML.classList.add(`${todayArray[1]}`)
                let weatherTodayWeatherTypeHMTL = document.querySelector('.weather-card-left__weather_today');
                weatherTodayWeatherTypeHMTL.innerHTML = todayArray[0];
                let weatherTodayDayForecastHTML = document.querySelector('.weather-card-right__tempDay_today');
                weatherTodayDayForecastHTML.innerHTML = avegareNum(revenseDayMaxTempArray[1], reverseDayMinTempArray[1])
                let weatherTodayNightForecastHTML = document.querySelector('.weather-card-right__tempNight_today');
                weatherTodayNightForecastHTML.innerHTML = avegareNum(revenseDayMaxTempArray[0], reverseDayMinTempArray[0])
              }
              todayForecastDay()
              // ВЫВОД ДАННЫХ О ПОГОДЕ НА ЗАВТРА
              function tomorrowForecastDay() {
                var tomorrowDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                let tomorrowConverted = converter(tomorrowDay);
                let tomorrowDayOfMonth = tomorrowDay.getDate();

                let weatherTomorrowWeatherDayHTML = document.querySelector('.weather-card-left__date_tomorrow');
                weatherTomorrowWeatherDayHTML.innerHTML = `${tomorrowConverted[1]}, ${tomorrowDayOfMonth} ${tomorrowConverted[0]}`;
                let tomorrowArray = weatherTypeConverter(DayWeatherType[3]);
                let weatherTomorrowWeatherIconHTML = document.querySelector('.weather-card-right__icon_tomorrow');
                weatherTomorrowWeatherIconHTML.classList.add(`${tomorrowArray[1]}`);
                let weatherTomorrowWeatherTypeHTML = document.querySelector('.weather-card-left__weather_tomorrow');
                weatherTomorrowWeatherTypeHTML.innerHTML = tomorrowArray[0];
                let weatherTommorrowDayForecastHTML = document.querySelector('.weather-card-right__tempDay_tomorrow');
                weatherTommorrowDayForecastHTML.innerHTML = avegareNum(revenseDayMaxTempArray[3], reverseDayMinTempArray[3]);
                let weatherTommorrowNightForecastHTML = document.querySelector('.weather-card-right__tempNight_tomorrow');
                weatherTommorrowNightForecastHTML.innerHTML = avegareNum(revenseDayMaxTempArray[2], reverseDayMinTempArray[2]);
              }
              tomorrowForecastDay();
              // ВЫВОД ДАННЫХ О ПОГОДЕ НА ПОСЛЕЗАВТРА
              function afterTomorrowForecastDay() {
                var afterTomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 2);
                let afterTomorrowConverted = converter(afterTomorrow);
                let afterTomorrowDayOfMonth = afterTomorrow.getDate();
                // Заполнение даты
                let weatherAfterTomorrowWeatherDayHTML = document.querySelector('.weather-card-left__date_aftertomorrow');
                weatherAfterTomorrowWeatherDayHTML.innerHTML = `${afterTomorrowConverted[1]}, ${afterTomorrowDayOfMonth} ${afterTomorrowConverted[0]}`;
                // Вывод типа погоды и иконки
                let afterTomorrowArray = weatherTypeConverter(reverseDayWeatherTypeArray[5]);
                let weatherAfterTomorrowWeatherTypeHTML = document.querySelector('.weather-card-left__weather_aftertomorrow');
                weatherAfterTomorrowWeatherTypeHTML.innerHTML = afterTomorrowArray[0];
                let weatherAfterTomorrowWeatherIconHTML = document.querySelector('.weather-card-right__icon_aftertomorrow');
                weatherAfterTomorrowWeatherIconHTML.classList.add(`${afterTomorrowArray[1]}`);
                // Вывод температуры
                let weatherAfterTommorrowDayForecastHTML = document.querySelector('.weather-card-right__tempDay_aftertomorrow');
                weatherAfterTommorrowDayForecastHTML.innerHTML = avegareNum(revenseDayMaxTempArray[5], reverseDayMinTempArray[5]);
                let weatherAfterTommorrowNightForecastHTML = document.querySelector('.weather-card-right__tempNight_aftertomorrow');
                weatherAfterTommorrowNightForecastHTML.innerHTML = avegareNum(revenseDayMaxTempArray[4], reverseDayMinTempArray[4]);
              }
              afterTomorrowForecastDay();
              // Вывод данных о погоде на 3ий день
              function day3ForecastDay() {
                // Получение даты
                let day3Container = document.querySelector('.weather-card3');
                day3Container.style.display = "none";
                let day3Title = document.querySelector('.weather-forecast__title_3day');
                day3Title.innerHTML = "Проноз погоды на 2 дня"
              }
              day3ForecastDay();
            }

            else if (2 >= dayDateArray.length) {
              console.log('very small');
            }
          }

          addingContent()
        }
      });

      // AJAX end

    })
    .catch(() => {
      console.log('Went Wrong');
    });
}

try {
  mainApiCall()
}

catch (error) {
  console.log("Went Wrong");
}