// to catch an error
// .catch(err => console.error(err));

const history = [];

function searchQuery(cityName = null) {
  // queryURL is the url we'll use to query the API
  let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

  let searchInputValue = $("#search-input").val().trim();
  if (cityName) {
    searchInputValue = cityName;
  }

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  const searchInput = $("#search-input").val().trim();

  let urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";

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

  newQueryURL = locationQueryURL + latitude + longitude + urlApiKey;

  console.log(newQueryURL);
  return newQueryURL;
}

historyCount = 0;

function updatePage(locationData) {
  const searchHistory = $("#search-history");

  // console.log(locationData);
  // console.log(searchHistory);

  for (let i = 0; i < locationData; i++) {
    const weatherLocation = locationData[i];

    const historyButton = $("<button>").text(
      `${historyCount}. ${weatherLocation}`
    );

    historyButton.on("click", function () {});
    const historyList = $("<ul>");

    historyList.append(historyButton);

    searchHistory.append(historyList);

    historyButton.on("click", function () {
      const cityName = $(this).data("name");
      searchInput.val(cityName);
      searchQuery();
    });
  }

  locationQueryURL = "https://api.openweathermap.org/data/2.5/weather?lat=";

  let latitude = locationData[0].lat;

  let longitude = "&lon=" + locationData[0].lon;

  urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";

  const newQueryURL = locationQueryURL + latitude + longitude + urlApiKey;

  console.log(newQueryURL);

  // 5 day forecast query
  fiveDayQuery = "https://api.openweathermap.org/data/2.5/forecast?lat=";

  const fiveDayApiKey = "&appid=af6cd0de4ed902410e31681b511a1063";

  const fiveDayData = fiveDayQuery + latitude + longitude + fiveDayApiKey;

  console.log(fiveDayData);

  $.ajax({
    url: newQueryURL,
    method: "GET",
  }).then(function (weatherData) {
    const cityName = weatherData.name + moment().format(" - Do MMMM YYYY");

    const weatherDescription = weatherData.weather[0].description;
    const tempFarenheit = "Farenheit: " + weatherData.main.temp;
    const tempFeelsFarenheit = "Feels like: " + weatherData.main.feels_like;
    const wind = "Wind speed: " + weatherData.wind.speed;
    const humidity = "Humidity: " + weatherData.main.humidity + "%";
    document.getElementById("city-name").innerText = cityName;
    // document.getElementById("weather-icon").innerHTML = icon;
    document.getElementById("weather-text").innerHTML = weatherDescription;
    document.getElementById("temperature-farenheit").innerText = tempFarenheit;
    document.getElementById("temperature-feels-farenheit").innerText =
      tempFeelsFarenheit;
    document.getElementById("wind-speed").innerText = wind;
    document.getElementById("humidity").innerText = humidity;
  });

  $.ajax({
    url: fiveDayData,
    method: "GET",
  }).then(function (fiveDayWeatherData) {
    // Day 1 (tomorrow)
    tomorrowDate = moment().add(1, "days").format("dddd");
    document.getElementById("tomorrow-date").innerText = tomorrowDate;

    const tomorrowTemp = "Farenheit: " + fiveDayWeatherData.list[3].main.temp;
    document.getElementById("tomorrow-temp").innerText = tomorrowTemp;

    const tomorrowWind = "Wind: " + fiveDayWeatherData.list[3].wind.speed;
    document.getElementById("tomorrow-wind").innerText = tomorrowWind;

    const tomorrowHumidity =
      "Humidity: " + fiveDayWeatherData.list[3].main.humidity + "%";
    document.getElementById("tomorrow-humidity").innerText = tomorrowHumidity;

    // Day 2
    dayTwoDate = moment().add(2, "days").format("dddd");
    document.getElementById("day-two-date").innerText = dayTwoDate;

    const dayTwoTemp = "Farenheit: " + fiveDayWeatherData.list[4].main.temp;
    document.getElementById("day-two-temp").innerText = dayTwoTemp;

    const dayTwoWind = "Wind: " + fiveDayWeatherData.list[4].wind.speed;
    document.getElementById("day-two-wind").innerText = dayTwoWind;

    const dayTwoHumidity =
      "Humidity: " + fiveDayWeatherData.list[4].main.humidity + "%";
    document.getElementById("day-two-humidity").innerText = dayTwoHumidity;

    // Day 3
    const dayThreeDate = moment().add(3, "days").format("dddd");
    document.getElementById("day-three-date").innerText = dayThreeDate;

    const dayThreeTemp = "Farenheit: " + fiveDayWeatherData.list[5].main.temp;
    document.getElementById("day-three-temp").innerText = dayThreeTemp;

    const dayThreeWind = "Wind: " + fiveDayWeatherData.list[5].wind.speed;
    document.getElementById("day-three-wind").innerText = dayThreeWind;

    const dayThreeHumidity =
      "Humidity: " + fiveDayWeatherData.list[5].main.humidity + "%";
    document.getElementById("day-three-humidity").innerText = dayThreeHumidity;

    // Day 4
    const dayFourDate = moment().add(4, "days").format("dddd");
    document.getElementById("day-four-date").innerText = dayFourDate;

    const dayFourTemp = "Farenheit: " + fiveDayWeatherData.list[6].main.temp;
    document.getElementById("day-four-temp").innerText = dayFourTemp;

    const dayFourWind = "Wind: " + fiveDayWeatherData.list[6].wind.speed;
    document.getElementById("day-four-wind").innerText = dayFourWind;

    const dayFourHumidity =
      "Humidity: " + fiveDayWeatherData.list[6].main.humidity + "%";
    document.getElementById("day-four-humidity").innerText = dayFourHumidity;

    // Day 5
    const dayFiveDate = moment().add(5, "days").format("dddd");
    document.getElementById("day-five-date").innerText = dayFiveDate;

    const dayFiveTemp = "Farenheit: " + fiveDayWeatherData.list[7].main.temp;
    document.getElementById("day-five-temp").innerText = dayFiveTemp;

    const dayFiveWind = "Wind: " + fiveDayWeatherData.list[7].wind.speed;
    document.getElementById("day-five-wind").innerText = dayFiveWind;

    const dayFiveHumidity =
      "Humidity: " + fiveDayWeatherData.list[7].main.humidity + "%";
    document.getElementById("day-five-humidity").innerText = dayFiveHumidity;
  });
}

$("#search-button").on("click", function (event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();
  const searchInput = $("#search-input").val().trim();

  history.push(searchInput);

  let queryURL = searchQuery();

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then((data) => updatePage(data));

  renderHistoryButtons();

  localStorage.setItem("Search-history", searchInput);
});

function renderHistoryButtons() {
  // Deleting the search history prior to adding new search buttons
  // (this is necessary otherwise you will have repeat buttons)
  $("#search-history").empty();

  // Looping through the array of history
  for (let i = 0; i < history.length; i++) {
    // Then dynamicaly generating buttons for each search made in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of history-btn to the button
    a.addClass("history-btn");
    // Adding a data-attribute
    a.attr("data-name", history[i]);
    // Providing the initial button text
    a.text(history[i]);
    // Adding the button to the #search-history div
    $("#search-history").append(a);
  }
}

function appendToHistory() {
  history.push("history-btn");

  renderHistoryButtons();
}

$(document).on("click", ".history-btn", function (event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();
  console.log(event.target.getAttribute("data-name"));

  const searchInput = event.target.getAttribute("data-name");

  let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=";

  queryURL = queryURL + searchInput + urlApiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then((data) => {
    $(updatePage(data));
  });
});



searchQuery();
