// pseudocode

// connect the search button to the API to get or fetch the API data.
    // * get the API working.
    // * set up the https search query for the current weather.
    // * set up the https search query for the 5-day forecast.
// Display the search results in the aside section and the most recent search in the main section or the clicked on button in the history in the aside section.
// the search query will return the city name and the required data for the current weather and also another set of data displaying the 5-day Forecast.

// to catch an error
// .catch(err => console.error(err));



function searchQuery(weatherLocationData) {
    // queryURL is the url we'll use to query the API
    let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    const searchInput = $("#search-input")
      .val()
      .trim();

    let urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";
  
    queryURL = queryURL + searchInput + urlApiKey;
  
console.log(queryURL);

    // console.log("---------------\nURL: " + queryURL + "\n---------------");
    return queryURL;
  }

function locationData() {
    locationQueryURL = "https://api.openweathermap.org/data/2.5/weather?lat="

    let latitude = queryURL.main.lat;

    let longitude = "&lon=" + queryURL.main.lon;

    const urlApiKey = "&appid=" + "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";
    
    newQueryURL = locationQueryURL + latitude + longitude + urlApiKey;

    console.log(newQueryURL)
    return newQueryURL;
}
// // console.log("input")
// function searchHistory(weatherData) {
//     const weatherLocation = weatherData.response[i];
//     const searchHistory = $("#search-history").val();
// for (let i = 0; i < weatherData.response; ) {

// const historyButton = $("<button>").text(weatherLocation);
// searchHistory.appendChild(button)

// }};

historyCount = 0;

function updatePage(locationData) {
    const searchHistory = $("#search-history");

    // console.log(locationData);
    // console.log(searchHistory);

    for (let i = 0; i < locationData.response; i++) {
        const weatherLocation = locationData.response[i];
        
        const historyButton = $("<button>").text(`${historyCount}. ${weatherLocation}`);

        historyButton.on("click", function(){

        })
        const historyList = $("<ul>");
        // const $historyItem = $("<li>").text(`${historyCount}. ${weatherLocation}`);
        // historyList.append(historyCount);
        
        // historyList.append(historyButton);
        historyList.append(historyButton);
        // historyButton.append(historyList);
    }    
    
    locationQueryURL = "https://api.openweathermap.org/data/2.5/weather?lat="

    // locationData = locationData.lat

    let latitude = locationData[0].lat;

    let longitude = "&lon=" + locationData[0].lon;

    urlApiKey =  "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";
    
    const newQueryURL = locationQueryURL + latitude + longitude + urlApiKey;

    console.log(newQueryURL);
    
    // 5 day forecast query
    fiveDayQuery = "api.openweathermap.org/data/2.5/forecast?lat="

    const fiveDayApiKey = "&appid=af6cd0de4ed902410e31681b511a1063"

    const fiveDayData = fiveDayQuery = latitude + longitude + fiveDayApiKey;

    
    


    // return newQueryURL;

//     $.ajax({
//         url: newQueryURL,
//         method: "GET"
//       }).then(function(weatherData) {
// console.log(weatherData) {
//     const locationName = weatherData.name;
//     $("#lcity-name").text(locationName);
//   });

$.ajax({
  url: newQueryURL,
  method: "GET"
}).then(function(weatherData) {
  const cityName = weatherData.name + moment().format(" - Do MMMM YYYY");
  const icon = weatherData.weather[0].icon;
  const weatherDescription = weatherData.weather[0].description;
  const tempFarenheit = "Farenheit: " + weatherData.main.temp;
  const tempFeelsFarenheit = "Feels like: " + weatherData.main.feels_like;
  const wind = "Wind speed: " + weatherData.wind.speed;
  const humidity = "Humidity: " + weatherData.main.humidity;
  document.getElementById("city-name").innerText = cityName;
  document.getElementById("weather-icon").innerHTML = icon;
  document.getElementById("weather-text").innerHTML = weatherDescription;
  document.getElementById("temperature-farenheit").innerText = tempFarenheit;
  document.getElementById("temperature-feels-farenheit").innerText = tempFeelsFarenheit;
  document.getElementById("wind-speed").innerText = wind;
  document.getElementById("humidity").innerText = humidity;

 
});

$.ajax({
  url: fiveDayData,
  method: "GET"
}).then(function(fiveDayWeatherData) {})



};
      

    
    

$("#search-button").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // Empty the region associated with the articles
    // clear();
  
    // Build the query URL for the ajax request to the NYT API
    var queryURL = searchQuery();
  
    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage)
  });
  
// function displayCurrentWeather(current) {
//   document.getElementById("city-name")
//   const cityName = current.main.name;
  
//   current.main.name.innerHTML = cityName

// }


searchQuery();