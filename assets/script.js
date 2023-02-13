// to catch an error
// .catch(err => console.error(err));

var history = [];

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

  const urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";

  // const metricTemp = "&units=metric"

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
  const searchHistory = $("#search-history");

  // console.log(locationData);
  // console.log(searchHistory);

  // for (let i = 0; i < locationData; i++) {
  //   const weatherLocation = locationData[i];

  // Add the current weather location to the stored history

  // Save the updated history to local storage

  // Loop through the stored history and render the buttons

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

    const weatherDescription = weatherData.weather[0].description;
    const tempFarenheit = "Celcius: " + Math.round(weatherData.main.temp);
    const tempFeelsFarenheit = "Feels like: " + Math.round(weatherData.main.feels_like);
    const wind = "Wind speed: " + Math.round(weatherData.wind.speed);
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

    const tomorrowTemp = "Celcius: " + Math.round(fiveDayWeatherData.list[3].main.temp);
    document.getElementById("tomorrow-temp").innerText = tomorrowTemp;

    const tomorrowWind = "Wind: " + Math.round(fiveDayWeatherData.list[3].wind.speed);
    document.getElementById("tomorrow-wind").innerText = tomorrowWind;

    const tomorrowHumidity =
      "Humidity: " + Math.round(fiveDayWeatherData.list[3].main.humidity) + "%";
    document.getElementById("tomorrow-humidity").innerText = tomorrowHumidity;

    // Day 2
    dayTwoDate = moment().add(2, "days").format("dddd");
    document.getElementById("day-two-date").innerText = dayTwoDate;

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

  // history.push(searchInput);

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

// Function to retrieve the saved buttons from local storage
// function renderInput() {
//   for (let i = 9; i < 18; i++) {
//     let textInput = localStorage.getItem("hour-" + i);

//     if (!textInput) {
//       continue;
//     }

//     $(".time-block")
//       .eq(i - 9)
//       .children("input")
//       .val(textInput);
//   }

// }

// function appendToHistory() {
//   history.push("history-btn");

//   renderHistoryButtons();
// }

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

// const historyLocalStorage = [];

// // Function to save the buttons to local storage
// function saveHistoryButtons() {
//   localStorage.setItem("historyButtons", JSON.stringify(historyLocalStorage));
// }

// // Function to retrieve the saved buttons from local storage
// function getHistoryButtons() {
//   return JSON.parse(localStorage.getItem("historyButtons")) || [];
// }

// // // Function to render the history buttons
// // function renderHistoryButtons() {
// //   const searchHistory = $("#search-history");
// //   searchHistory.empty();

// //   const buttons = getHistoryButtons();
// //   for (let i = 0; i < buttons.length; i++) {
// //     const weatherLocation = buttons[i];
// //     const historyButton = $("<button>").text(weatherLocation);
// //     historyButton.on("click", function () {});
// //     const historyList = $("<ul>");
// //     historyList.append(historyButton);
// //     searchHistory.append(historyList);
// //     historyButton.on("click", function () {
// //       const cityName = $(this).data("name");
// //       searchInput.val(cityName);
// //       searchQuery();
// //     });
// //   }
// // }

// // Function to add a button to the history
// function addHistoryButton(location) {
//   history.push(location);
//   saveHistoryButtons();
//   renderHistoryButtons();
// }

// // Call the renderHistoryButtons function to retrieve the saved buttons
// renderHistoryButtons();
