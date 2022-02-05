
// API key for OMBD
var omdbKey = "8f91bbc4"

// API key for Marvel
var marvelKey = "0265e94d30e0db384ca95fcdc7644186"

// user input keyword
var userInput = document.getElementById('user-input')

// drop down menu for selective api searches
var searchParameter = document.getElementById('search-params').value

// search button call
var searchBtn = document.getElementById('search-btn')

// card page
var cardPage = document.getElementById('card-page')



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
    );




// search button with event listener
// the function that called the fetch functions based on search params will need to be called here
searchBtn.addEventListener("click", (event)=>{
        event.preventDefault();
      const userSearch = userInput.value
      mcuFetcher(userSearch)

    //   if statment based on search parameters
    // search param value finder
    // if value == mcu > mcufetcher

    });


//  bespoke fetch functions for each of the search parameters
// will need a function to call the functions individually
// each will make the cards
// each will need the control loop
function mcuFetcher(userSearch) {
    fetch(`http://www.omdbapi.com/?t=${userSearch}&apikey=${omdbKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     

        
        // Data pulling (nested within the .then function)
 
        let moviePoster = data.Poster

        let movieTitle = data.Title
        console.log('Movie title: ' + movieTitle)

        let releaseDate = data.Released
        console.log('Release date: ' + releaseDate)

        let moviePlot = data.Plot
        console.log('Plot: ' + moviePlot)

        // create


        const moviePosterEl = document.createElement('img')
        const movieTitleEl = document.createElement('h2')
        const releaseDateEl = document.createElement('p')
        const moviePlotEl = document.createElement('p')

        // ammend

        // moviePosterEl.setAttribute('src', `https://m.media-amazon.com/images/M/${moviePoster}.jpg`)

        movieTitleEl.textContent(movieTitle)
        releaseDateEl.textContent(releaseDate)
        moviePlotEl.textContent(moviePlot)


        // append

        document.getElementById('card-page').appendChild(movieTitleEl, releaseDateEl, moviePlotEl)



    }
    )

}






// array of Marvel search terms allowed