
// API key for OMBD
var omdbKey = "8f91bbc4"

// API key for Marvel
var marvelKey = "0265e94d30e0db384ca95fcdc7644186"

// user input keyword
var userInput = document.getElementById('user-input').value

// drop down menu for selective api searches
var searchParameter = document.getElementById('search-params').value

// search button call
var searchBtn = document.getElementById('search-btn')



// the queryurl below needs user input \/
// fetch(`http://www.omdbapi.com/?t=iron+man&apikey=${omdbKey}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     }
//     )


fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${marvelKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    }
    )




//  bespoke fetch functions for each of the search parameters
function mcuFetcher() {

    if (searchParameter.value === 'mcu') {
        fetch(`http://www.omdbapi.com/?t=` + userInput + `&apikey=${omdbKey}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        }
        )
    }
    
}






// array of Marvel search terms allowed