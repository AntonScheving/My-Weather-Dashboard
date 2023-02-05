// pseudocode

// connect the search button to the API to get or fetch the API data.
    // * get the API working.
    // * set up the https search query for the current weather.
    // * set up the https search query for the 5-day forecast.
// Display the search results in the aside section and the most recent search in the main section or the clicked on button in the history in the aside section.
// the search query will return the city name and the required data for the current weather and also another set of data displaying the 5-day Forecast.

// to catch an error
// .catch(err => console.error(err));



function searchQuery() {
    // queryURL is the url we'll use to query the API
    let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    const searchInput = $("#search-input")
      .val()
      .trim();

    const urlApiKey = "&limit=5&appid=af6cd0de4ed902410e31681b511a1063";
  
    queryURL = queryURL + searchInput + urlApiKey;
  
console.log(queryURL);

    // console.log("---------------\nURL: " + queryURL + "\n---------------");
    return queryURL;
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

function updatePage(weatherData) {
    const searchHistory = $("#search-history");

    // console.log(weatherData);
    // console.log(searchHistory);

    for (let i = 0; i < weatherData.response; i++) {
        const weatherLocation = weatherData.response[i];
        
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
}

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
    }).then(updatePage);
  });
  


// function searchQuery() {
// // queryURL is the url we'll use to query the API
// let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=&limit=5&appid=";

// // Begin building an object to contain our API call's query parameters
// // Set the API key
// // const queryApiKey = { q:  "af6cd0de4ed902410e31681b511a1063" };



// queryURL.q.append = $("#search-input", "af6cd0de4ed902410e31681b511a1063")
// .val().trim();

// // queryApiKey.q = $("#search-input")
// // .val().trim();


// console.log(queryApiKey)
// // console.log("---------------\nURL: " + queryURL + "\n---------------");

// //   console.log(queryURL + $.param(queryApiKey));
// //   return queryURL + $.param(queryApiKey);

// }

searchQuery()