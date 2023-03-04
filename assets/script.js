var history = [];

function searchQuery(cityName = null) {
  // queryURL is the url we'll use to query the API
  let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

  if (cityName) {
    searchInputValue = cityName;
  }

  // Set the API key
  const searchInput = $("#search-input").val().trim();

  const urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";

  queryURL = queryURL + searchInput + urlApiKey;


  console.log(queryURL);

  return queryURL;
}

function locationData() {
  locationQueryURL = "https://api.openweathermap.org/data/2.5/weather?lat=";

  let latitude = queryURL.main.lat;

  let longitude = "&lon=" + queryURL.main.lon;

  const urlApiKey =
    "&appid=" + "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";

    

  newQueryURL = locationQueryURL + latitude + longitude + urlApiKey + metricTemp;

  console.log(newQueryURL);
  return newQueryURL;
}

historyCount = 0;
// Load history from local storage
let storedHistory = JSON.parse(localStorage.getItem("history")) || [];

function updatePage(locationData) {

  locationQueryURL = "https://api.openweathermap.org/data/2.5/weather?lat=";

  let latitude = locationData[0].lat;

  let longitude = "&lon=" + locationData[0].lon;

  urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";

  const metricTemp = "&units=metric";

  const newQueryURL = locationQueryURL + latitude + longitude + urlApiKey + metricTemp;

  console.log(newQueryURL);

  // 5 day forecast query
  fiveDayQuery = "https://api.openweathermap.org/data/2.5/forecast?lat=";

  const fiveDayApiKey = "&appid=af6cd0de4ed902410e31681b511a1063";


  const fiveDayData = fiveDayQuery + latitude + longitude + fiveDayApiKey + metricTemp;

  console.log(fiveDayData);

  $.ajax({
    url: newQueryURL,
    method: "GET",
  }).then(function (weatherData) {
    const cityName = weatherData.name + moment().format(" - Do MMMM YYYY");
    document.getElementById("city-name").innerText = cityName;

    const icon = weatherData.weather[0].icon
    document.getElementById("weather-icon").innerHTML = '<img src=https://openweathermap.org/img/wn/' + icon + '@2x.png>';


    const weatherDescription = weatherData.weather[0].description;
    document.getElementById("weather-text").innerHTML = weatherDescription;

    const tempCelsius = "Celcius: " + Math.round(weatherData.main.temp);
        document.getElementById("temperature-celsius").innerText = tempCelsius;

    const tempFeelsCelsius = "Feels like: " + Math.round(weatherData.main.feels_like);
    document.getElementById("temperature-feels-celsius").innerText =
    tempFeelsCelsius;

    const wind = "Wind speed: " + Math.round(weatherData.wind.speed);
    document.getElementById("wind-speed").innerText = wind;

    const humidity = "Humidity: " + weatherData.main.humidity + "%";
    document.getElementById("humidity").innerText = humidity;
  });

  $.ajax({
    url: fiveDayData,
    method: "GET",
  }).then(function (fiveDayWeatherData) {
    // Day 1 (tomorrow)
    dayOneDate = moment().add(1, "days").format("dddd");
    document.getElementById("day-one-date").innerText = dayOneDate;

    const dayOneIcon = fiveDayWeatherData.list[3].weather[0].icon
    document.getElementById("day-one-icon").innerHTML = '<img src=https://openweathermap.org/img/wn/' + dayOneIcon + '.png>';

    const dayOneTemp = "Celcius: " + Math.round(fiveDayWeatherData.list[3].main.temp);
    document.getElementById("day-one-temp").innerText = dayOneTemp;

    const dayOneWind = "Wind: " + Math.round(fiveDayWeatherData.list[3].wind.speed);
    document.getElementById("day-one-wind").innerText = dayOneWind;

    const dayOneHumidity =
      "Humidity: " + Math.round(fiveDayWeatherData.list[3].main.humidity) + "%";
    document.getElementById("day-one-humidity").innerText = dayOneHumidity;

    // Day 2
    dayTwoDate = moment().add(2, "days").format("dddd");
    document.getElementById("day-two-date").innerText = dayTwoDate;

    const dayTwoIcon = fiveDayWeatherData.list[4].weather[0].icon
    document.getElementById("day-two-icon").innerHTML = '<img src=https://openweathermap.org/img/wn/' + dayTwoIcon + '.png>';

    const dayTwoTemp = "Celcius: " + Math.round(fiveDayWeatherData.list[4].main.temp);
    document.getElementById("day-two-temp").innerText = dayTwoTemp;

    const dayTwoWind = "Wind: " + Math.round(fiveDayWeatherData.list[4].wind.speed);
    document.getElementById("day-two-wind").innerText = dayTwoWind;

    const dayTwoHumidity =
      "Humidity: " + Math.round(fiveDayWeatherData.list[4].main.humidity) + "%";
    document.getElementById("day-two-humidity").innerText = dayTwoHumidity;

    // Day 3
    const dayThreeDate = moment().add(3, "days").format("dddd");
    document.getElementById("day-three-date").innerText = dayThreeDate;

    const dayThreeIcon = fiveDayWeatherData.list[5].weather[0].icon
    document.getElementById("day-three-icon").innerHTML = '<img src=https://openweathermap.org/img/wn/' + dayThreeIcon + '.png>';

    const dayThreeTemp = "Celcius: " + Math.round(fiveDayWeatherData.list[5].main.temp);
    document.getElementById("day-three-temp").innerText = dayThreeTemp;

    const dayThreeWind = "Wind: " + Math.round(fiveDayWeatherData.list[5].wind.speed);
    document.getElementById("day-three-wind").innerText = dayThreeWind;

    const dayThreeHumidity =
      "Humidity: " + Math.round(fiveDayWeatherData.list[5].main.humidity) + "%";
    document.getElementById("day-three-humidity").innerText = dayThreeHumidity;

    // Day 4
    const dayFourDate = moment().add(4, "days").format("dddd");
    document.getElementById("day-four-date").innerText = dayFourDate;

    const dayFourIcon = fiveDayWeatherData.list[6].weather[0].icon
    document.getElementById("day-four-icon").innerHTML = '<img src=https://openweathermap.org/img/wn/' + dayFourIcon + '.png>';

    const dayFourTemp = "Celcius: " + Math.round(fiveDayWeatherData.list[6].main.temp);
    document.getElementById("day-four-temp").innerText = dayFourTemp;

    const dayFourWind = "Wind: " + Math.round(fiveDayWeatherData.list[6].wind.speed);
    document.getElementById("day-four-wind").innerText = dayFourWind;

    const dayFourHumidity =
      "Humidity: " + Math.round(fiveDayWeatherData.list[6].main.humidity) + "%";
    document.getElementById("day-four-humidity").innerText = dayFourHumidity;

    // Day 5
    const dayFiveDate = moment().add(5, "days").format("dddd");
    document.getElementById("day-five-date").innerText = dayFiveDate;

    const dayFiveIcon = fiveDayWeatherData.list[7].weather[0].icon
    document.getElementById("day-five-icon").innerHTML = '<img src=https://openweathermap.org/img/wn/' + dayFiveIcon + '.png>';

    const dayFiveTemp = "Celcius: " + Math.round(fiveDayWeatherData.list[7].main.temp);
    document.getElementById("day-five-temp").innerText = dayFiveTemp;

    const dayFiveWind = "Wind: " + Math.round(fiveDayWeatherData.list[7].wind.speed);
    document.getElementById("day-five-wind").innerText = dayFiveWind;

    const dayFiveHumidity =
      "Humidity: " + Math.round(fiveDayWeatherData.list[7].main.humidity) + "%";
    document.getElementById("day-five-humidity").innerText = dayFiveHumidity;
  });
}

$("#search-button").on("click", function (event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();
  let searchInput = $("#search-input").val().trim();

  let queryURL = searchQuery();

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then((data) => updatePage(data));

  // Function to store values in local storage
  function storeValues(searchInput) {
    // Get the current values stored in local storage
    let values = JSON.parse(localStorage.getItem("values")) || [];

    // Add the new value to the values array
    values.push(searchInput);

    // Keep only the last 6 values
    if (values.length > 6) {
      values = values.slice(values.length - 6);
    }

    // Store the updated values in local storage
    localStorage.setItem("values", JSON.stringify(values));
  }

  searchInput = $("#search-input").val().trim();
  storeValues(searchInput); 
  
  renderHistoryButtons();
});

function renderHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)
  $("#search-history").empty();
  let values = JSON.parse(localStorage.getItem("values")) || [];

  // Looping through the array of history
  for (let i = 0; i < values.length; i++) {
    // Then dynamicaly generating buttons for each search made in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of history-btn to the button
    a.addClass("history-btn");
    // Adding a data-attribute
    a.attr("data-name", values[i]);
    // Providing the initial button text
    
    a.text(values[i]);
    // Adding the button to the #search-history div
    $("#search-history").prepend(a);
    // $("#search-history").append(localStorage.getItem("values"));
    
  }
}
renderHistoryButtons()

$(document).on("click", ".history-btn", function (event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();
  console.log(event.target.getAttribute("data-name"));

  const searchInput = event.target.getAttribute("data-name");

  let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

  const urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";


  queryURL = queryURL + searchInput + urlApiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then((data) => {
    $(updatePage(data));
  });
});

searchQuery();
